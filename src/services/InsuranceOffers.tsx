import {action, computed, makeAutoObservable, observable} from "mobx";
import {ServiceContainer} from "./ServiceContainer";
import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";
import {IRent} from "./RentList";


const _ex = {
    "amount": 0,
    "documentDate": "2021-09-25T08:35:44.837Z",
    "documentNumber": "string",
    "mortgageDocument": {
        "address": "string",
        "bankAddress": "string",
        "buildingYear": 0,
        "city": "string",
        "documentDate": "2021-09-25T08:35:44.837Z",
        "documentNumber": "string",
        "estimatedCost": 0,
        "kadasterNumber": "string",
        "passportNumber": "string",
        "passportSeries": "string",
        "personBirthDate": "2021-09-25T08:35:44.837Z",
        "personId": "string",
        "personName": "string",
        "personOccupation": "string",
        "personPatronymic": "string",
        "personSex": "MALE",
        "personSurname": "string",
        "remainingAmount": 0,
        "status": "NEW",
        "type": "string"
    },
    "payAmount": 0,
    "payDate": 0,
    "personId": "string",
    "personName": "string",
    "personPatronymic": "string",
    "personSurname": "string",
    "policeNumber": "string",
    "risk": "PROPERTY",
    "status": "NEW"
}

export type IInsuranceOffer = typeof _ex & {
    id: string
    insurerAddress: string
}


export class InsuranceOffers {
    @observable docNum: string;

    @observable risk: 'TITUL' | 'PROPERTY' | 'LIFE' = 'PROPERTY'

    @observable requestStatus: 'initial' | 'pending' | 'success' | 'error' = 'initial'
    @observable list: IInsuranceOffer[] = [];
    @observable error: any;

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this)
    }

    @action
    public setRisk(risk: any){
        this.risk = risk;
    }

    @action
    public setInsurer(risk: any){
        this.docNum = risk;
    }

    @action
    getList() {
        this.requestStatus = 'pending';
        return http.get<IInsuranceOffer[]>(ENDPOINTS.Api.listOffers)
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
        return http.get<IInsuranceOffer[]>(ENDPOINTS.Api.listOffers)
            .then(list => {
                this.list = list;

                this.requestStatus = 'success'
            })
            .catch((e) => {
                this.error = e;
                this.requestStatus = 'error'
            })
    }

    public byType(risk: string = 'PROPERTY') {
        return this.list.filter(of => {
            if (!this.docNum) {
                return of.risk === risk
            }

            return of.risk === risk && of.mortgageDocument.documentNumber === this.docNum
        })
    }
}
