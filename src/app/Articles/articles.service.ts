import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getArticles(params?: string): Observable<any> {
    let apiUrl = 'https://api.spaceflightnewsapi.net/v4/articles/';
    if (params) {
      apiUrl = `https://api.spaceflightnewsapi.net/v4/articles/?search=${params}`;
    }
    return this.http.get<any>(apiUrl);
  }

  getArticleById(id: string | null): Observable<any> {
    return this.http.get<any>(
      `https://api.spaceflightnewsapi.net/v4/articles/${id}`
    );
  }
}
