import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let liItems = document.querySelectorAll(".sidebar ul li"); 
    var hamburger = document.querySelector(".hamburger");
    liItems.forEach((items)=>{
      items.addEventListener('mouseenter',()=>{
        items.closest(".wrapper")?.classList.remove("hover_collapse");
      })
    })

    liItems.forEach((items)=>{
      items.addEventListener('mouseleave',()=>{
        items.closest(".wrapper")?.classList.add("hover_collapse");
      })
    })
    hamburger?.addEventListener("click", () => {
      hamburger?.closest(".wrapper")?.classList.toggle("hover_collapse");
  })
  }

}
