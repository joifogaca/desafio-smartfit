import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsComponent } from './components/forms/forms.component';
import { HeaderComponent } from './components/header/header.component';
import { LegendComponent } from './components/legend/legend.component';
import { GetUnitsServiceMock } from './mocks/get-units.service.mock';
import { locationMock } from './mocks/location.mock';
import { FilterUnitsService } from './services/filter-units.service';
import { GetUnitsService } from './services/get-units.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let getUnitService: GetUnitsService;
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
        {
          provide: GetUnitsService,
          useValue: GetUnitsServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    getUnitService = TestBed.inject(GetUnitsService);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {


    expect(component).toBeTruthy();
    expect(getUnitService.getFilteredUnits).toHaveBeenCalled();
  });

  it('should set unitLists onSubmit', () => {
    component.onSubmit();

    expect(component.unitsList).toEqual([locationMock]);
  })
});
