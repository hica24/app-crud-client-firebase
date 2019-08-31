import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import { Client } from '../../app-common/interfaces/client.interface';
@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.scss']
})
export class TableClientComponent implements OnInit {
  @Input() clients: Client[];
  @Input() activeFieldDeath: boolean = false;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClickEdit(info){
    this.onEdit.emit(info);
  }
  onClickDelete(info){
    this.onDelete.emit(info);
  }
  getDateDeath(birthdate: string): string {
      //Vida Promedio 75
      let dateDeath = moment(birthdate,'DD/MM/YYYY').add(75, 'year');
      return dateDeath.format('DD/MM/YYYY');
 
  }
}
