export interface PaymentPlan {
  calculatePrice(): number;
  calculateInstallment(): number;
}
