import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ageRangeValidator } from '../../app-common/custom-validators/custom-service';
import { Client } from '../../app-common/interfaces/client.interface';
import { ClientService } from '../../app-common/services/client.service';

import * as moment from 'moment';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  public isCollapsed = true;
  client: Client;
  form: FormGroup;
  constructor(private fb: FormBuilder,
    private clientsService: ClientService, ) {
    this.createform();
  }

  ngOnInit() {
    if (this.client) {
      this.form.patchValue(this.client);
      this.form.controls.birthdate.setValue(new Date(moment(this.client.birthdate, 'DD/MM/YYYY').format()));
    }
  }
  onClickCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.form.reset();
    }
  }
  onClickCancel() {
    this.isCollapsed = true;
    this.form.reset();
  }
  onClickSave() {
    this.form.markAsTouched();
    if (this.form.valid) {
      const data: Client = this.form.value;
      data.birthdate = moment(data.birthdate).format('DD/MM/YYYY');
      if (!this.client) {
        this.clientsService.addClient(data).then(() => {
          this.resetForm();
          this.isCollapsed = true;
          alertify.success('Guardado Exitoso.');
        }).catch(() => {
          this.resetForm();
          alertify.error('Guardado Fallido.');
        });
      } else {
        debugger;
        data.id = this.client.id;
        this.clientsService.updateClient(data).then(() => {
          this.resetForm();
          this.isCollapsed = true;
          this.client = null;
          alertify.success('Actualización Exitoso.');

        }).catch(() => {
          this.resetForm();
          alertify.success('Actualización Fallida.');
        });
      }
    }
  }
  resetForm(){
    this.form.reset();
    this.form.controls.birthdate.setValue(new Date());
  }
  get formControl() { return this.form.controls; }
  private createform() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      age: [null, [Validators.required, ageRangeValidator(1, 100)]],
      birthdate: [new Date(), [Validators.required]]
    });
  }

}
