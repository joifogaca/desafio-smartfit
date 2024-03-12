import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { CardListComponent } from "./components/card-list/card-list.component";
import { CardComponent } from "./components/card/card.component";
import { FormsComponent } from "./components/forms/forms.component";
import { HeaderComponent } from "./components/header/header.component";
import { LegendComponent } from "./components/legend/legend.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent,
    CardListComponent,
    CardComponent,
    LegendComponent],
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})

export class AppModule { }
