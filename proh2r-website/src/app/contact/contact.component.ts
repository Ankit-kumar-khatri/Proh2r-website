import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteInfoService } from '../service/route-info.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  slides = [
    { img: 'assets/image/clients/client-1.png' },
    { img: 'assets/image/clients/client-2.png' },
    { img: 'assets/image/clients/client-3.png' },
    { img: 'assets/image/clients/client-4.png' },
    { img: 'assets/image/clients/client-5.png' },
    { img: 'assets/image/clients/client-6.png' },
    { img: 'assets/image/clients/client-7.png' },
    { img: 'assets/image/clients/client-8.png' },
  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  routeLink: any;
  constructor(private route: ActivatedRoute, private routeService: RouteInfoService) {
    route.url.subscribe(res => {
      this.routeLink = res[0].path
    })
    routeService.setUrl(this.routeLink)

  }

  ngOnInit(): void {

  }
}
