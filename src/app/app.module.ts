import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { FormsComponent } from "./components/forms/forms.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FormsComponent],
    imports: [BrowserModule,
             FormsModule,
             ReactiveFormsModule,
            HttpClientModule],
    providers: [provideRouter(routes)],
    bootstrap: [AppComponent]
})

export class AppModule { }
