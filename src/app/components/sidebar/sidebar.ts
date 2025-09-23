import { Component, Input } from '@angular/core';
import { SidebarArticle } from '../sidebar-article/sidebar-article';
import { Articles } from '../../constants/article.constants';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  articles = Articles;
}
