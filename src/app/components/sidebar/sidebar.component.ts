import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/admin/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/admin/icons', title: 'Icons', icon: 'ni-planet text-blue', class: '' },
  { path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: '' },
  { path: '/admin/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/admin/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/auth/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
  { path: '/auth/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  email: any;

  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
    this.email = localStorage.getItem('username');

  }

  logout() {
    this.AuthService.logout();
    this.router.navigateByUrl("/auth/login");
  }
}
