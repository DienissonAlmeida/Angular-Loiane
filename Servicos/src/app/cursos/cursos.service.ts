import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'C#'];

    constructor(public logService: LogService) {

        console.log(this)
    }
    getCursos(): string[] {
        return this.cursos;
    }
    
    addCurso(curso: string) {
        this.logService.consoleLog('adicionando curso');
        this.cursos.push(curso);
        this.logService.consoleLog('emitindo evento');
        CursosService.criouNovoCurso.emit(curso);
    }
}