import {ServiceContainer} from "./ServiceContainer";
import {action, makeAutoObservable, observable} from "mobx";
import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";


const _ex = {
    "address": "string",
    "bankAddress": "string",
    "buildingYear": 0,
    "city": "string",
    "documentDate": "2021-09-25T10:17:55.274Z",
    "documentNumber": "string",
    "estimatedCost": 0,
    "kadasterNumber": "string",
    "passportNumber": "string",
    "passportSeries": "string",
    "personBirthDate": "2021-09-25T10:17:55.275Z",
    "personId": "string",
    "personName": "string",
    "personOccupation": "string",
    "personPatronymic": "string",
    "personSex": "MALE",
    "personSurname": "string",
    "remainingAmount": 0,
    "status": "NEW",
    "type": "string"
}

const _p = {
    "id": "5mJwUsunVoiAbt4F4Nnd86KuYoLbcoaiP8eVostTp3sz",
    "insuranceAgreement": {
        "documentNumber": "d09d35df02136d52536ca4601cdb059ec802f81b95dd268786295f84224f5b63",
        "personName": "Алексекй",
        "personSurname": "Сергеевич",
        "personPatronymic": "Балов",
        "personId": "4ba39f08-af08-48c0-9ee3-22383fe6cd86",
        "documentDate": "2021-09-25T22:41:58.150+00:00",
        "amount": 8000000,
        "insurerAddress": "3N5ihzq38ZbHJyHCkFD36nf836BxoenN8Qx",
        "mortgageDocument": {
            "documentNumber": "111111-ZZ-VV",
            "personName": "Алексекй",
            "personSurname": "Сергеевич",
            "personPatronymic": "Балов",
            "personId": "4ba39f08-af08-48c0-9ee3-22383fe6cd86",
            "personSex": "MALE",
            "personBirthDate": "1989-09-25T02:19:50.811+00:00",
            "personOccupation": "Артист",
            "documentDate": "2021-09-25T02:19:50.811+00:00",
            "passportNumber": "444876",
            "passportSeries": "1234",
            "type": "Дом",
            "city": "г. Ленинградск на амуре",
            "estimatedCost": 12000000,
            "remainingAmount": 8000000,
            "buildingYear": 2011,
            "kadasterNumber": "31:16:0:0034:043679-00",
            "address": "г. Ленинград, ул. Домоседская, кв. 34",
            "status": "WAIT_FOR_PAYMENT",
            "bankAddress": "3N9UQJ6bdCqzuPWoepZrSxa3exCDeyoANKd"
        },
        "risk": "PROPERTY",
        "payAmount": 7200,
        "payDate": 0,
        "status": "ACTIVE",
        "policeNumber": "111-22-33-4-XX"
    },
    "policeNumber": "111-22-33-4-XX",
    "dateStart": "2021-09-25T22:44:31.873+00:00",
    "dateEnd": "2022-09-25T22:44:31.873+00:00",
    "status": "WAIT_FOR_PAYMENT"
}



export type IMortgageAgreement = typeof _ex & {
    id: string
}


export type IPolice = typeof _p


export class MortgageAgreements {
    @observable requestStatus: 'initial' | 'pending' | 'success' | 'error' = 'initial'
    @observable list: IMortgageAgreement[] = [];

    @observable polices: IPolice[] = [];
    @observable error: any;

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this)
    }

    @action
    getList() {


        this.requestStatus = 'pending';
        return Promise.all([
            http.get<IMortgageAgreement[]>(ENDPOINTS.Api.listMortgage),
            http.get<IPolice[]>(ENDPOINTS.Api.polices),
        ])
            .then(([list, polices]) => {
                this.list = list;
                this.polices = polices;

                this.requestStatus = 'success'
            })
            .catch((e) => {
                this.error = e;
                this.requestStatus = 'error'
            })
    }

    @action
    updateList() {
        return http.get<IMortgageAgreement[]>(ENDPOINTS.Api.listOffers)
            .then(list => {
                this.list = list;

                this.requestStatus = 'success'
            })
            .catch((e) => {
                this.error = e;
                this.requestStatus = 'error'
            })
    }


}