import { Component, OnInit } from '@angular/core';
import { ArticleModel } from "../article.model";
import { ArticlesService } from "../articles.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  constructor(private articlesService: ArticlesService, private fb: FormBuilder) {
  }

  searchValue = '';
  articles: ArticleModel[] = [];
  resultsNumber = 0;
  searchForm = this.fb.nonNullable.group({
    searchValue: ''
  });

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.articlesService.getArticles(this.searchValue).subscribe(response => {
      this.articles = response.results.map((article: any) => {
        return {
          title: article.title,
          content: article.summary,
          imagePath: article.image_url,
          id: article.id.toString()
        }
      })
    });
  }

  onSearchSubmit() {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
}
