import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsComponent } from './components/forms/forms.component';
import { HeaderComponent } from './components/header/header.component';
import { LegendComponent } from './components/legend/legend.component';
import { FilterUnitsService } from './services/filter-units.service';
import { GetUnitsService } from './services/get-units.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
      ],
      declarations: [AppComponent,
        HeaderComponent,
        FormsComponent,
        CardListComponent,
        CardComponent,
        LegendComponent,
        FooterComponent],
      providers: [FilterUnitsService,
        GetUnitsService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
