import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clients: Observable<Client[]>;
  constructor(private db: AngularFirestore) {
    this.clientsCollection = this.db.collection<Client>('Client');
    this.clients = this.clientsCollection.valueChanges();

  }
 
  addClient(data: Client) {
    return this.db.collection('client').add(data);
  }
  updateClient(data: Client) {
    return this.db.collection('client').doc(data.id).set(data);
  }
  deleteClient(data: Client){
    return this.db.collection('client').doc(data.id).delete();
  }
  allClients(){
    return  this.db.collection('client').snapshotChanges().pipe(
      map(actions => actions.map<Client>(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

}
