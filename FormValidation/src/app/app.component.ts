import { Component } from '@angular/core';
import {UserModel} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userModel: UserModel = new UserModel();

  register() {
    alert(JSON.stringify(this.userModel));
  }
}
