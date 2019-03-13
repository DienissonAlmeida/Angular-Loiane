import { CursosService } from '../cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html'
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(private route: ActivatedRoute,
     private _cursoService: CursosService,
     private _router: Router) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.curso = this._cursoService.getCurso(this.id);

      if(this.curso == null){
        this._router.navigate(['notFound']);
      }
    });
    console.log(this.curso);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
