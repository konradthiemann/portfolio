import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-slide-in-menu',
  templateUrl: './slide-in-menu.component.html',
  styleUrls: ['./slide-in-menu.component.scss']
})
export class SlideInMenuComponent {

  constructor(private sharedService: SharedService) {}

  closeBurgerMenu(sectionName: any){
    this.sharedService.burgerMenuOpen = false;
    document.getElementById(`${sectionName}`)!.scrollIntoView({behavior: 'smooth'});

    let slideMenu = document.getElementById('slide-in-menu');
    let burgerMenu:any = document.getElementById('burger-menu');
    slideMenu!.classList.remove("slide-in-menu-open");
    burgerMenu!.classList.remove("open-burger-menu");
    burgerMenu!.classList.add("close-burger-menu");
    document.body.classList.remove("overflow-hidden");  
  }
}
