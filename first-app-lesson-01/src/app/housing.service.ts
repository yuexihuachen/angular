import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

//依赖注入（DI）系统中存在两个主要角色：依赖使用者和依赖提供者。

//添加 @Injectable 装饰器以表明此类可以被注入。
@Injectable({
  providedIn: 'root' //在应用程序根级别，允许将其注入应用程序中的其他类
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://dimg04.c-ctrip.com/images/0106q12000b6x1gpd3A17_R_238_268.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'https://dimg04.c-ctrip.com/images/0106q12000b6x1gpd3A17_R_238_268.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: 'https://dimg04.c-ctrip.com/images/0106q12000b6x1gpd3A17_R_238_268.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://dimg04.c-ctrip.com/images/0106q12000b6x1gpd3A17_R_238_268.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: 'https://dimg04.c-ctrip.com/images/0106q12000b6x1gpd3A17_R_238_268.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://dimg04.c-ctrip.com/images/0106q12000b6x1gpd3A17_R_238_268.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://dimg04.c-ctrip.com/images/0106q12000b6x1gpd3A17_R_238_268.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://dimg04.c-ctrip.com/images/0106q12000b6x1gpd3A17_R_238_268.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://dimg04.c-ctrip.com/images/0106q12000b6x1gpd3A17_R_238_268.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: 'https://dimg04.c-ctrip.com/images/0106q12000b6x1gpd3A17_R_238_268.jpg',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/