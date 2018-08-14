import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { VocabularyAddWordComponent } from './vocabulary/vocabulary-add-word/vocabulary-add-word.component';
import { VocabularyTableComponent } from './vocabulary/vocabulary-table/vocabulary-table.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: VocabularyTableComponent },
  { path: 'add', component: VocabularyAddWordComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule { }
