import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HisoryComponent } from './hisory/hisory.component';

const routes: Routes = [
  { path: 'home', component: ProfileComponent},
  { path: 'hisory', component: HisoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
