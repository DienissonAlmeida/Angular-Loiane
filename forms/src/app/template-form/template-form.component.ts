import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario : any = {
    nome: null,
    email: null
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    this.httpClient.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(res => res)
    .subscribe(dados => console.log(dados));
  }

  // get(form: NgForm) {

  //   this.httpClient.get('https://httpbin.org/get')
  // }

  consultaCep(cep: string, form: NgForm) {

     var cepNumber = cep.replace(/\D/g,'')

     if(cepNumber != ''){

       var regexCep = /^[0-9]{8}$/;
       if(regexCep.test(cep)) {

        this.resetaForm(form);

          this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`)
          // .map(dados => JSON.stringify(dados))
          .subscribe(dados => this.populaDadosForm(dados, form));
       }
     }
  }

  populaDadosForm(dados, ngform: NgForm) {
    console.log(dados);
    ngform.form.patchValue({
      endereco: {
        cep: dados.cep,
        numero: dados.numero ? null : '',
        complemento: dados.complemento ,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaForm(ngform)  {
    
    ngform.form.patchValue({
      endereco: {
        cep: null,
        numero: null,
        complemento: null ,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });

  }
 
}
