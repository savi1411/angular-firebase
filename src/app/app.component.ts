import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-demo';
  cursos: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/cursos').valueChanges()
      .subscribe(cursos => {
        this.cursos = cursos;
        console.log(this.cursos)
      })
  }
}
