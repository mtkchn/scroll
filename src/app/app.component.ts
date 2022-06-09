import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [0,1,2,3,4,5,6,7,8,9,10];

  title = 'testBootstrap';

  scrollTop(el: any){
    el as ElementRef;
    console.log(el);
    el.scrollBy({ top: +30, behavior: 'smooth' });
  }
  scrollBottom(el: any){
    console.log(el);
  }
}
