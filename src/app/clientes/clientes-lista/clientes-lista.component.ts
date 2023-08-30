import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent {
  clientes?: Cliente[];
  clienteSelecionado?: Cliente;
  menssagemSucesso?: string;
  menssagemError?: string;

  constructor(private service: ClientesService, private router: Router) {

  }
  ngOnInit(): void {
    this.service
      .getCliente()
      .subscribe(resposta => this.clientes = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/clientes/form'])
  }

  preparaDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletarCliente() {
    this.service
      .deleteCliente(this.clienteSelecionado!)
      .subscribe(
        response => { this.menssagemSucesso = 'Cliente deletado com Sucesso'; this.ngOnInit() },
        erro => this.menssagemError = 'Erro ao deletar cliente!')

  }
}
