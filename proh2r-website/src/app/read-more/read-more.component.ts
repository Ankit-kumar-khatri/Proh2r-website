import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToContact(){
    this.router.navigate(['/contact'])


  }

}
