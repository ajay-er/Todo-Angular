import { Component } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
  
export class TodoComponent {

  todos: any[] = [];
  
  constructor(private todoService: TodoService) { }
  
  ngOnInit(): void{
    this.todoService.firestoreCollection.valueChanges()
      .subscribe((item) => {
        this.todos = item;
    })
  }

  onClick(input: HTMLInputElement) {
      
    if (input.value) {
      
      this.todoService.addTodo(input.value);
  
      input.value = '';

    }
    
  }

   

}
