import * as React from 'react'
import {Button, Flex, Grid, Link, Radio, Stack, Tag, TagLabel, Text} from "@chakra-ui/react";
import {IInsuranceOffer, InsuranceOffers} from "../../services/InsuranceOffers";
import {useService} from "../../core/decorators/service";
import {useTransaction} from "../../hooks/tx";
import {InsuranceOfferProcess} from "../../services/InsuranceOfferProcess";
import {observer} from "mobx-react";
import {InsLogo} from "../../components/InsLogos";


export const InsuranceCard = observer((props: IInsuranceOffer) => {
    const insuranceOfferProcess = useService(InsuranceOfferProcess)
    const insuranceOffers = useService(InsuranceOffers)

    const tx = useTransaction(() => {
        return insuranceOfferProcess.acceptOffer()
    }, {
        onDone: () => {
            insuranceOffers.updateList()
        }
    })

    function handleClickAccept() {
        // tx.process(props.risk, props.id)

        insuranceOfferProcess.toggle(props.id, props.risk)
    }


    console.log(props.insurerAddress)

    return (
        <Flex data-id={props.insurerAddress} bg={'white'} height={'94px'} borderRadius={'4px'}>
            {/*<Stack bg={'lightGray'} justify={'center'} padding={'16px'}>*/}
            {/*    <Radio*/}
            {/*        value={props.id}*/}
            {/*        isChecked={insuranceOfferProcess.selectedOffers.includes(props.id)}*/}
            {/*        onClick={() => insuranceOfferProcess.toggle(props.id)}*/}
            {/*    />*/}
            {/*</Stack>*/}

            <Flex bg={'lightGray'} width={'164px'} height={'100%'} justify={'center'} align={'center'}>
                <InsLogo keyID={props.insurerAddress}/>
            </Flex>

            <Grid templateColumns={'1.5fr 1fr 1fr'} width={'100%'} padding={`0 24px`}>
                <Stack justify={'center'}>
                    <Link textDecoration={'underline'}>Пример полиса</Link>
                    <Link textDecoration={'underline'}>Правила страхования</Link>
                </Stack>


                <Stack justify={'center'} align={'center'}>
                    <Text fontWeight={600} fontSize={18}>
                        {props.payAmount / 1000} ₽ <Text as={'span'} fontWeight={400} fontSize={14}>/ год</Text>
                    </Text>
                </Stack>

                <Stack justify={'center'} align={'flex-end'} spacing={'10px'}>
                    {props.status === 'ACCEPTED' && (
                        <Tag variant={'accepted'}>
                            <TagLabel>Активен</TagLabel>
                        </Tag>
                    )}



                    {props.status === 'DECLINED' && (
                        <Text fontWeight={400} fontSize={14} opacity={.8}>Отклонен</Text>
                    )}

                    {props.status === 'OFFERED' && (
                        <Button onClick={handleClickAccept} variant={insuranceOfferProcess.selectedOffers.get(props.risk) === props.id ? 'outline' : 'default'}>
                            {insuranceOfferProcess.selectedOffers.get(props.risk) === props.id
                                ? 'Полис выбран'
                                : 'Выбрать полис'
                            }
                        </Button>
                    )}
                </Stack>
            </Grid>
        </Flex>
    );
})


