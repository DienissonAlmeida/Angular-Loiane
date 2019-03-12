import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  lista: any[] = [
    { nome: 'Dienisson', idade:23 },
    { nome: 'Ramon', idade:32 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
