import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private sharedService: SharedService) {}

  selectLink(num: number){
    let links = document.getElementsByClassName('link-underline');
    for(let i = 0; i < links.length; i++){
      document.getElementById('link' + i)!.style.color = 'white';
      links[i].classList.remove('active');
    }
    links[num].classList.add('active');
    document.getElementById('link' + num)!.style.color = '#70E61C';
  }


  toggleBurgerMenu(){
    if(this.sharedService.burgerMenuOpen === false){
      this.openBurgerMenu();
    } else {
      this.closeBurgerMenu();
    }
  }

  openBurgerMenu(){
    this.sharedService.burgerMenuOpen = true;
    let slideMenu = document.getElementById('slide-in-menu');
    let burgerMenu:any = document.getElementById('burger-menu');
    slideMenu!.classList.add("slide-in-menu-open");
    burgerMenu!.classList.add("open-burger-menu");
    burgerMenu!.classList.remove("close-burger-menu");
    document.body.classList.add("overflow-hidden");    
  }

  closeBurgerMenu(){
    this.sharedService.burgerMenuOpen = false;
    let slideMenu = document.getElementById('slide-in-menu');
    let burgerMenu:any = document.getElementById('burger-menu');
    slideMenu!.classList.remove("slide-in-menu-open");
    burgerMenu!.classList.remove("open-burger-menu");
    burgerMenu!.classList.add("close-burger-menu");
    document.body.classList.remove("overflow-hidden");  
  }
}
