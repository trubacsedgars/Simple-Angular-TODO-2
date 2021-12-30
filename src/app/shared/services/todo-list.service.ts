import {Injectable} from '@angular/core';
import {Task} from "../models/todo.model";
import {StorageService} from "./storage.service";

const taskListStorageKey = 'Tasks_List';

const initialTasksList: Task[] = [
  {title: 'Buy milk', isCompleted: false},
  {title: 'Buy Christmas presents', isCompleted: false},
  {title: 'Clean house', isCompleted: false},
  {title: 'Learn angular', isCompleted: false},
  {title: 'Find job', isCompleted: false},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  tasks: Task[]

  constructor(private storageService: StorageService) {
    this.tasks =
      storageService.getData(taskListStorageKey) || initialTasksList;
  }

  addTask(item: Task): void {
    this.tasks.push(item)
    this.storageService.setData(taskListStorageKey, this.tasks);
  }

  deleteTask(index: number): void {
    if (index > -1)
      this.tasks.splice(index, 1);
  }

  toggleCompletedTask(index: number): void {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted
  }

  getTasks(): Task[] {
    return this.tasks
  }
}
