import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticlesService } from '../Articles/articles.service';
import * as ArticleActions from './article.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ArticleEffects {
    loadArticles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ArticleActions.loadArticles),
            switchMap(({ searchTerm }) =>
                this.articlesService.getArticles(searchTerm).pipe(
                    map((response: any) => ArticleActions.articlesLoaded({ articles: response.results })),
                    tap((response: any) => console.log(response)),
                    catchError(() => of({ type: '[Article] Load Articles Error' }))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private articlesService: ArticlesService
    ) {}
}

