import {ServiceContainer} from "./ServiceContainer";
import {action, makeAutoObservable, observable} from "mobx";
import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";
import {IMortgageAgreement, IPolice} from "./MortgageAgreements";


export class MortgageAgreement {
    @observable requestStatus: 'initial' | 'pending' | 'success' | 'error' = 'initial'
    @observable mortgage: IMortgageAgreement;
    @observable error: any;

    @observable polices: any[] = [];

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this)
    }

    @action
    getMortgage(id: string) {
        this.requestStatus = 'pending';


        return Promise.all([
            http.get<IMortgageAgreement>(ENDPOINTS.Api.getMortgage.replace('{id}', id)),
            http.get<IPolice[]>(ENDPOINTS.Api.polices),
        ])
            .then(([list, mortgages]) => {
                this.mortgage = list;

                const polices = mortgages.filter((p) => {
                    return p.insuranceAgreement.mortgageDocument.documentNumber === list.documentNumber
                })

                this.polices = polices;

                this.requestStatus = 'success'
            })
            .catch((e) => {
                this.error = e;
                this.requestStatus = 'error'
            })
    }
}