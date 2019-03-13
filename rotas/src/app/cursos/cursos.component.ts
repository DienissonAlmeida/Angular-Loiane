import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html'
})
export class CursosComponent implements OnInit, OnDestroy {


  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(private _route: ActivatedRoute,
    private _cursosService: CursosService,
    private _router: Router) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();

    this.inscricao = this._route.queryParams.subscribe((queryParams: any) => {
    this.pagina = queryParams.pagina;
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  NextPage() {
    this.pagina++;
    this._router.navigate(['/cursos'], {queryParams: {'pagina': this.pagina }});
  }

}
