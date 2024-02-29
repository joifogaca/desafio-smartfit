import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterUnitsService } from '../../services/filter-units.service';
import { GetUnitsService } from './../../services/get-units.service';
import { Location } from './../../types/location.interface';





@Component({
  selector: 'app-forms',
  //standalone: true,
  //imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  @Output() submitEvent = new EventEmitter();
  results: Location[] = [];
  filteredResults: Location[] = []
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private unitService: GetUnitsService,
    private filterService: FilterUnitsService) { }

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data;
      this.filteredResults = data;
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
    this.unitService.setFilteredUnits(this.filteredResults);
    this.submitEvent.emit();
  }

  onClean(): void {
    this.formGroup.reset();
    this.filteredResults = this.results;
  }
}
