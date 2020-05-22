import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
        { id: 1, email: 'admin@admin.pl', password: 'admin123' },
        {
          id: 2, email: 'user@user.pl', password: 'user123', name: 'Patryk', lastname: 'Budnicki', street: 'Kwiatkowskiego 10', houseNr: 15, city: 'Szczecin', province: 'Zachodniopomorskie', zip: '71004'
        }
    ];
    return {users};
  }

}
