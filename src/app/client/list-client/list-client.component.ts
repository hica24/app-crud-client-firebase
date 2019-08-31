import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../app-common/services/client.service';
import { Client } from '../../app-common/interfaces/client.interface';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {
  clients: Client[];
  constructor(private clientsService: ClientService, ) { }

  ngOnInit() {
    this.getAllClient();
  }

  private getAllClient() {
    debugger;
    this.clientsService.allClients().subscribe((result: Client[]) => {
        this.clients = result;
    });
}

}
