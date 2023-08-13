import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { ArticleListComponent } from './Articles/article-list/article-list.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ArticleComponent } from './Articles/article/article.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";
import { HighlightPipe } from "./highlight.pipe";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { articleReducer } from "./store/article.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ArticleEffects } from "./store/article.effects";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    MatIconModule,
    StoreModule.forRoot({ articles: articleReducer }),
    EffectsModule.forRoot([ArticleEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
