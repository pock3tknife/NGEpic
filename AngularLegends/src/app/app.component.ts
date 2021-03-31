import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'AngularLegends';

  constructor(private router: Router) { }  
  
  ngOnInit() {
  }
}
