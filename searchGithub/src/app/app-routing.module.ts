import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'landing-page', component: LandingPageComponent},
  {path: 'about', component: AboutComponent},
  {path:'', redirectTo:'/landing-page', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
