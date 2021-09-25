import * as React from 'react';
import {Box, Link, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import {observer} from "mobx-react";
import {useService} from "../../core/decorators/service";
import {AuthService} from "../../services/AuthService";

export const Navigation = observer(function Navigation() {
    const authService = useService(AuthService)

    return (
        <Box>
            <Stack
                bg={useColorModeValue('primary', 'primary')}
                color={useColorModeValue('gray.600', 'white')}
                height={'100vh'}
                width={'250px'}
                align={'flex-start'}
                justify={'flex-start'}
                padding={25}
                spacing={'36px'}
                fontFamily={'Montserrat, Roboto Condensed, sans-serif'}
            >
                <HeaderLogo/>

                <HeaderNav/>


                <Link onClick={() => authService.clear()}>Выход</Link>
            </Stack>
        </Box>
    );
})

function HeaderLogo() {
    return (
        <Text fontWeight={600} fontSize={20} color={'white'}>
            Система ипотечного страхования
        </Text>
    )
}


function HeaderNav() {
    return (
        <Stack color={'white'} fontWeight={500} fontSize={16}>
            <Link>Ипотечные договоры</Link>
            <Link>Статистика</Link>
        </Stack>
    )
}