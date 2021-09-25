import * as React from 'react'
import {observer} from "mobx-react";
import {Box, Flex, Text} from "@chakra-ui/react";

import {Logo} from './Logo';

export const LoginContainer = observer(function AuthorizedContainer(props: React.PropsWithChildren<{}>) {
    const {children} = props


    return (
        <Box w="100%"
             height={'100vh'} position={'relative'}>
            <Box
                position={'absolute'}
                w="100%"
                height={'100vh'}

                opacity={'0.4'}
            />

            <Box w="100%"
                 height={'100vh'}
                 backgroundSize={'cover'}
            />


            <Box position={'absolute'} top={'0'} width={'100%'} height={'100%'}>
                <Flex width={'100%'} justifyContent={'center'} mt={10} fontFamily={'Montserrat, Roboto Condensed, sans-serif'}>
                    <Text fontWeight={600} fontSize={20} color={'black'}>Система ипотечного страхования</Text>

                </Flex>

                {children}
            </Box>
        </Box>
    )
})
