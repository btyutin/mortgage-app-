import * as React from 'react'
import {observer} from "mobx-react";
import {Box, Stack} from "@chakra-ui/react";
import {InsuranceCard} from "./InsuranceCard";
import {useService} from "../../core/decorators/service";
import {InsuranceOffers} from "../../services/InsuranceOffers";
import {toJS} from "mobx";

export const RealEstateInsurancePage = observer(function RealEstateInsurancePage(_props) {
    const insuranceOffers = useService(InsuranceOffers);

    React.useEffect(() => {
        insuranceOffers.getList();
    }, [])

    if (insuranceOffers.requestStatus === 'pending') {
        return null
    }

    return (
        <Box>
            <Stack spacing={'16px'}>
                {insuranceOffers.byType(insuranceOffers.risk).map(i => {
                    return <InsuranceCard key={i.id} {...i}/>
                })}
            </Stack>
        </Box>
    );
})