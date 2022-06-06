import { Component } from '@angular/core';
import {Teacher} from "./models/teacher.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ComponentsExample';

  public readonly teachers: Teacher[] = [
    {fullName: "Martin Macura", email: "martin.macura@educanet.cz", phoneNumber: "+420 987 001 123", subjects: ["PRG", "PRS"]},
    {fullName: "Samuel Kodytek", email: "samuel.kodytek@educanet.cz", phoneNumber: "+420 123 002 534", subjects: ["PRG", "WEB", "PCV", "GDV"]},
    {fullName: "Jan Gazda", email: "jan.gazda@educanet.cz", phoneNumber: "+420 444 333 111", subjects: ["PRG", "WEB", "PCV", "HW", "NET", "OPS", "FIS"]},
    {fullName: "Radek Lampíř", email: "radek.lampir@educanet.cz", phoneNumber: "+420 000 111 213", subjects: ["DBS"]},
  ];
}
