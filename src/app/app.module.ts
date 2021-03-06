import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; //import skryptow javascript bootstrapa
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { KneeComponent } from './knee/knee.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import { ObszernyBocznyComponent } from './obszerny-boczny/obszerny-boczny.component';
import { FilterPipe } from './filter.pipe';
import { FlossComponent } from './floss/floss.component';
import { BandComponent } from './band/band.component';
import { BallComponent } from './ball/ball.component';
import { RollerComponent } from './roller/roller.component';
import { MatComponent } from './mat/mat.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatNativeDateModule} from '@angular/material/core';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CookieService } from 'ngx-cookie-service';
import { CookiesService } from './cookies.service';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalfComponent } from './calf/calf.component';
import { SemitendinosusComponent } from './semitendinosus/semitendinosus.component';
import { GluteusMaximusComponent } from './gluteus-maximus/gluteus-maximus.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    MenuComponent,
    KneeComponent,
    RegistrationComponent,
    LoginComponent,
    ShopComponent,
    SearchComponent,
    AdminComponent,
    ObszernyBocznyComponent,
    FilterPipe,
    FlossComponent,
    BandComponent,
    BallComponent,
    RollerComponent,
    MatComponent,
    ShoppingcartComponent,
    MyaccountComponent,
    CalfComponent,
    SemitendinosusComponent,
    GluteusMaximusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
      FontAwesomeModule,
      ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatNativeDateModule,
    HttpClientModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false } )
  ],
  providers: [
    CookieService,
    CookiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule { }
