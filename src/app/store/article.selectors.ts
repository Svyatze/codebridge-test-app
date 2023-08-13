import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ArticleState } from './article.state';

export const selectArticleState = createFeatureSelector<ArticleState>('articles');

export const selectArticles = createSelector(
    selectArticleState,
    (state) => state.articles
);
