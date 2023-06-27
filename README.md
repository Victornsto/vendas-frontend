# ClientesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Passo a passo da criação do módulo de Serviços

* ng g m --routing servico-prestado -> Para criar o módulo servicoPrestado com o arquivo de rotas

* ng g c --skip-tests servico-prestado/servicoPrestadoForm -> para criar o componente form dentro da pasta servico-prestado sem o arquivo de teste

* ng g c --skip-tests servico-prestado/servicoPrestadoList -> para criar o componente lista dentro da pasta servico-prestado sem o arquivo de teste

### **Form**

* Exportar os componentes dentro do arquivo de módulos

* Importar os FormsModule e RouterModule dentro do arquivo de módulos

* Importar ServicoPrestadoModule dentro do app.modules

* Importar e adicionar como parâmetro no constructor da classe do arquivo "servico-prestado-form.component.ts" uma variável do tipo ClienteService para trazer os dados dos clientes

* Adicionar dentro de ngOnInit um método para buscar todos os clientes utilizando o ClienteService

* Adicionar no servico-prestado-routing.module.ts as rotas com os componentes

* Em sidebar.component.htlm, adicionar mais um componente setando o routerLink com a rota que configuramos no passo anterior

* A criação do form está toda no componente servico-prestado-form

* Criar a classe ServicoPrestado, adicionar um atributo do tipo ServicoPrestado na classe do servico-prestado-form e atribuir uma nova classe a esse atributo no construtor da classe servico-prestado-form

* Criar os inputs e setar os com os atributos da classe (Exemplo no arquivo component.html)

* ng g s servicoPrestado --skip-tests -> para criar o arquivo service

* Importar o ServicoPrestadoService para o campo providers do app.module.ts

* Criado a variável de ambiente apiURL

* importar a variável de ambiente apiURL no service.ts e passar como parâmetro nos métodos http

* Importar a classe ServicoPrestadoService no servico-prestado-form.component passando como parâmetro no constructor

* Montar o método onSubmit usando o método salvar do service.ts

### **List**

* Criar os atributos da classe (nome, mes e meses). Meses recebe como parâmetro no constructo um array com os meses do ano

*