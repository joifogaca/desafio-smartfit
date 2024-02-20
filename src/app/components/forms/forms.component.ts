import { Location } from './../../types/location.interface';
import { GetUnitsService } from './../../services/get-units.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnitsResponse } from '../../types/units-response.interface';
import { FilterUnitsService } from '../../services/filter-units.service';





@Component({
  selector: 'app-forms',
  //standalone: true,
  //imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  results: Location[] = [];
  filteredResults: Location[] = []
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private unitService: GetUnitsService,
    private filterService: FilterUnitsService) { }

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    });

  }

  onSubmit(): void {
    let { showClosed, hour } = this.formGroup.value;
    this.filteredResults = this.filterService.filter(this.results,
      showClosed,
      hour);
  }

  onClean(): void {
    this.formGroup.reset();
    this.filteredResults = this.results;
  }
}
