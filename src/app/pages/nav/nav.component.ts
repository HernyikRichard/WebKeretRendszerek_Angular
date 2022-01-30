import { Router } from '@angular/router';
import { CATEGORIES } from './../../shared/db/category-db';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  categories = CATEGORIES;
  constructor(private router: Router) { }
}