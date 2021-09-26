import * as React from "react";
import {
    Box,
    Checkbox,
    Flex,
    FormControl,
    Heading,
    Link,
    Spinner,
    Stack,
    Tab,
    TabList,
    Tabs,
    Text
} from "@chakra-ui/react";
import {observer} from "mobx-react";
import {matchPath, useHistory, Link as RouterLink} from "react-router-dom";
import {useService} from "../core/decorators/service";
import {AuthService} from "../services/AuthService";
import {InsuranceOffers} from "../services/InsuranceOffers";
import {Button} from "../ui/Button";
import {InsuranceOfferProcess} from "../services/InsuranceOfferProcess";
import {useTransaction} from "../hooks/tx";
import {Select} from "../ui/Select";
import {InsuranceAgreements} from "../services/InsuranceAgreements";


const TAB_INDEXES = ['real-estate', 'life', 'title']


const TAB_MAPPING = {
    'real-estate': 'PROPERTY',
    'life': 'LIFE',
    'title': 'TITUL'
}

export const ClientContainer = observer(function ClientCont(props: React.PropsWithChildren<{}>) {
    const history = useHistory()
    const authService = useService(AuthService)
    const insuranceOffers = useService(InsuranceOffers)
    const insuranceAgreements = useService(InsuranceAgreements)
    const insuranceOfferProcess = useService(InsuranceOfferProcess)


    const {children} = props

    const [tabIndex, setTabIndex] = React.useState(0)

    React.useEffect(() => {
        const match = matchPath<{ index: string }>(history.location.pathname, {path: '/offers/:index'})

        setTabIndex(TAB_INDEXES.indexOf(match.params.index))

        insuranceOffers.setRisk(TAB_MAPPING[match.params.index])

        insuranceAgreements.getList()
    }, [])

    const handleTabsChange = (index) => {
        setTabIndex(index)

        history.push(`/offers/${TAB_INDEXES[index]}`)

        insuranceOffers.setRisk(TAB_MAPPING[TAB_INDEXES[index]])
    }

    const tx = useTransaction(() => {
        return insuranceOfferProcess.acceptOffer()
    }, {
        onDone: () => {
            insuranceOffers.updateList()
        }
    })

    const handleClickSubmit = () => {
        if (!insuranceOfferProcess.selectedOffers.get('PROPERTY')) {

            return;
        }
        const offers = [...insuranceOfferProcess.selectedOffers.keys()]
            .map(risk => ({
                risk,
                offerId: insuranceOfferProcess.selectedOffers.get(risk)
            }))

        tx.process(offers)
    }


    const uniqueAgreement = new Set(insuranceOffers.list.map(o => o.mortgageDocument.documentNumber))

    const policiesToAccept = insuranceAgreements.list.filter(i => i.status === 'WAIT_CLIENT')

    return (
        <Stack width={'100%'} padding={8} spacing={'36px'} align={'center'}>
            <Flex maxW={'850px'} justify={'flex-start'} width={'100%'}>
                <Link onClick={() => authService.clear()}>Выход</Link>

            </Flex>
            <Stack width={'100%'} maxW={'850px'} spacing={'16px'}>
                <Heading>Предложение от страховых компаний</Heading>

                {policiesToAccept.length > 0 && (
                    <Box  padding={`24px 0`}>
                        <Link as={RouterLink} to={'/insurance/agreement'} textDecoration={'underline'}>Полисы ожидают вашего подтвеждения ({policiesToAccept.length})</Link>
                    </Box>
                )}

                <Tabs variant="contracts-list" colorScheme="green" index={tabIndex} onChange={handleTabsChange}>
                    <TabList onChange={handleTabsChange}>
                        <Tab>Страхование недвижимости</Tab>
                        <Tab>Страхование жизни</Tab>
                        <Tab>Страхование титула</Tab>
                    </TabList>
                </Tabs>
            </Stack>
            <Stack width={'100%'} maxW={'850px'} align={'flex-start'}>
                <Text fontWeight={700} fontSize={18}>По договору</Text>
                <Stack>
                    <FormControl>
                        <Select placeholder="Не выбран" size="lg" marginLeft={4}
                                onChange={(ev) => insuranceOffers.setInsurer(ev.target.value)}>
                            {[...uniqueAgreement].map(a => {
                                return <option value={a}>{a}</option>
                            })}
                        </Select>
                    </FormControl>
                </Stack>
            </Stack>


            <Stack width={'100%'} maxW={'850px'} spacing={'28px'}>
                {insuranceOffers.requestStatus !== 'success' && (
                    <Spinner/>
                )}

                {children}
            </Stack>

            <Stack bg={'white'} width={'100%'} maxW={'850px'}>
                <Flex padding={'26px'}>

                    <Stack>
                        <Checkbox defaultIsChecked>Автоматически продлять полис ежегодно</Checkbox>
                        <Checkbox defaultIsChecked>Разделить оплату на ежемесячную</Checkbox>
                    </Stack>

                    <Stack>

                    </Stack>

                    <Stack align={'flex-end'} flexGrow={1}>
                        <Button
                            isLoading={tx.requestStatus === 'pending'}
                            isActive={!insuranceOfferProcess.selectedOffers.get('PROPERTY')}
                            onClick={handleClickSubmit}
                        >Продолжить</Button>
                    </Stack>
                </Flex>

            </Stack>
        </Stack>
    )
})


