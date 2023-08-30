import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente;
  success: boolean = false;
  erros?: string[];
  id?: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente;

  }

  ngOnInit(): void {
    this
      .activatedRoute
      .paramMap
      .subscribe(params => {
        const idParam = params.get('id');
        if (idParam != null) {
          this.id = parseInt(idParam);
          this.service
            .getClienteById(this.id)
            .subscribe(
              response => this.cliente = response,
              erroResponse => this.cliente = new Cliente()
            )
        }
      })

  }

  onSubmit() {
    if (this.id) {
      this
        .service
        .atualizar(this.cliente)
        .subscribe(response => {
          this.erros = [];
          this.success = true;
        }, errorResponse => {
          this.success = false;
          this.erros = errorResponse.error.erros;
        })
    } else {
      this
        .service
        .salvar(this.cliente)
        .subscribe(response => {
          this.erros = [];
          this.success = true;
          this.cliente = response;
        }, errorResponse => {
          this.success = false;
          this.erros = errorResponse.error.erros;

        }
        )
    }

  }

  voltarListagem() {
    this.router.navigate(['/clientes'])
  }

}
