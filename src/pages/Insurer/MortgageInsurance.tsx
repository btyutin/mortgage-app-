import * as React from 'react';
import {observer} from "mobx-react";
import {Heading, Stack, Tab, TabList, Tabs} from "@chakra-ui/react";
import {InsuranceCard} from "../../components/InsuranceCard";
import {useHistory} from "react-router-dom";
import {useService} from "../../core/decorators/service";
import {InsuranceAgreements} from "../../services/InsuranceAgreements";

export const MortgageInsurance = observer(function MortgageInsurance() {
    const history = useHistory();

    const insuranceAgreement = useService(InsuranceAgreements)

    React.useEffect(() => {
        insuranceAgreement.getList()
    }, [])

    return (
        <Stack width={'100%'} spacing={'30px'}>
            <Stack spacing={'15px'}>
                <Heading>Страховые полисы</Heading>

                <Tabs variant="contracts-list" colorScheme="green">
                    <TabList>
                        <Tab>Все</Tab>
                        <Tab>Запрошен</Tab>
                        <Tab>Активен</Tab>
                    </TabList>
                </Tabs>
            </Stack>


            <Stack spacing={'16px'}>
                {insuranceAgreement.list.map(ma => <InsuranceCard key={ma.documentNumber}
                                                                  onClick={() => history.push(`/contracts/${ma.documentNumber.replace('/', '|')}`)} {...ma}/>)}
            </Stack>
        </Stack>
    )
})
