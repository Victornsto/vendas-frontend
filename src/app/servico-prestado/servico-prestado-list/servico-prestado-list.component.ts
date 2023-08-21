import { Component } from '@angular/core';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-servico-prestado-list',
  templateUrl: './servico-prestado-list.component.html',
  styleUrls: ['./servico-prestado-list.component.css']
})
export class ServicoPrestadoListComponent {

  nome?: string;
  mes?: string;
  meses: number[];
  lista?: ServicoPrestadoBusca[];
  errors?: string [];
  sucess?: boolean;
  menssage?: string;

  constructor(private servicoService : ServicoPrestadoService) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  consultar() {
    this.servicoService.buscar(this.nome, this.mes).subscribe( response => {
      this.lista = response;
      
      this.errors = [];
      this.sucess = true;
      if(this.lista.length <= 0) {
        this.menssage = "Nenhum serviço encontado!";
      } else {
        this.menssage = "";
      }
    }, errorResponse => {
      this.sucess = false;
      this.errors = errorResponse.error.erros
    })
    
  }

}
