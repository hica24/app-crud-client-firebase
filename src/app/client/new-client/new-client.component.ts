import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  public isCollapsed = false;
  form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createform();
  }

  ngOnInit() {
  }

  private createform() {
    this.form = this.fb.group({
        name: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        years: [
            null,
            [
                Validators.required,
                Validators.min(1),
                Validators.max(122),
            ]
        ],
        birthdate: [
            new Date(),
            [Validators.required]
        ]
    });
}

}
