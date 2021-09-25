import * as React from "react";
import {Navigation} from "./Navbar/Navbar";
import {Box, Flex, Spacer, Stack} from "@chakra-ui/react";
import {observer} from "mobx-react";


export const AuthorizedContainer = observer(function AuthorizedContainer(props: React.PropsWithChildren<{}>) {
    const {children} = props

    return (
        <Box w="100%" justifyContent={'center'} position={'relative'} overflowX={'hidden'}>
            <Box position={'fixed'}>
                <Navigation/>
            </Box>

            <Flex justify={'flex-start'} width={`calc(100vw - 250px)`} minH={'100vh'} marginLeft={'250px'} bg={'#FBFBFB'}>
                <Stack width={'100%'} maxW={'850px'} marginLeft={'100px'} mt={'50px'}>
                    {children}
                </Stack>
            </Flex>
        </Box>
    )
})


