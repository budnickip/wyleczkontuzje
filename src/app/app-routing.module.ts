import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KneeComponent } from './knee/knee.component';
import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { SearchComponent} from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full'}, //domyślnie na stronie głównej będzie wyświetlał się content
  { path: 'content', component: ContentComponent },
  { path: 'rejestracja', component: RegistrationComponent },
  { path: 'logowanie', component: LoginComponent },
  { path: 'sklep', component: ShopComponent },
  { path: 'wyszukiwarka', component: SearchComponent },
  { path: 'kolano', component: KneeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
