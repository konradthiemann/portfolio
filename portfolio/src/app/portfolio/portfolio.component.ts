import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
projects = [
  {name:'Join', technologies:['JavaScript',' | ', 'HTML',' | ', 'CSS'], description:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', url:['https://join.konrad-thiemann.de/index.html', 'https://github.com/konradthiemann/join-portfolio'], img:'../../assets/img/portfolio-img/join.png'},
  {name:'Pokédex', technologies:['JavaScript',' | ', 'HTML',' | ', 'CSS',' | ', 'Api'], description:'Based on the PokéAPI a simple library that provides and catalogues pokemon information.', url:['https://pokedex.konrad-thiemann.de/', 'https://github.com/konradthiemann/Pokedex'], img:'../../assets/img/portfolio-img/pokedex.png'},
  {name:'Aporcalypse', technologies:['JavaScript',' | ', 'HTML',' | ', 'CSS'], description:'A simple Jump-and-Run game based on an object-oriented approach. Help the litte wizzard to fight against the orc army and their leader.', url:['https://aporcalypse.konrad-thiemann.de/', 'https://github.com/konradthiemann/No-orc'], img:'../../assets/img/portfolio-img/game.png'},
  {name:'Simple CRM', technologies:['Angular',' | ', 'Firebase',' | ', 'Material Design','|' ,'Api'], description:'This simple CRM app was built using Angular, Firebase, and Material Design. Enjoy a clear dashboard with several informations and add or remove some finances on your own.', url:['https://crm.konrad-thiemann.de/', 'https://github.com/konradthiemann/simpleCRM'], img:'../../assets/img/portfolio-img/crm.png'},
];
getI(i: number){
  let result = i%2;
}
}
