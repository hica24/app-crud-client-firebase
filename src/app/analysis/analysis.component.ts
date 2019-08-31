import { Component, OnInit } from '@angular/core';
import { Client } from '../app-common/interfaces/client.interface';
import { ClientService } from '../app-common/services/client.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  clients: Client[];
  constructor(private clientsService: ClientService,) { }

  ngOnInit() {
    this.getAllClient();
  }
  private getAllClient() {
    this.clientsService.allClients().subscribe((result: Client[]) => {
      this.clients = result;
    });
  }
}
