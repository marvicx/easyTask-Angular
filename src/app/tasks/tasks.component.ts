import { TasksService } from "./tasks.service";
import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, NewTaskComponent],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
}
