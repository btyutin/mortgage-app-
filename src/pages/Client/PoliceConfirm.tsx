import * as React from 'react'
import {observer} from "mobx-react";
import {useService} from "../../core/decorators/service";
import {AuthService} from "../../services/AuthService";
import {
    Flex,
    FormControl,
    Grid,
    Heading,
    HStack,
    Link,
    PinInput,
    PinInputField,
    Spinner,
    Stack,
    Text
} from "@chakra-ui/react";
import {InsuranceAgreement} from "../../services/InsuranceAgreement";
import {InsuranceOfferProcess} from "../../services/InsuranceOfferProcess";
import {useHistory} from "react-router-dom";
import {useTransaction} from "../../hooks/tx";
import {InsLogo} from "../../components/InsLogos";
import {InsuranceAgreements} from "../../services/InsuranceAgreements";
import {MobxForm, TextInput} from "../../core/form/ControlInput";
import {Button} from "../../ui/Button";

export const PoliceConfirm = observer(({match}) => {
    const authService = useService(AuthService)
    const insuranceAgreement = useService(InsuranceAgreement)

    React.useEffect(() => {
        insuranceAgreement.getInsurance(match.params.id)
    }, [])


    return (
        <Stack width={'100%'} padding={8} spacing={'36px'} align={'center'}>
            <Flex maxW={'850px'} justify={'flex-start'} width={'100%'}>
                <Link onClick={() => authService.clear()}>Выход</Link>

            </Flex>

            <Stack width={'100%'} maxW={'850px'} spacing={'16px'}>
                <Heading>Оформление полиса</Heading>
            </Stack>


            <Stack width={'100%'} maxW={'850px'}>
                {insuranceAgreement.requestStatus === 'pending' && (
                    <Spinner/>
                )}

                {insuranceAgreement.requestStatus === 'success' && (

                    <>
                        <InsuranceCard {...insuranceAgreement.insurance}/>

                        <SmsCode/>
                    </>
                )}

            </Stack>
        </Stack>
    );
})

export const SmsCode = observer(() => {
    const [step, setStep] = React.useState('initial')

    const insuranceOfferProcess = useService(InsuranceOfferProcess)
    const insuranceAgreement = useService(InsuranceAgreement)

    const history = useHistory()

    console.log(insuranceAgreement.insurance.documentNumber)

    const tx = useTransaction(() => {
        return insuranceOfferProcess.acceptByClient(insuranceAgreement.insurance.documentNumber)
    }, {
        onDone: () => {

            setTimeout(() => {

                history.push('/insurance/agreement')
            }, 2000)
        }
    })

    const handleClick = () => {
        tx.process()
    }

    const initial = (
        <Stack spacing={'18px'}>
            <Text>Введите номер моблиьного телефона</Text>

            <MobxForm values={{number: '+79157772233'}} onSubmit={({number}) => {
                setStep('sms')
            }}>
                <Stack spacing={'24px'}>
                    <FormControl id="limit">

                        <TextInput placeholder={'Введите номер телефона'} name={'number'}/>
                    </FormControl>

                    <Flex>
                        <Button type={'submit'}>Отправить</Button>
                    </Flex>
                </Stack>
            </MobxForm>
        </Stack>
    )

    const inputSms = (
        <Stack spacing={'24px'}>
            <Text fontWeight={600} fontSize={22}>Введите код из СМС</Text>

            <Text fontSize={`14px`}>На ваш номер телефона +7 (***)***-**-73 направлено СМС с кодом
                подтверждения. </Text>

            <HStack>
                <PinInput>
                    <PinInputField bg={'white'}/>
                    <PinInputField bg={'white'}/>
                    <PinInputField bg={'white'}/>
                    <PinInputField bg={'white'}/>
                </PinInput>
            </HStack>

            <Flex>
                <Button isLoading={tx.requestStatus === 'pending'} onClick={handleClick}>Подтвердить</Button>
            </Flex>
        </Stack>
    )

    return (
        <Stack>
            {step === 'initial' && initial}
            {step === 'sms' && inputSms}
        </Stack>
    )
})


export const InsuranceCard = observer((props: any) => {
    const insuranceOfferProcess = useService(InsuranceOfferProcess)
    const insuranceAgreements = useService(InsuranceAgreements)

    const history = useHistory()

    const tx = useTransaction(() => {
        return insuranceOfferProcess.acceptByClient(props.documentNumber)
    }, {
        onDone: () => {

            insuranceAgreements.updateList()
        }
    })

    function handleClickAccept() {
        // tx.process()

        history.push(`/insurance/police/${props.documentNumber}/confirm`)
    }

    return (
        <Flex bg={'white'} height={'94px'} borderRadius={'4px'}>
            <Flex bg={'lightGray'} width={'164px'} height={'100%'} justify={'center'} align={'center'}>
                <InsLogo keyID={props.risk === 'PROPERTY' ?  `3N5ihzq38ZbHJyHCkFD36nf836BxoenN8Qx` : `3N5xJWrQPrXnZxcvqu9W2xTJ9FgXFJYiaEX`}/>
            </Flex>

            <Grid templateColumns={'1.5fr 1fr'} width={'100%'} padding={`0 24px`}>
                <Stack justify={'center'}>
                    <Link textDecoration={'underline'}>Пример полиса</Link>
                    <Link textDecoration={'underline'}>Правила страхования</Link>
                </Stack>


                <Stack justify={'center'} align={'center'}>
                    <Text fontWeight={600} fontSize={18}>
                        {props.payAmount} ₽ <Text as={'span'} fontWeight={400} fontSize={14}>/ год</Text>
                    </Text>
                </Stack>
            </Grid>
        </Flex>
    );
})