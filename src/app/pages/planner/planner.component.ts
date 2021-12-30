import {Component, OnInit} from '@angular/core';
import {Task} from "../../shared/models/todo.model";
import {TodoListService} from "../../shared/services/todo-list.service";

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  title = 'TODO'
  inputValue: string
  tasks: Task[] = []

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit(): void {
    this.tasks = this.todoListService.getTasks();
  }

  addTask(title: string): void {
    if (!title) {
      return
    }
    const taskAlreadyInList = this.tasks.some((task) => task.title.toLowerCase() === this.inputValue.toLowerCase())
    if (taskAlreadyInList) {
      return;
    }
    this.todoListService.addTask({title: title, isCompleted: false})
    this.inputValue = ''
    console.log(this.todoListService.tasks)
  }

  deleteTask(index: number) {
    this.todoListService.deleteTask(index);
  }

  toggleCompletedTask(index: number) {
    this.todoListService.toggleCompletedTask(index)
  }
}
