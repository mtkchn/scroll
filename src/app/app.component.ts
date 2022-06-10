import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [0,1,2,3,4,5,6,7,8,9,10];

  title = 'testBootstrap';
  
  scroll(el: any, value: number){
    const scrollContainer: HTMLElement = el as HTMLElement;
    scrollContainer.scrollBy({ top: value, left: 0, behavior: 'smooth' });
  }
}
