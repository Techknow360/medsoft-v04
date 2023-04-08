import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  smartSideNav : any  = []
  constructor() { }

  ngOnInit(): void {
    this.createSmartSideNav();
  }

  createSmartSideNav(){
    this.smartSideNav = [
      {title:"Dashboard",icon:"fa-solid fa-house",navigateLink:"dashboard"},
      {title:"Vendors",icon:"fa-solid fa-industry",navigateLink:"vendors"},
      {title:"Users",icon:"fa-solid fa-users",navigateLink:"users"},
      {title:"Products",icon:"fa-solid fa-capsules",navigateLink:"products"},
      {title:"Bill",icon:"fa-solid fa-cart-shopping",navigateLink:"products"},
      {title:"Reports",icon:"fa-solid fa-file",navigateLink:"products"}
    ]
  }

  ngAfterViewInit(){
    let liItems = document.querySelectorAll(".sidebar ul li"); 
    var hamburger = document.querySelector(".hamburger");

    liItems.forEach((items)=>{
      items.addEventListener('mouseenter',()=>{
        items.closest(".wrapper")?.classList.remove("hover_collapse");
        hamburger?.children[0].classList.replace('fa-bars','fa-xmark');
          let smartBody : HTMLElement | null | undefined  =  <HTMLElement>document.getElementById('smartBody')
          smartBody.style.marginLeft = '270px';
      })
    })

    liItems.forEach((items)=>{
      items.addEventListener('mouseleave',()=>{
        items.closest(".wrapper")?.classList.add("hover_collapse");
        hamburger?.children[0].classList.replace('fa-xmark','fa-bars')
        let smartBody : HTMLElement | null | undefined  =  <HTMLElement>document.getElementById('smartBody')
        smartBody.style.marginLeft = '20px';
      })
    })
    hamburger?.addEventListener("click", () => {
      let smartBody : HTMLElement | null | undefined  =  <HTMLElement>document.getElementById('smartBody')
      let smartsidebar : HTMLElement | null | undefined  =  <HTMLElement>document.getElementById('smart-sidebar')
      
      if(hamburger?.children[0].classList.contains('fa-bars')){
        hamburger?.children[0].classList.replace('fa-bars','fa-xmark')
        smartBody.style.marginLeft = '270px';
        smartsidebar.style.display =  'block';
      }else{
        hamburger?.children[0].classList.replace('fa-xmark','fa-bars')
        smartBody.style.marginLeft = '20px';
      }
      hamburger?.closest(".wrapper")?.classList.toggle("hover_collapse");
  })
  }
}
