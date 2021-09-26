import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Flex, FormControl, FormLabel, Grid, Stack, Text} from "@chakra-ui/react";
import {Button} from "../ui/Button";
import {useService} from "../core/decorators/service";
import {InsuranceOfferProcess} from "../services/InsuranceOfferProcess";
import {useTransaction} from "../hooks/tx";
import {MobxForm, TextInput} from "../core/form/ControlInput";
import {InsuranceAgreement} from "../services/InsuranceAgreement";

export const InsurancePolicy = observer(() => {
    const insuranceOfferProcess = useService(InsuranceOfferProcess)
    const insuranceAgreement = useService(InsuranceAgreement)

    const tx = useTransaction(() => {
        return insuranceOfferProcess.acceptByCompany(insuranceAgreement.insurance.documentNumber)
    }, {
        onDone: () => {
            setTimeout(() => {
                insuranceAgreement.getInsurance(insuranceAgreement.insurance.documentNumber)
            }, 2000)
        }
    })

    function handleClickAgree(values) {
        tx.process(values)
    }

    return (
        <Stack bg={'white'} padding={'24px'} width={'100%'}>
            <Text fontWeight={'600'} fontSize={22}>Данные о полисе</Text>

            <Stack align={'flex-start'} spacing={'24px'} width={'100%'} flexGrow={1}>
                <Text>
                    <Flex align={'center'}>
                        <Box padding={'20px'}><Icon/></Box>
                        Автоматическое продление
                    </Flex>
                    <Flex align={'center'}>
                        <Box padding={'0 20px'}><Icon/></Box>
                        Ежемесячный платеж
                    </Flex>
                </Text>

                <MobxForm
                    values={{payAmount: 7000, policeNumber: '111-22-33-4-R'}}
                    onSubmit={handleClickAgree}
                >
                    <Stack spacing={'24px'}>
                        <Grid templateColumns={'1fr 1fr'} columnGap={'30px'} width={'100%'}>
                            <FormControl id="limit">
                                <FormLabel>№ Страхового полиса</FormLabel>
                                <TextInput placeholder={'№ Страхового полиса'} name={'policeNumber'}/>
                            </FormControl>
                            <FormControl id="limit">
                                <FormLabel>Стоимость полиса, ₽ </FormLabel>
                                <TextInput placeholder={'Стоимость полиса, ₽ '} type={'number'} name={'payAmount'}/>
                            </FormControl>
                        </Grid>

                        <Flex>
                            <Button isLoading={tx.requestStatus === 'pending'} type={'submit'}>Одобрить</Button>
                        </Flex>
                    </Stack>
                </MobxForm>
            </Stack>
        </Stack>
    )
})

function Icon() {
    return (
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M11.3589 0.651901C11.5512 0.850129 11.5463 1.16667 11.3481 1.35892L4.64597 7.85893C4.45202 8.04703 4.14372 8.04703 3.94977 7.85893L0.151901 4.17559C-0.0463277 3.98334 -0.051174 3.6668 0.141076 3.46857C0.333326 3.27034 0.649872 3.26549 0.8481 3.45774L4.29787 6.80348L10.6519 0.641076C10.8501 0.448826 11.1667 0.453672 11.3589 0.651901Z"
                  fill="#2CB049"/>
        </svg>
    )
}