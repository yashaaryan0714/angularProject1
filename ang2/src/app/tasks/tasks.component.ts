import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { USER_TASK } from '../../user-task';
import { NgFor } from '@angular/common';
import { NewTaskComponent } from "./new-task/newTask.component";
import { NewTaskData } from './new-task/newTaskData.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.taskid !== id); // taskid instead of id
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onAddTask(newTask: NewTaskData){
    this.tasks.unshift({
      taskid: new Date().getTime().toString(),
      userid: this.userId,
      title: newTask.title,
      summery: newTask.summery,
      duedate: newTask.date
    });
    this.isAddingTask = false;
  }

  // name = input.required<string>();
  @Input() userId!: string;
  @Input() userName!: string;
  isAddingTask = false;
  tasks = USER_TASK;

  get userTasks() {
    return this.tasks.filter(task => task.userid === this.userId);
  }
}
