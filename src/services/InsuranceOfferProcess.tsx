import {ServiceContainer} from "./ServiceContainer";
import {action, makeAutoObservable, observable} from "mobx";
import {Transactional} from "./ConditionsService";
import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";

export class InsuranceOfferProcess {
    @observable pool = [];

    @observable selectedOffers = new Map()

    @action
    toggle(id: string, risk: string) {
        const current = this.selectedOffers.get(risk)


        if (id === current) {
            this.selectedOffers.delete(risk)

            return;
        }

        this.selectedOffers.set(risk, id)
    }

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this)
    }

    @action
    acceptOffer() {
        const tx = new Transactional((offers) => http.post(ENDPOINTS.Api.acceptOffer, offers))

        this.pool = [...this.pool, tx]

        return tx;
    }

    @action
    acceptByCompany(id: string) {
        const tx = new Transactional((policy) => http.post(ENDPOINTS.Api.acceptByCompany.replace(`{id}`, id), policy))

        this.pool = [...this.pool, tx]

        return tx;
    }

    @action
    acceptByClient(id: string) {
        const tx = new Transactional((offers) => http.post(ENDPOINTS.Api.acceptByUser.replace(`{id}`, id), {}))

        this.pool = [...this.pool, tx]

        return tx;
    }
}