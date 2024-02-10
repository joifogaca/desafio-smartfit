import { GetUnitsService } from './../../services/get-units.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  //standalone: true,
  //imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  results = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private unitService: GetUnitsService){}

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => console.log(data));
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    });

  }

  onSubmit(): void {
    console.log(this.formGroup.value)
  }

  onClean():void {
    this.formGroup.reset();
  }
}
