import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,//(包含 Angular 中定义的内建指令，如 ngIf、ngFor 等)，除了在主模块之外，不需要导入，因为我们已经在主模块中导入了 BrowserModule (此模块已导入了 CommonModule)。其它模块都必须手动导入该模块。
    HousingLocationComponent,
    ProductsComponent
  ],
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css'],
})

export class HomeComponent  {
  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  products: string = '';

  addProduct(event: any) {
    const value =  event.target.value
    if (value.length <= 4) {
      this.products = value
    } else {
      this.products = '1111'
    }
    
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/