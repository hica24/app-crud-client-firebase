import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ClientService } from '../../app-common/services/client.service';
import { Client } from '../../app-common/interfaces/client.interface';

import * as mathjs from 'mathjs';
import * as moment from 'moment';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {
  clients: Client[];
  average: number = 0;
  deviation: number = 0;
  @Output() clientSelect: EventEmitter<any> = new EventEmitter();

  constructor(private clientsService: ClientService, ) { }

  ngOnInit() {
    this.getAllClient();
  }
  onClickEdit(info: Client) {
    this.clientSelect.emit(info);
  }
  onClickDelete(info: Client) {
    this.clientsService.deleteClient(info).then(() => {
      alertify.success('Eliminacion Exitosa.');
    }).catch(() => {
      alertify.success('Eliminacion Fallida.');
    });
  }

  private getAllClient() {
    this.clientsService.allClients().subscribe((result: Client[]) => {
      this.clients = result;
      let sumAge = 0;
      let arratAge = [];
      for (const client of this.clients) {
        sumAge += Number(client.age);
        arratAge.push(client.age);
      }
      this.average = sumAge / this.clients.length;
      this.deviation = mathjs.std(arratAge);
    });
  }

}
