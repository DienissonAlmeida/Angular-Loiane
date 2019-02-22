import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor: EventEmitter<any>

  @ViewChild('campoInput') campoValorInput: ElementRef;

  constructor() { 
      this.mudouValor = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  incrementa(): void {
    this.campoValorInput.nativeElement.value++;
    // this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa(): void {
    this.campoValorInput.nativeElement.value--;
    // this.valor--;
    this.mudouValor.emit(this.valor.toString());
  }

}
