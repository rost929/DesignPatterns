import { PaymentPlan } from "../../implementation/PaymentPlan";


export class MasterScotiaBank implements PaymentPlan {

   private installments: number;
   private amount : number;
   private interestAmount : number = 0;

   constructor (installments: number , amount : number) {
        this.installments = installments;
        this.amount = amount;
        this.calculateInterest();
   } 

    calculatePrice(): number {
        let price = this.amount + this.interestAmount;   
        console.log(`Total price product with Mastercard Scotia Bank ${price} USD`);
        return price;    
    }

    calculateInstallment(): number {
        let installment: number = (this.amount / this.installments) + this.interestAmount / this.installments;
        console.log(`Monthly installment with Mastercard Scotia bank ${installment} USD`);
        return installment;
    }

    calculateInterest() : void {
        this.interestAmount = this.amount * 0.0278 * this.installments;
    }

}