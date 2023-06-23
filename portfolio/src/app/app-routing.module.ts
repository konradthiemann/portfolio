import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
// import { IntroComponent } from './intro/intro.component';
// import { AboutMeComponent } from './about-me/about-me.component';
// import { PortfolioComponent } from './portfolio/portfolio.component';
// import { ContactComponent } from './contact/contact.component';
// import { MySkillsComponent } from './my-skills/my-skills.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
