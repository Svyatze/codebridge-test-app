import { ArticleModel } from '../Articles/article.model';

export interface ArticleState {
  articles: ArticleModel[];
  searchTerm: string;
}
