import * as React from 'react';
import {observer} from "mobx-react";
import {Heading, Stack, Tab, TabList, Tabs} from "@chakra-ui/react";
import {ContractCard} from "../../components/ContractCard";
import {useHistory} from "react-router-dom";
import {useService} from "../../core/decorators/service";
import {MortgageAgreements} from "../../services/MortgageAgreements";

export const MortgageContracts = observer(function MortgageContracts(_props) {
    const history = useHistory();

    const mortgageAgreements = useService(MortgageAgreements)

    React.useEffect(() => {
        mortgageAgreements.getList()
    }, [])

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
                {mortgageAgreements.list.map(ma => {
                    return (
                        <ContractCard
                            key={ma.documentNumber}
                            onClick={() => history.push(`/contracts/${ma.documentNumber.replace('/', '|')}`)}
                            {...ma}
                        />
                    )
                })}
            </Stack>
        </Stack>
    );
})