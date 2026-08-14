import { RouterLink, RouterLinkActive } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class Navbar {}
