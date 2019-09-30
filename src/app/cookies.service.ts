import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
    constructor(private cookieService: CookieService) {
    }

    public check(key: string): boolean {
      return this.cookieService.check(key);
    }

    public get(key: string): any {
      // stringify - zamienia stringa w obiekt
      return JSON.parse(this.cookieService.get(key));
    }

    public set(key: string, value: any, expires?: number | Date): void {
      // stringify - zamienia obiekt w stringa
      this.cookieService.set(key, JSON.stringify(value), expires);
    }

    public delete(key: string): void {
      this.cookieService.delete(key);
    }
}
