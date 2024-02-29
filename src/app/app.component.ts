import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetUnitsService } from './services/get-units.service';
import { Location } from './types/location.interface';

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService) {

  }

  onSubmit() {
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);

  }
}
