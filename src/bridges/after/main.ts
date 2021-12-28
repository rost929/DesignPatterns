import { AmericanExpressBBVA } from './concrete-implementations/payment-method/AmericanExpressBBVA';
import { Book } from './abstraction/refined-abstraction/Book';
import { MasterScotiaBank } from './concrete-implementations/payment-method/MasterScotiaBank';
import { VisaBancolombia } from './concrete-implementations/payment-method/VisaBancolombia';
import { Drone } from './abstraction/refined-abstraction/Drone';

export class Main {
  static QuoteProduct(): void {
    const paymentPlan1 = new VisaBancolombia(5, 80);
    const product1 = new Book('Clean code book', paymentPlan1);
    console.log(product1.getName());
    console.log('Product price', paymentPlan1.amount);
    console.log('Installments', paymentPlan1.installments);

    console.log('Visa Bancolombia');
    product1.getInstallmentAmount();
    product1.getPrice();
    console.log();
    product1.setPaymentPlan(new MasterScotiaBank(5, 80));
    console.log('Mastercard ScotiaBank');
    product1.getInstallmentAmount();
    product1.getPrice();
    console.log();
    product1.setPaymentPlan(new AmericanExpressBBVA(5, 80));
    console.log('American Express BBVA');
    product1.getInstallmentAmount();
    product1.getPrice();

    console.log();

    const paymentPlan2 = new VisaBancolombia(5, 1000);
    const product2 = new Drone('DJI Mavic Pro', paymentPlan2);
    console.log(product2.getName());
    console.log('Product price', paymentPlan2.amount);
    console.log('Installments', paymentPlan2.installments);
    console.log();
    console.log('Visa Bancolombia');
    product2.getInstallmentAmount();
    product2.getPrice();
    console.log();
    product2.setPaymentPlan(new MasterScotiaBank(5, 5000));
    console.log('Mastercard ScotiaBank');
    product2.getInstallmentAmount();
    product2.getPrice();
    console.log();
    product2.setPaymentPlan(new AmericanExpressBBVA(5, 5000));
    console.log('American Express BBVA');
    product2.getInstallmentAmount();
    product2.getPrice();
  }
}
