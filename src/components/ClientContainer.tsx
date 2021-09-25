import * as React from "react";
import {Heading, Link, Stack, Tab, TabList, Tabs} from "@chakra-ui/react";
import {observer} from "mobx-react";
import {matchPath, useHistory} from "react-router-dom";
import {useService} from "../core/decorators/service";
import {AuthService} from "../services/AuthService";

const TAB_INDEXES = ['real-estate', 'life', 'title']

export const ClientContainer = observer(function ClientCont(props: React.PropsWithChildren<{}>) {
    const history = useHistory()
    const authService = useService(AuthService)
    const {children} = props

    const [tabIndex, setTabIndex] = React.useState(0)

    React.useEffect(() => {
        const match = matchPath<{ index: string }>(history.location.pathname, {path: '/offers/:index'})

        setTabIndex(TAB_INDEXES.indexOf(match.params.index))
    }, [])

    const handleTabsChange = (index) => {
        setTabIndex(index)

        history.push(`/offers/${TAB_INDEXES[index]}`)
    }

    return (
        <Stack width={'100%'} padding={8} spacing={'36px'} align={'center'}>
            <Link onClick={() => authService.clear()}>Выход</Link>

            <Stack width={'100%'} maxW={'850px'} spacing={'28px'}>
                <Heading>Предложение от страховых компаний</Heading>

                <Tabs variant="contracts-list" colorScheme="green" index={tabIndex} onChange={handleTabsChange}>
                    <TabList onChange={handleTabsChange}>
                        <Tab>Страхование недвижимости</Tab>
                        <Tab>Страхование жизни</Tab>
                        <Tab>Страхование титула</Tab>
                    </TabList>
                </Tabs>
            </Stack>
            <Stack width={'100%'} maxW={'850px'} spacing={'28px'}>

                {children}
            </Stack>
        </Stack>
    )
})


