import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KneeComponent } from './knee/knee.component';

const routes: Routes = [
  { path: 'knee', component: KneeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
