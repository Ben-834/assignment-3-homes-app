import { Component, Input, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocationinfo';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  @Input() housingLocation!: HousingLocationInfo;}
