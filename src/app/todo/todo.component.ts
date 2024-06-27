import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  session:any;
  data: {id: number, task: string}[]=[];
  newTask: string='';

  saveData() {
    localStorage.setItem('session', JSON.stringify(this.data))
  }
  addTask() {
    let newTask = {
      id: Date.now(),
      task: this.newTask
    };
    this.data.push(newTask)
    this.saveData();
    this.newTask=''
  }

  loadData() {
    let data:any = localStorage.getItem('session');
    this.session = JSON.parse(data);
  }

  dataClear() {
    localStorage.removeItem('session');
    this.data = [];
  }

  removeTask(id: number) {
    this.data = this.data.filter(task => task.id !==id);
    this.saveData;
  }
  
}
