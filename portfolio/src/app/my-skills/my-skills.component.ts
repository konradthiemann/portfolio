import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  skills = [
    {'url': '../../assets/img/skill-icons/Angular.svg', 'name': 'Angular'},
    {'url': '../../assets/img/skill-icons/ts.svg', 'name': 'TypeScript'},
    {'url': '../../assets/img/skill-icons/Javascript.svg', 'name': 'JavaScript'},
    {'url': '../../assets/img/skill-icons/html.svg', 'name': 'HTML'},
    {'url': '../../assets/img/skill-icons/Firebase.svg', 'name': 'Firebase'},
    {'url': '../../assets/img/skill-icons/git.svg', 'name': 'GIT'},
    {'url': '../../assets/img/skill-icons/css.svg', 'name': 'CSS'},
    {'url': '../../assets/img/skill-icons/api-logo.svg', 'name': 'Rest-Api'},
    {'url': '../../assets/img/skill-icons/scrum.svg', 'name': 'Scrum'},
    {'url': '../../assets/img/skill-icons/md.svg', 'name': 'Material Design'},
  ];

  constructor() { }

}
