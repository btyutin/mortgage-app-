import {ServiceContainer} from "./ServiceContainer";
import {action, makeAutoObservable, observable} from "mobx";
import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";
import {IMortgageAgreement} from "./MortgageAgreements";


export class InsuranceAgreement {
    @observable requestStatus: 'initial' | 'pending' | 'success' | 'error' = 'initial'
    @observable insurance: any;
    @observable error: any;

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this)
    }

    @action
    getInsurance(id: string) {
        this.requestStatus = 'pending';
        return http.get<IMortgageAgreement>(ENDPOINTS.Api.getInsurance.replace('{id}', id))
            .then(list => {
                this.insurance = list;

                this.requestStatus = 'success'
            })
            .catch((e) => {
                this.error = e;
                this.requestStatus = 'error'
            })
    }
}