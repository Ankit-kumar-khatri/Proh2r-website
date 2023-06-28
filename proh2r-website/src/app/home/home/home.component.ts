import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
  menuSection = [
    {
      viewValue: 'People Management',
      value: 'People Management',
      isActive: true,
    },
    { viewValue: 'Culture', value: 'Culture', isActive: false },
    {
      viewValue: 'Payroll & Compliance',
      value: 'Payroll & Compliance',
      isActive: false,
    },
    { viewValue: 'Talent Management', value: 'Talent Management', isActive: false },
  ];

  filterMenuSectionList = 'People Management';
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    prevArrow: false,
    nextArrow: false
  };

  slideConfig1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * filterMenu
   */
  filterMenu(item: any) {
    this.filterMenuSectionList = item.value;
    this.menuSection.forEach((ele: any) => {
      if (ele.value == item.value) {
        ele.isActive = true;
      } else {
        ele.isActive = false;
      }
    });
  }

  goReadSection() {
    this.router.navigate(['/read-more']);
  }
}
