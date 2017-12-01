import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyNewComponentComponent implements OnInit {
  myFavLang = [
    {'name': 'html', 'type': 'Frontend'},
    {'name': 'css', 'type': 'Frontend'},
    {'name': 'jQuery', 'type': 'Frontend'},
    {'name': 'JavaScript', 'type': 'Frontend'},
    {'name': 'Sass', 'type': 'Frontend'},
    {'name': 'Angular4', 'type': 'Frontend'},
    {'name': 'Ajax', 'type': 'Frontend'},
    {'name': 'React', 'type': 'Frontend'},

    {'name': 'Php', 'type': 'Backend'},
    {'name': 'Nodejs', 'type': 'Backend'},
    {'name': 'Rupy', 'type': 'Backend'},
    {'name': 'python', 'type': 'Backend'},
    {'name': 'c++', 'type': 'Backend'},
    {'name': 'java', 'type': 'Backend'},
  ]
  
  myFavCity =[
    {'name': 'Paris', 'type': 'French'},
    {'name': 'London', 'type': 'UK'},
    {'name': 'Toky', 'type': 'Japon'},
    {'name': 'Newyorck', 'type': 'Amercain'},
    {'name': 'Cairo', 'type': 'Egypt'},
    {'name': 'Kartoum', 'type': 'Soudan'},
    {'name': 'Prlin', 'type': 'Germany'},
    {'name': 'MArakich', 'type': 'Moroco'},
    {'name': 'Tunis', 'type': 'Tunis'},
    {'name': 'Asmara', 'type': 'Eyrthria'},
    {'name': 'Eldaoha', 'type': 'Gatar'},
    {'name': 'London', 'type': 'UK'},
    {'name': 'Paris', 'type': 'French'},
    {'name': 'London', 'type': 'UK'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
