import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {name: string}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore){
    this.items= firestore.collection('heroes').valueChanges(); 
  }
}
