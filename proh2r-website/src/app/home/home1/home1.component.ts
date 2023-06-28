import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
declare var $: any;
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss'],
})
export class Home1Component implements OnInit, AfterViewInit {
  slides = [
    { img: 'assets/image/clients/client-1.png' },
    { img: 'assets/image/clients/client-2.png' },
    { img: 'assets/image/clients/client-3.png' },
    { img: 'assets/image/clients/client-4.png' },
    { img: 'assets/image/clients/client-5.png' },
    { img: 'assets/image/clients/client-6.png' },
    // { img: 'assets/image/clients/client-7.png' },
    { img: 'assets/image/clients/client-8.png' },
  ];
  spinnerShow: boolean = false;

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
    {
      viewValue: 'Talent Management',
      value: 'Talent Management',
      isActive: false,
    },
  ];

  filterMenuSectionList = 'People Management';
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  slideConfig1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  slideConfig_main = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    // vertical: true,
    // centerMode: true,
    // centerPadding: '0px',
    lazyLoad: 'ondemand',
    // variableHeight: true
  };

  @ViewChild('carouselElement') carouselElement: ElementRef | undefined;

  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    /** spinner starts on init */
    // this.spinnerShow=true;
    this.spinner.show('spinnerData');
    /** spinner hide on init */
    setTimeout(() => {
      this.spinner.hide('spinnerData');
      this.spinnerShow = true;
      this.initCarousel();
    }, 3000);
  }

  ngAfterViewInit(): void {
    this.spinner.show('spinnerData');
    setTimeout(() => {
      this.spinner.hide('spinnerData');
      this.spinnerShow = true;
      this.initCarousel();
    }, 3000);
  }
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

  // Initialize Carousel
  initCarousel(): void {
    if (this.carouselElement) {
      $(this.carouselElement.nativeElement).owlCarousel({
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'slideOutUp',
        animateIn: 'slideInDown',
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
      });
    }
  }

  goReadSection() {
    this.router.navigate(['/read-more']);
  }
  goDifferentSection(component: string) {
    if (component == 'payroll') {
      this.router.navigate(['/payroll']);
    } else if (component == 'modernHr') {
      this.router.navigate(['/modern-hr']);
    } else if (component == 'hiringOnboard') {
      this.router.navigate(['/hiring']);
    } else if (component == 'timesheet') {
      this.router.navigate(['/project-timesheet']);
    } else if (component == 'attendance') {
      this.router.navigate(['/attendance']);
    } else if (component == 'leave') {
      this.router.navigate(['/leave-management']);
    } else if (component == 'mobile') {
      this.router.navigate(['/mobile-section']);
    } else {
      alert('Component Not Created');
    }
  }
}
