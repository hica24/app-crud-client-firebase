import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent {
  @Input() control: FormControl;
  constructor() { }
  get messages() {
    if (this.control) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          return this.getErrorMessage(propertyName);
        }
      }
    }
    return null;
  }
  public getErrorMessage(validatorName: string) {
    const message = {
      required: '(*) El campo es requerido.',
      ageRange: 'Ingrese una numero entre 1 - 100'

    };
    return message[validatorName];
  }

}
