import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/Observable/interval';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';



@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "Lerarning JavaScript Data Structures and Algorithms 2nd",
    rating: 4.54321,
    numeropaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'

  };

  livros: string[] = ['Java', 'Angular 2', 'C#'];
  filtro: string;

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Asincrono'), 2000)
  });
  
  
  constructor() { }

  ngOnInit() {
  }


}
