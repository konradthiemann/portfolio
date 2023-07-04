import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';
import { ImprintMainComponent } from './imprint-main/imprint-main.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'imprint', component: ImprintMainComponent },
  { path: 'aboutMe', component: AboutMeComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'skills', component: MySkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
