import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = `http://localhost:4300/locations`; //Mock apiurl

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    try {
      const response = await fetch(this.url);
      if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch housing locations:', error);
      return [];
    }
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`); //mock url to fetch by its id from db.json
      if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch housing location ID ${id}:`, error);
      return undefined;
    }
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
