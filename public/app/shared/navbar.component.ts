import { UserService } from './../core/services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
})
export class NavigationComponent {
    hasLoggedUser: boolean = localStorage.getItem('currentUser') !== null;

    constructor(private userService: UserService, private router: Router) {
    }

    logout() {
        this.userService.logout()
            .subscribe(res => {
                if (res.ok) {
                    this.hasLoggedUser = !this.hasLoggedUser;
                }
            });
    }

    login() {
        this.router.navigateByUrl('/login');
    }

    events() {
        this.router.navigateByUrl('/events');
    }

    create() {
        this.router.navigateByUrl('/events/new');
    }

    users() {
        this.router.navigateByUrl('/users');
    }
    profile() {
        this.router.navigateByUrl('/profile');
    }

    requests() {
        this.router.navigateByUrl('/requests');
    }
}
