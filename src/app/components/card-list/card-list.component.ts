import { Component, Input } from '@angular/core';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {

  @Input() unitsList: Location[] = [];

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.unitsList);

  }
}
