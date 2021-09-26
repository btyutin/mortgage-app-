import {IInsuranceAgreement} from "../InsuranceAgreements";

const OAuth = {
    token: '/api/v0/vst-oauth2/oauth/token'
}

const Identity = {
    userInfo: '/api/v0/vst-identity/persons/info',

}

const Api = {
    list: '/api/v0/rent-app/rent',
    enterCreditConditions: '/api/v0/rent-app/rent/{id}/enterCreditConditions',
    accept: '/api/v0/rent-app/rent/{id}/acceptCreditConditions',

    // New
    observeTx: '/api/v0/mortgage-app/tx/tx/{id}/status',

    listOffers: '/api/v0/mortgage-app/insurance/offers',
    acceptOffer: '/api/v0/mortgage-app/insurance/offers/accept',

    listMortgage:  '/api/v0/mortgage-app/mortgage/agreements/',
    getMortgage:  '/api/v0/mortgage-app/mortgage/agreements/{id}',

    insuranceList: '/api/v0/mortgage-app/insurance/agreements/',
    getInsurance: '/api/v0/mortgage-app/insurance/agreements/{id}',

    acceptByCompany: '/api/v0/mortgage-app/insurance/agreements/{id}/acceptByCompany',
    acceptByUser: '/api/v0/mortgage-app/insurance/agreements/{id}/acceptByUser',

    polices: '/api/v0/mortgage-app/insurance/polices'
}

export const ENDPOINTS = {
    OAuth,
    Identity,
    Api
}