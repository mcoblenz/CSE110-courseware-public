export default class ProgressModel {
    amount: number;
    max: number;

    constructor(amount: number, max: number) {
        this.amount = amount;
        this.max = max;
    }

    advance() {
        if (this.amount < this.max) {
            this.amount = Math.min(this.max, this.amount + 10);
        }
    }
}