import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  testimonials = [
    {
      img: 'assets/image/testimonials/testimonials-1.jpg',
      name: 'Saul Goodman',
      designation: 'Ceo &amp; Founder',
      date: '13 Fec 2023',
      content:
        'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa',
    },
    {
      img: 'assets/image/testimonials/testimonials-2.jpg',
      name: 'Sara Wilsson',
      designation: 'Designer',
      date: '13 Fec 2023',
      content:
        'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa',
    },
    {
      img: 'assets/image/testimonials/testimonials-3.jpg',
      name: 'Jena Karlis',
      designation: 'Store Owner',
      date: '13 Fec 2023',
      content:
        'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa',
    },
  ];

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

  slideConfig1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  constructor() { }

  ngOnInit(): void { }


}
