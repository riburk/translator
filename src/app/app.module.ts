import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material'

import { AppComponent } from './app.component';
import { VocabularyListComponent } from './vocabulary/vocabulary-list/vocabulary-list.component';
import { VocabularyItemComponent } from './vocabulary/vocabulary-item/vocabulary-item.component';
import { VocabularyService } from './vocabulary/vocabulary.service';
import { VocabularyAddWordComponent } from './vocabulary/vocabulary-add-word/vocabulary-add-word.component';
import { VocabularyTableComponent } from './vocabulary/vocabulary-table/vocabulary-table.component';

@NgModule({
  declarations: [
    AppComponent,
    VocabularyListComponent,
    VocabularyItemComponent,
    VocabularyAddWordComponent,
    VocabularyTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [VocabularyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
