import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from '../cursos/cursos.component';
import { CursoDetalheComponent } from '../cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from '../cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const cursoRoutes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'notFound', component: CursoNaoEncontradoComponent }

];

@NgModule({
    imports: [RouterModule.forChild(cursoRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}