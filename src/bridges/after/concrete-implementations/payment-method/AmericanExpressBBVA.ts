import { PaymentPlan } from '../../implementation/PaymentPlan';

export class AmericanExpressBBVA implements PaymentPlan {
  private installments: number;
  private amount: number;
  private interestAmount = 0.0;

  constructor(installments: number, amount: number) {
    this.installments = installments;
    this.amount = amount;
    this.calculateInterest();
  }

  calculatePrice(): number {
    const price = this.amount + this.interestAmount;
    console.log(`Total price product with American express BBVA ${price} USD`);
    return price;
  }

  calculateInstallment(): number {
    const installment: number =
      this.amount / this.installments + this.interestAmount / this.installments;
    console.log(
      `Monthly installment with American Express BBVA ${installment} USD`
    );
    return installment;
  }

  calculateInterest(): void {
    this.interestAmount = this.amount * 0.0421 * this.installments;
  }
}
