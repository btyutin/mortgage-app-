import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Flex, Link, Stack} from "@chakra-ui/react";
import {ContractCardFull} from "../../components/ContractCardFull";
import {InsurancePolicies} from "../../components/InsurancePolicies";
import {Link as RouterLink} from 'react-router-dom';

export const MortgageContract = observer(function MortgageContract(_props) {
    return (
        <Stack width={'100%'} spacing={'30px'}>
            <Link as={RouterLink} to={'/contracts'}>
                <Flex align={'center'}>
                    <Box marginRight={'18px'}>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 1.5L1.5 6.5L6.5 11.5" stroke="#170A4A" strokeWidth="2"
                                  strokeLinejoin="round"/>
                        </svg>
                    </Box>
                    К списку договоров
                </Flex>

            </Link>
            <ContractCardFull/>

            <InsurancePolicies/>
        </Stack>
    );
})