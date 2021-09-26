import {ServiceContainer} from "./ServiceContainer";
import {action, makeAutoObservable, observable} from "mobx";
import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";


const _ex = {
    "documentNumber": "8c98025860d64bdf82672063dccba7837b46f2dc95af684f1d5fc1f90f50ce7e",
    "personName": "Леонид",
    "personSurname": "Сергеевич",
    "personPatronymic": "Рипейный",
    "personId": "4ba39f08-af08-48c0-9ee3-22383fe6cd86",
    "documentDate": "2021-09-25T14:06:11.047+00:00",
    "amount": 8000000,
    "mortgageDocument": {
        "documentNumber": "XXYY-12345678",
        "personName": "Леонид",
        "personSurname": "Сергеевич",
        "personPatronymic": "Рипейный",
        "personId": "4ba39f08-af08-48c0-9ee3-22383fe6cd86",
        "personSex": "MALE",
        "personBirthDate": "1989-09-25T02:19:50.811+00:00",
        "personOccupation": "Программист",
        "documentDate": "2021-09-25T02:19:50.811+00:00",
        "passportNumber": "444876",
        "passportSeries": "1234",
        "type": "Дом",
        "city": "г. Ленинград",
        "estimatedCost": 13000000,
        "remainingAmount": 8000000,
        "buildingYear": 2011,
        "kadasterNumber": "31:16:0:0034:043679-00",
        "address": "г. Ленинград, ул. Домоседская, кв. 34",
        "status": "NEW",
        "bankAddress": "3N9UQJ6bdCqzuPWoepZrSxa3exCDeyoANKd"
    },
    "risk": "PROPERTY",
    "payAmount": 5280000,
    "payDate": 0,
    "status": "NEW",
    "policeNumber": ""
}

export type IInsuranceAgreement = typeof _ex & {
    id: string
}


export class InsuranceAgreements {
    @observable requestStatus: 'initial' | 'pending' | 'success' | 'error' = 'initial'
    @observable list: IInsuranceAgreement[] = [];
    @observable error: any;

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this)
    }

    @action
    getList() {
        this.requestStatus = 'pending';
        return http.get<IInsuranceAgreement[]>(ENDPOINTS.Api.insuranceList)
            .then(list => {
                this.list = list;

                this.requestStatus = 'success'
            })
            .catch((e) => {
                this.error = e;
                this.requestStatus = 'error'
            })
    }

    @action
    updateList() {
        return http.get<IInsuranceAgreement[]>(ENDPOINTS.Api.listOffers)
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
