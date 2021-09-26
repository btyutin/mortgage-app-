import * as React from 'react';
import {Box, Flex, Grid, Stack, Text} from "@chakra-ui/react";
import {IMortgageAgreement} from "../services/MortgageAgreements";

export function ContractCardFull(props: IMortgageAgreement) {
    return (
        <Box bg={'white'} padding={'32px'} borderRadius={'4px'}>
            <Stack spacing={'48px'}>
                <Stack spacing={'24px'}>
                    <Stack width={'100%'} spacing={'8px'}>
                        <Text fontWeight={600} fontSize={22}>Ипотечный договор № {props.documentNumber}</Text>

                        <Text fontSize={14}>12.02.2021 – 12.02.2054</Text>
                    </Stack>

                    <DataItem text={'Остаток долга по ипотеке'} value={<Text fontWeight={'600'}>{props.remainingAmount} ₽</Text>}/>
                </Stack>

                <Stack spacing={'30px'}>
                    <Text fontWeight={600} fontSize={18}>Информация о заемщике</Text>
                    <Grid templateColumns={'1fr 1fr'} rowGap={'30px'}>
                        <DataItem text={'Ф.И.О.'} value={props.personSurname + ' ' + props.personPatronymic + ' ' + props.personName}/>
                        <DataItem text={'Дата рождения'} value={props.personBirthDate}/>
                        <DataItem text={'Пол'} value={props.personSex}/>
                        <DataItem text={'Сфера деятельности'} value={props.personOccupation}/>
                    </Grid>
                </Stack>

                <Stack spacing={'30px'}>
                    <Text fontWeight={600} fontSize={18}>Паспортные данные</Text>
                    <Grid templateColumns={'1fr 1fr'} rowGap={'30px'}>
                        <DataItem text={'Серия номер паспорта'} value={props.passportSeries + '' + props.passportNumber}/>
                        {/*<DataItem text={'Дата выдачи'} value={props.pa}/>*/}
                    </Grid>
                </Stack>


                <Stack spacing={'30px'}>
                    <Text fontWeight={600} fontSize={18}>Информация о недвижимости</Text>
                    <Grid templateColumns={'1fr 1fr'} rowGap={'30px'}>
                        <DataItem text={'Тип недвижимости'} value={props.type}/>
                        <DataItem text={'Оценочная стоимость'} value={props.estimatedCost + ' ₽'}/>

                        <DataItem text={'Город'} value={props.city}/>
                        <DataItem text={'Год постройки'} value={String(props.buildingYear)}/>
                    </Grid>

                    <Grid templateColumns={'1fr'} rowGap={'30px'}>
                        <DataItem text={'Кадастровый номер'} value={props.kadasterNumber}/>
                        <DataItem text={'Адрес'} value={props.address}/>
                    </Grid>
                </Stack>


                <Stack spacing={'30px'}>
                    <Text fontWeight={600} fontSize={18}>Документы</Text>

                    <Grid templateColumns={'1fr 1fr 1fr'} columnGap={'30px'}>
                        <Document name={'Договор ипотечного кредитования'} date={'12.02.2021'}/>
                        <Document name={'Оценка недвижимости'} date={'12.02.2021'}/>
                        <Document name={'Анкета страхователя'} date={'12.02.2021'}/>

                    </Grid>
                </Stack>

            </Stack>
        </Box>
    )
}


function Document({name,date}: { name: React.ReactElement | string, date: string }) {
    return (
        <Box cursor={'pointer'} height={'80px'} padding={'12.5px 16px'} bg={'#F6F6F6'} alignItems={'center'}>
            <Flex align={'center'} height={'100%'}>
                <Flex align={'center'} height={'100%'}>
                    <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.745 6.57351V22.4539C16.745 23.3079 16.0777 23.9999 15.2556 23.9999H1.48939C0.666687 23.9999 2.29377e-09 23.3079 2.29377e-09 22.4539V1.54608C-4.5154e-05 0.692062 0.666642 0 1.48939 0H10.4125L16.745 6.57351Z"
                            fill="#406CE0"/>
                        <path d="M12.6536 12.0496H4.09082V13.0373H12.6536V12.0496Z" fill="#ACD1FC"/>
                        <path d="M12.6536 14.2554H4.09082V15.2431H12.6536V14.2554Z" fill="#ACD1FC"/>
                        <path d="M12.6536 16.4612H4.09082V17.4489H12.6536V16.4612Z" fill="#ACD1FC"/>
                        <path d="M10.1804 18.6672H4.09082V19.6549H10.1804V18.6672Z" fill="#ACD1FC"/>
                        <path
                            d="M16.745 6.57351H11.9019C11.0792 6.57351 10.4125 5.88145 10.4125 5.02744V0L16.745 6.57351Z"
                            fill="#ACD1FC"/>
                    </svg>
                </Flex>

                <Box width={'19px'}/>

                <Stack justify={'center'}>
                    <Text fontWeight={600} fontSize={14} lineHeight={'17px'} >{name}</Text>
                    <Text fontSize={14} lineHeight={'17px'}>{date}</Text>
                </Stack>
            </Flex>
        </Box>
    )
}


function DataItem({text, value}: { text: string, value: string | React.ReactElement }) {
    return (
        <Stack spacing={'8px'}>
            <Text fontSize={14} opacity={.8}>{text}</Text>

            <Text fontSize={14}>{value}</Text>
        </Stack>
    )
}