import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './newTaskData.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newTask.component.html',
  styleUrl: './newTask.component.css'
})

export class NewTaskComponent {
  enteredTitle = '';
  enteredSummery = '';
  enteredDate = '';
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, summery: this.enteredSummery, date: this.enteredDate })
  }

}
