import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface ITab {
  title: string;
  content: string;
  removable: boolean;
  disabled: boolean;
  active?: boolean;
  customClass?: string;
}

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  tabs: ITab[] = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1', removable: false, disabled: false,active: true,},
  ];

  constructor(){}

  ngOnInit(): void {

  }

  addNewTab(): void {
    if(this.tabs.length < 6){
      const newTabIndex = this.tabs.length + 1;
      this.tabs.push({
        title: `Dynamic Title ${newTabIndex}`,
        content: `Dynamic content ${newTabIndex}`,
        disabled: false,
        removable: true,
        active :true
      });
    }
  }
 
  removeTabHandler(tab: ITab): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }

}
