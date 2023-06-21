import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
projects = [
  {name:'Join', technologies:['JavaScript |', 'HTML |', 'CSS'], description:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', url:['placeholderOne', 'placeholderTwo'], img:'../../assets/img/portfolio-img/join.png'},
  {name:'Pokédex', technologies:['JavaScript |', 'HTML |', 'CSS |', 'Api'], description:'Based on the PokéAPI a simple library that provides and catalogues pokemon information.', url:['placeholderOne', 'placeholderTwo'], img:'../../assets/img/portfolio-img/pokedex.png'},
  {name:'Aporcalypse', technologies:['JavaScript |', 'HTML |', 'CSS'], description:'A simple Jump-and-Run game based on an object-oriented approach. Help the litte wizzard to fight against the orc army and their leader.', url:['placeholderOne', 'placeholderTwo'], img:'../../assets/img/portfolio-img/game.png'},
  {name:'Ring of Fire', technologies:['Angular |', 'Firebase |', 'Material Design'], description:'Ring Of Fire is an interactive drinking game app built using Angular, Firebase, and Material Design. It provides a fun way to play with friends and family while enjoying a few drinks at the same time.', url:['placeholderOne', 'placeholderTwo'], img:'../../assets/img/portfolio-img/rof.png'},
];
@Input() imgLeft: boolean = false;
}
