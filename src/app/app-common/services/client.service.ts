import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client.interface';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private db: AngularFirestore) { }
 
  createClient(data: Client) {
    return this.db.collection('client').add({
      name: data.name,
      lastName: data.lastName,
      age: data.age,
      birthdate: data.birthdate
    });
  }

}
