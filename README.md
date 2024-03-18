# Resolvendo desafio front-end, acompanhando o video de Fernanda Kipper

https://www.youtube.com/watch?v=ozZXMkp8MnQ&t=7017s

## Resumo

Para um serviço poder estar compartilhando dados entre componentes precisamos usar o padrão Singleton. Para isso na classe do serviço deve possuir:

`@Injectable({
  providedIn: 'root'
})`

Pipe Async

Usado em um BehaviorSubject, para que ele possa acompanhar as mudanças que ocorrerem no objeto showList

`<app-card-list *ngIf="(showList | async )"></app-card-list>`

### Gerar sombra para card

https://cssgenerator.org/box-shadow-css-generator.html

## Teste com Jtest

https://metal-flea-041.notion.site/LIVE-Testes-unit-rios-em-Angular-6010a476f74f4f62b022f1f3506a62e2

Comando para rodar os testes:
`npm run test `
