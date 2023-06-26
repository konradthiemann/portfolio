import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

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
}
