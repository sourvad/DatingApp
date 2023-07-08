import { Component, OnInit } from '@angular/core';

// TODO: Redirect from here to matches if user is already logged in

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor() { }

  ngOnInit(): void {
  }

  registerToggle(): void {
    this.registerMode = !this.registerMode;
  }
  
  cancelRegisterMode(event: boolean): void {
    this.registerMode = false;
  }
}
