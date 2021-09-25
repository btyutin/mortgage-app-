import * as React from 'react';
import {AuthGuard} from "../core/guards/auth-guard";
import {observer} from "mobx-react";
import {Redirect, Route, Switch} from "react-router-dom";
import {LoginPage} from "../pages/Auth/LoginPage";
import {AuthorizedContainer} from "../components/AuthorizedContainer";
import {LoginContainer} from "../components/LoginContainer";
import {RealEstateInsurancePage} from "../pages/Client/RealEstateInsurancePage";
import {useService} from "../core/decorators/service";
import {ProfileService} from "../services/ProfileService";
import {MortgageContracts} from "../pages/Bank/MortgageContracts";
import {MortgageContract} from "../pages/Bank/MortgageContract";
import {ClientContainer} from "../components/ClientContainer";
import {LifeInsurancePage} from "../pages/Client/LifeInsurancePage";
import {TitleInsurancePage} from "../pages/Client/TitleInsurancePage";

export const Routing = observer(function Routing() {
    const profileService = useService(ProfileService)

    const isInsurer = profileService.rolesInclude('INSURER')
    const isClient = profileService.rolesInclude('BORROWER')
    const isBank = profileService.rolesInclude('BANK')

    const insurerRoutes = (
        <Switch>
            <Route path={"/contracts"}>
                {({match}) => {
                    return (
                        <Switch>
                            <Route path={match.path + '/:id'} component={MortgageContract}/>
                            <Route path={match.path} exact component={MortgageContracts}/>
                        </Switch>
                    )
                }}
            </Route>

            <Redirect to={'/contracts'}/>
        </Switch>
    );

    const clientRoutes = (
        <Switch>
            <Route path={'/offers/real-estate'} component={RealEstateInsurancePage}/>
            <Route path={'/offers/life'} component={LifeInsurancePage}/>
            <Route path={'/offers/title'} component={TitleInsurancePage}/>

            <Redirect to={'/offers/real-estate'}/>
        </Switch>
    )

    const bankRoutes = (
        <Switch>
            <Route path={"/contracts"}>
                {({match}) => {
                    return (
                        <Switch>
                            <Route path={match.path + '/:id'} component={MortgageContract}/>
                            <Route path={match.path} exact component={MortgageContracts}/>
                        </Switch>
                    )
                }}
            </Route>

            <Redirect to={'/contracts'}/>
        </Switch>
    )


    return (
        <AuthGuard fn={(s) => s === 'authenticated'}>
            {(authenticated) => {
                if (!authenticated) {
                    return (
                        <LoginContainer>
                            <Switch>
                                <Route path={"/login"} component={LoginPage}/>

                                <Redirect to={'/login'}/>
                            </Switch>
                        </LoginContainer>
                    )
                }

                return (
                    <>
                        {isInsurer || isBank && (
                            <AuthorizedContainer>
                                {isInsurer && insurerRoutes}

                                {isBank && bankRoutes}
                            </AuthorizedContainer>
                        )}

                        {isClient && <ClientContainer children={clientRoutes}/>}
                    </>
                )
            }}
        </AuthGuard>
    )
})


