import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-dashboard-cards',
  templateUrl: './smart-dashboard-cards.component.html',
  styleUrls: ['./smart-dashboard-cards.component.css']
})
export class SmartDashboardCardsComponent implements OnInit {
  @Input('title') title : any
  @Input('data') data : any
  @Input('icon') icon : any

  ngOnInit(): void {
    

  }
}
