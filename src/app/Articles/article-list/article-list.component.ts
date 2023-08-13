import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ArticleModel } from '../article.model';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
} from 'rxjs/operators';
import { ArticleState } from "../../store/article.state";
import { Store, select } from "@ngrx/store";
import * as ArticleActions from '../../store/article.actions';
import { selectArticles } from "../../store/article.selectors";

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit, AfterViewInit {
    searchValue = '';
    articles$: Observable<ArticleModel[]>;
    resultsNumber = 0;
    constructor(
        private fb: FormBuilder,
        private store: Store<ArticleState>
    ) {
        this.articles$ = this.store.select(selectArticles);
    }

    @ViewChild('searchInput') input!: ElementRef;

    ngOnInit(): void {
        this.store.dispatch(ArticleActions.loadArticles({ searchTerm: '' }));

    }

    ngAfterViewInit(): void {
        this.initSearchObservable();
        this.articles$.subscribe(r => console.log(r))
    }

    initSearchObservable() {
        const inputElement: HTMLInputElement = this.input.nativeElement;
        const searchObservable = new Subject<string>();

        const searchValue$ = searchObservable.pipe(
            debounceTime(400),
            distinctUntilChanged()
        );

        searchValue$.subscribe((search: string) => {
            this.store.dispatch(ArticleActions.loadArticles({ searchTerm: search }));
        });

        inputElement.addEventListener('keyup', (event) => {
            if (event.target) {
                searchObservable.next((event.target as HTMLInputElement).value);
            }
        });
    }
}
