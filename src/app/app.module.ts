import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VocabularyListComponent } from './vocabulary/vocabulary-list/vocabulary-list.component';
import { VocabularyItemComponent } from './vocabulary/vocabulary-item/vocabulary-item.component';
import { VocabularyService } from './vocabulary/vocabulary.service';
import { VocabularyAddWordComponent } from './vocabulary/vocabulary-add-word/vocabulary-add-word.component';

@NgModule({
  declarations: [
    AppComponent,
    VocabularyListComponent,
    VocabularyItemComponent,
    VocabularyAddWordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [VocabularyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
