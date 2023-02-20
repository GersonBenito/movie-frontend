import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() public viewSearch: boolean = true;

  constructor( private router: Router ){ 
    
  }

  redirectTo(route: string){
    this.router.navigate([route]);
  }


}
