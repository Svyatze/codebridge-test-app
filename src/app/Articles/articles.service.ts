import { Injectable } from '@angular/core';
import { ArticleModel } from "./article.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articles: ArticleModel[] = [];

  constructor(private http: HttpClient) { }
  //to enhance methods below
  getArticles(params?: string) {
    if (params) {
    return this.http.get<any>(`https://api.spaceflightnewsapi.net/v4/articles/?search=${params}`)
    } else {
      return this.http.get<any>(`https://api.spaceflightnewsapi.net/v4/articles/`)
    }
  }

  //to improve getArticleById() method
  getArticleById(id: string | null) {
    return this.http.get<{
      id: string,
      image_url: string,
      published_at: string,
      title: string,
      summary: string,
    }>(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
  }
}
