import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track firstnumber;
    @track secondnumber;
    @track result;
    @track showResult = false;
    @track previousstoredResult = []; // keep it lowercase to match HTML

    handlechange(event) {
        const field = event.target.name;
        if (field === 'fnum') {
            this.firstnumber = event.detail.value;
        } else if (field === 'snum') {
            this.secondnumber = event.detail.value;
        }
    }

    calculation(event) {
        const fnum = parseInt(this.firstnumber);
        const snum = parseInt(this.secondnumber);
        const action = event.target.name;

        if (action === 'add') {
            this.result = `Sum of ${fnum} and ${snum} is ${fnum + snum}`;
            this.previousstoredResult.push(this.result);
        } else if (action === 'sub') {
            this.result = `Subtraction of ${fnum} and ${snum} is ${fnum - snum}`;
            this.previousstoredResult.push(this.result);
        } else if (action === 'mul') {
            this.result = `Multiplication of ${fnum} and ${snum} is ${fnum * snum}`;
            this.previousstoredResult.push(this.result);
        } else if (action === 'div') {
            if (snum !== 0) {
                this.result = `Division of ${fnum} and ${snum} is ${fnum / snum}`;
            } else {
                this.result = 'Cannot divide by zero';
            }
            this.previousstoredResult.push(this.result);
        } else if (action === 'preview') {
            this.showResult = true;
        }
    }
}