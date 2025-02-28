
import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HousingLocationComponent } from '../../housing-location/housing-location/housing-location.component';
import { Housinglocation } from '../../housinglocation';
import { HousingService } from '../../housing.service';
@Component({
  selector: 'app-home-component',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="button-primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrl: './home-component.component.css',
})
export class HomeComponentComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] = [];
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
      console.log('filtered list',this.filteredLocationList)
    });
  }


  //search by text
  filterResults(text: string) {
 
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
      console.log("filtered location list:",this.filteredLocationList)
    );
    
  }
}