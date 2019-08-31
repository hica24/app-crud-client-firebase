import { Component, OnInit, ViewChild } from '@angular/core';
import { NewClientComponent } from './new-client/new-client.component';
import { Client } from '../app-common/interfaces/client.interface';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @ViewChild(NewClientComponent) newClient: NewClientComponent;
  constructor() { }

  ngOnInit() {
  }
  onEditClientSelect(client:Client){
    this.newClient.client = client;
    this.newClient.isCollapsed = false;
    this.newClient.form.reset();
    this.newClient.ngOnInit();
  }
}
