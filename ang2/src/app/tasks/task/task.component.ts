import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  onCompleteTask() {
    this.complete.emit();
  }
  @Input() title!: string;
  @Input() dueDate!: string;
  @Input() summary!: string;
  @Output() complete = new EventEmitter<string>();
}
