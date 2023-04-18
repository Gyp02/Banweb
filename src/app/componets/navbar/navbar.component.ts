import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navTrigger: HTMLElement | null = null ;
  nav: HTMLElement | null = null ;
  heading: HTMLElement | null = null ;
  header: HTMLElement | null = null ;
  labels: HTMLCollectionOf<HTMLElement> | null = null ;

  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  fontSize = this.windowHeight * 0.1;
  headingSize = this.windowWidth * 0.1;

  constructor() { }

  ngOnInit(): void {
    this.navTrigger = document.getElementById("nav-trigger");
    this.nav = document.getElementById("nav");
    this.heading = document.getElementById("heading");
    this.header = document.getElementById("header");
    this.labels = document.getElementsByClassName("nav-label") as HTMLCollectionOf<HTMLElement>;
    
    if (this.navTrigger) {
      this.navTrigger.addEventListener("click", this.navToggle.bind(this));
    }

    window.addEventListener("resize", this.resize.bind(this));
  }
  
  navToggle(): void {
    if (this.navTrigger && this.nav) {
      const closed = this.navTrigger.className.indexOf("close") > 0;
      if (closed) {
        this.navTrigger.className = "nav-trigger open";
        this.nav.className = "out";
      } else {
        this.navTrigger.className = "nav-trigger close";
        this.nav.className = "in";
      }
    }
    // lógica para abrir o cerrar el menú de navegación
  }

  resize(): void {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.fontSize = this.windowHeight * 0.1;
    this.headingSize = this.windowWidth * 0.1;
    if (this.headingSize > this.windowHeight * 0.3) this.headingSize = this.windowHeight * 0.3;
  
    if (this.labels) {
      for (var i = 0; i < this.labels.length; i++) {
        this.labels[i].style.fontSize = this.fontSize + "px";
        this.labels[i].style.height = this.fontSize + "px";
        this.labels[i].style.marginTop = "-" + this.fontSize * 0.6 + "px";
      }
    }
  
    if (this.header) {
      this.header.style.height = this.windowHeight + "px";
    }
    if (this.heading) {
      this.heading.style.fontSize = this.headingSize + "px";
      this.heading.style.height = this.headingSize + "px";
      this.heading.style.marginTop = "-" + this.headingSize * 0.6 + "px";
    }
  }
}