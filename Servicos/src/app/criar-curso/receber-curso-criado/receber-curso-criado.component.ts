import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string;
  
  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this._cursosService.logService.consoleLog('Recebendo evento curso e adicionando no ');
    CursosService.criouNovoCurso.subscribe(cursoCriado => this.curso = cursoCriado);
  }

}
