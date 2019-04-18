import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  changeRoute(value : string){
    console.log("cambiaremos la ruta",value);
    this.router.navigate([`${value}`]);
  }

}
