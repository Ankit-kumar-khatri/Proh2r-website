import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteInfoService } from './service/route-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Proh2r';

  url: any
  constructor(private router: Router, private routeService: RouteInfoService) {

  }
  ngOnInit(): void {
    this.routeService.myUrl.subscribe(res => {
      if(res!=null){
        this.url=res

      }
    
    })
  }

  goToContact() {
    this.router.navigate(['/contact'])


  }
  goToAbout() {
    this.url=null
    this.router.navigate(['/about'])
  }


}
