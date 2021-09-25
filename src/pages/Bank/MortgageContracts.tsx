import * as React from 'react';
import {observer} from "mobx-react";
import {Heading, Stack, Tab, TabList, Tabs} from "@chakra-ui/react";
import {ContractCard} from "../../components/ContractCard";
import {useHistory} from "react-router-dom";

export const MortgageContracts = observer(function MortgageContracts(_props) {
    const history = useHistory();

    return (
        <Stack width={'100%'} spacing={'30px'}>
            <Stack spacing={'15px'}>
                <Heading>Ипотечные договоры</Heading>

                <Tabs variant="contracts-list" colorScheme="green">
                    <TabList>
                        <Tab>Все</Tab>
                        <Tab>Новые</Tab>
                        <Tab>Истекает</Tab>
                    </TabList>
                </Tabs>
            </Stack>

            <Stack spacing={'16px'}>
                <ContractCard onClick={() => history.push('/contracts/22')}/>
                <ContractCard onClick={() => history.push('/contracts/22')}/>
                <ContractCard onClick={() => history.push('/contracts/22')}/>
            </Stack>
        </Stack>
    );
})