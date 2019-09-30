import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KneeComponent } from './knee/knee.component';
import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { SearchComponent} from './search/search.component';
import { AdminComponent} from './admin/admin.component';
import { ObszernyBocznyComponent } from './obszerny-boczny/obszerny-boczny.component';
import { FlossComponent} from './floss/floss.component';
import { BandComponent} from './band/band.component';
import { BallComponent} from './ball/ball.component';
import { MatComponent} from './mat/mat.component';
import { RollerComponent} from './roller/roller.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { MyaccountComponent} from './myaccount/myaccount.component';


const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full'}, //domyślnie na stronie głównej będzie wyświetlał się content
  { path: 'content', component: ContentComponent },
  { path: 'rejestracja', component: RegistrationComponent },
  { path: 'logowanie', component: LoginComponent },
  { path: 'sklep', component: ShopComponent },
  { path: 'wyszukiwarka', component: SearchComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'obszerny-boczny', component: ObszernyBocznyComponent },
  { path: 'floss', component: FlossComponent },
  { path: 'band', component: BandComponent },
  { path: 'ball', component: BallComponent},
  { path: 'mat', component: MatComponent },
  { path: 'roller', component: RollerComponent },
  { path: 'koszyk', component: ShoppingcartComponent },
  { path: 'konto', component: MyaccountComponent },
  { path: 'kolano', component: KneeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
