import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ArticlesService } from "../articles.service";
import { ArticleModel } from "../article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articleId: string = '';
  isLoading = false;
  // @ts-ignore
  article: ArticleModel
  constructor(
    private articleService: ArticlesService,
    public route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        console.log(paramMap);
        if (paramMap.has('articleId')) {
          const articleId = paramMap.get('articleId') as string;
          this.isLoading = true;
          console.log(articleId, 'articleId');
          this.articleService.getArticleById(articleId).subscribe((article) => {

            this.article = {
              id: article.id,
              title: article.title,
              summary: article.summary,
              image_url: article.image_url,
              published_at: article.published_at,
            }
            this.isLoading = false;
            console.log(this.article);
          });
        } else {
          this.articleId = ''
        }
      }
    );
  }

  goBack() {
    window.history.back();
  }
}
