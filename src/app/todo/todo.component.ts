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

    this.todoService.firestoreCollection.valueChanges({ idField: 'id' })
      .subscribe((item) => {

        this.todos = item.sort((a: any, b: any) => { return a.isDone - b.isDone });

      })
    
  }

  onClick(input: HTMLInputElement) {
      
    if (input.value) {
      
      this.todoService.addTodo(input.value);
  
      input.value = '';

    }

  }

  onStatusChange(todoId: string, newStatus: boolean) {

    this.todoService.updateTodoStatus(todoId, newStatus);
    
  }

  onDelete(todoId: string) {
    
    this.todoService.deleteTodo(todoId);

  }

}
