import { Component } from '@angular/core';
import {User} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TemplateDrivenForms';
  username: string = "";
  number: number = 0;
  focus: boolean = false;
  user: User = new User();
  option: any;

  printUserInfo() {
    console.log(this.user)
  }
}
