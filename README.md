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
