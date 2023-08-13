import { ArticleModel } from "../Articles/article.model";
import { createAction, props } from "@ngrx/store";

export const loadArticles = createAction('[Article] Load Articles', props<{ searchTerm: string }>());
export const articlesLoaded = createAction('[Article] Articles Loaded', props<{ articles: ArticleModel[] }>());

