import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  toDashboardPage() {
    this.router.navigate(['/dashboard']);
  }
  toDashLoginPage() {
    this.router.navigate(['/login']);
  }
}
