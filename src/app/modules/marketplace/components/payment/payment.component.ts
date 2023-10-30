import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { EnumTypes } from '../../enums/events';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  @Output() transmittedMessage: EventEmitter<string> = new EventEmitter();

  @Output() paymentEvent: EventEmitter<string> = new EventEmitter();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      tarjeta: [
        '',
        [Validators.required, Validators.minLength(16), this.cardValidator()],
      ],
      fechaVencimiento: [
        '',
        {
          validators: [
            Validators.required,
            Validators.min(this.getCurrentDate()),
          ],
        },
      ],
    });
  }

  validateCardNumber(cardNumber: string): boolean {
    let sum = 0;
    let isDoubleUp = false;

    /* from the right to left, double every other digit starting with the second to last digit.*/
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let curDigit = parseInt(cardNumber.charAt(i));

      /* double every other digit starting with the second to last digit */
      if (isDoubleUp) {
        /* doubled number is greater than 9 than subtracted 9 */
        if (curDigit * 2 > 9) {
          sum += curDigit * 2 - 9;
        } else {
          sum += curDigit * 2;
        }
      } else {
        sum += curDigit;
      }
      isDoubleUp = !isDoubleUp;
    }

    /* sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.  */
    return sum % 10 == 0;
  }

  cardValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      return this.validateCardNumber(value) ? { validCard: true } : null;
    };
  }

  getCurrentYear(): number {
    return new Date(Date.now()).getFullYear();
  }

  getCurrentDate(): any {
    return new Date(Date.now()).toLocaleDateString();
  }

  realizarPago() {
    this.paymentEvent.emit('false');
    this.transmittedMessage.emit(EnumTypes.PAYMENT.COMPLETED);
  }
}
