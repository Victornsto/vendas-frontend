import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent {

  clientes?: Cliente[] = []
  servico: ServicoPrestado;
  erros?: String[];
  sucess?: boolean;

  constructor(
    private clienteService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService
  ) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService
      .getCliente()
      .subscribe(
        response => {
          this.clientes = response;
        }
      )
  }

  onSubmit() {
    this.servicoPrestadoService
    .salvar(this.servico)
    .subscribe(response => {
      this.erros = [];
      this.sucess = true
      this.servico = new ServicoPrestado();
      console.log(response)
    }, errorResponse => {
      this.erros = errorResponse.error.erros;
      this.sucess = false;
    })
  }


}
