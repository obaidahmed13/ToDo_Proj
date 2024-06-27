import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  session:any;
  data:any;
  saveData() {
    localStorage.setItem('session', JSON.stringify(this.data))
  }

  loadData() {
    let data:any = localStorage.getItem('session');
    this.session = JSON.parse(data);
  }

  dataClear() {
    localStorage.clear();
  }
  
}
