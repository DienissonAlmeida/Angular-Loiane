import { NgModule } from '@angular/core';
import { DataFormComponent } from './data-form/data-form.component';
import { RouterModule, Routes } from '@angular/router'
import { TemplateFormComponent } from './template-form/template-form.component';

  const routes: Routes = [
    { path: 'templateForm', component: TemplateFormComponent },
    { path: 'dataForm', component: DataFormComponent },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

    ];
  
  const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
