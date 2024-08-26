import { type User } from "./user.model";
import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from "@angular/core";
import { DUMMY_USERS } from "../dummy-user";
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: "app-user",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // select = output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) selected!: boolean;

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
