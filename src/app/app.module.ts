import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent],
    imports: [BrowserModule],
    providers: [provideRouter(routes)],
    bootstrap: [AppComponent]
})

export class AppModule { }