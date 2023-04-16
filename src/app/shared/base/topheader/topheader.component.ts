import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {

  }

  onLogOut(){
    this.route.navigate(['/login'])
  }

}
