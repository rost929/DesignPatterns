import { PaymentPlan } from "../../implementation/PaymentPlan";
import { Product } from "../Product";

export class Drone extends Product {
    private name: string;
    constructor (name : string , paymentPlan : PaymentPlan ) {
        super(paymentPlan);
        this.name = name;
    }
    public getName () : string {
        return this.name;
    }
}