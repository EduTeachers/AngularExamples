import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showText: boolean = true;
  public clickCount: number = 0;
  public showCSSClass: boolean = false;
  public numbers: number[] = [100, 200, 300, 100];

  public sayHi() {
    console.log('Hello!');
  }

  public increment() {
    this.clickCount++;
  }

  public toggleText() {
    this.showText = !this.showText;
  }

  public toggleClass() {
    this.showCSSClass = !this.showCSSClass;
  }
}
