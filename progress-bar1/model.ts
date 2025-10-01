export default class ProgressModel {
    amount: number;
    max: number;

    constructor(amount: number, max: number) {
        this.amount = amount;
        this.max = max;
    }

    advance() {
        this.amount = Math.min(this.max, this.amount + 1);
    }
}