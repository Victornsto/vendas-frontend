import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-list/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL = environment.apiURL + '/api/servico-prestado';

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado)
  }

  buscar(nome?: string, mes?:string) : Observable<ServicoPrestadoBusca[]> {
    let httpParams = new HttpParams();

    if (!nome) {
      nome = "";
    }

    httpParams = httpParams.set("nome", nome);

    if (mes) {
      httpParams = httpParams.set("mes", mes);
    }

    const url = this.apiURL + "?" + httpParams.toString();    

    return this.http.get<ServicoPrestadoBusca[]>(url);
  }
}
