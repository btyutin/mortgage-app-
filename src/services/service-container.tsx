import {AuthService, PersistentStorage} from "./AuthService";
import {AirportApplication} from "../app/Application";
import {ServiceContainer} from "./ServiceContainer";
import {ProfileService} from "./ProfileService";
import {RentList} from "./RentList";
import {ConditionsService} from "./ConditionsService";
import {InsuranceOffers} from "./InsuranceOffers";
import {InsuranceOfferProcess} from "./InsuranceOfferProcess";
import {MortgageAgreements} from "./MortgageAgreements";
import {MortgageAgreement} from "./MortgageAgreement";
import {InsuranceAgreements} from "./InsuranceAgreements";
import {InsuranceAgreement} from "./InsuranceAgreement";

export const sc = new ServiceContainer()

sc.set(new AuthService(new PersistentStorage()))
sc.set(new AirportApplication())
sc.set(new ProfileService(sc))
sc.set(new RentList(sc))
sc.set(new ConditionsService(sc))

//
sc.set(new InsuranceOffers(sc))
sc.set(new InsuranceOfferProcess(sc))
sc.set(new MortgageAgreements(sc))
sc.set(new MortgageAgreement(sc))
sc.set(new InsuranceAgreements(sc))
sc.set(new InsuranceAgreement(sc))