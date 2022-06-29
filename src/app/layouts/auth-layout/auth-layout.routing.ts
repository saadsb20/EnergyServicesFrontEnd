import { Routes } from '@angular/router';
import { ApprouveAccountComponent } from 'src/app/pages/approuve-account/approuve-account.component';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'approuveAccount', component: ApprouveAccountComponent },
    { path: 'register', component: RegisterComponent }
];
