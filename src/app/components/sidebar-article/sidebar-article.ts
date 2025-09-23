import { Component, Input } from '@angular/core';
import { Article } from '../../models/articles.model';

@Component({
  selector: 'app-sidebar-article',
  standalone: false,
  templateUrl: './sidebar-article.html',
  styleUrl: './sidebar-article.css'
})
export class SidebarArticle {
  @Input() article!: Article;
}
