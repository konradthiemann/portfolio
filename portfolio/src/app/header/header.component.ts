import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  burgerMenuOpen: boolean = false;

  selectLink(num: number){
    let links = document.getElementsByClassName('link-underline');
    for(let i = 0; i < links.length; i++){
      document.getElementById('link' + i)!.style.color = 'white';
      links[i].classList.remove('active');
    }
    console.log(links);
    links[num].classList.add('active');
    document.getElementById('link' + num)!.style.color = '#70E61C';
  }

  toggleBurgerMenu(){
    if(this.burgerMenuOpen === false){
      this.openBurgerMenu();
    } else {
      this.closeBurgerMenu();
    }
  }

  openBurgerMenu(){
    this.burgerMenuOpen = true;
    let slideMenu = document.getElementById('slide-in-menu');
    let burgerMenu:any = document.getElementById('burger-menu');
    slideMenu!.classList.add("slide-in-menu-open");
    burgerMenu!.classList.add("open-burger-menu");
    burgerMenu!.classList.remove("close-burger-menu");    
  }

  closeBurgerMenu(){
    this.burgerMenuOpen = false;
    let slideMenu = document.getElementById('slide-in-menu');
    let burgerMenu:any = document.getElementById('burger-menu');
    slideMenu!.classList.remove("slide-in-menu-open");
    burgerMenu!.classList.remove("open-burger-menu");
    burgerMenu!.classList.add("close-burger-menu");
    
  }
}
