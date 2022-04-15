import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentIndex;

  sections = [
    {
      name: 'Section 1',
      content: 'Content 1'
    },
    {
      name: 'Section 2',
      content: 'Content 2'
    },
    {
      name: 'Section 3',
      content: 'Content 3'
    },
  ];

  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
  }

}
