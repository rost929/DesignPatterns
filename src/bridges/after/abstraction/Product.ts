import { PaymentPlan } from "../implementation/PaymentPlan";

export abstract class Product {
    protected paymentPlan : PaymentPlan;

    constructor (paymentPlan : PaymentPlan) {
        this.paymentPlan = paymentPlan;
    }

    public getPrice() : number {
        return this.paymentPlan.calculatePrice();
    }

    public getInstallmentAmount() : number {
        return this.paymentPlan.calculateInstallment();
    }

    public setPaymentPlan (paymentPlan : PaymentPlan) : void {
        this.paymentPlan = paymentPlan;
    }
} 