import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proh2r';

  constructor(private router:Router){}

  goToContact(){
    this.router.navigate(['/contact'])


  }
  goToAbout(){
    this.router.navigate(['/about'])
  }


}
