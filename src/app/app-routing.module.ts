import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from "./Articles/article-list/article-list.component";
import { ArticleComponent } from "./Articles/article/article.component";

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'article/:articleId', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
