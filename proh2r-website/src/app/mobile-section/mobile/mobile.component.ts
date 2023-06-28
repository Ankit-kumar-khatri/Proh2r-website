import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Mobile_design = [
    {
      img: 'assets/image/Slider_Mobile_App_2x (2).png',
      name: 'Saul Goodman',
    },
    {
      img: 'assets/image/Slider_Mobile_App_2x (2).png',
      name: 'Saul Goodman',
    },
    {
      img: 'assets/image/Slider_Mobile_App_2x (2).png',
      name: 'Saul Goodman',
    },
    {
      img: 'assets/image/Slider_Mobile_App_2x (2).png',
      name: 'Saul Goodman',
    },
    {
      img: 'assets/image/Slider_Mobile_App_2x (2).png',
      name: 'Saul Goodman',
    },
    {
      img: 'assets/image/Slider_Mobile_App_2x (2).png',
      name: 'Saul Goodman',
    },
  ];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    centerMode:true,
    centerPadding: '0'

  };

}
