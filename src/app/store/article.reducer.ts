import { createReducer, on } from "@ngrx/store";
import { ArticleState } from "./article.state";
import * as ArticleActions from './article.actions';

export const initialState: ArticleState = {
    articles: [],
    searchTerm: '',
};

export const articleReducer = createReducer(
    initialState,
    on(ArticleActions.loadArticles, (state, { searchTerm }) => ({ ...state, searchTerm })),
    on(ArticleActions.articlesLoaded, (state, { articles }) => ({ ...state, articles }))
);
