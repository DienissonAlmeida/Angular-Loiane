import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  urlImagem: string = 'http://lorempixel.com/400/200/';
  url: string = 'http://loiane.com';
  valorAtual :string = '';
  valorSalvo :string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  nomeDoCurso: string = 'Dienisson Almeida';
  valorIncremento: number = 15;

  pessoa: any = {
    nome: 'Dienisson',
    idade: 23

  }
  constructor() { }

  ngOnInit() {
  }

  botaoClicado(){
    alert('opa');
  }
  onKey(event: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  Salvarvalor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouvalor(evento: any){
    console.log(evento.novoValor);
  }
}
