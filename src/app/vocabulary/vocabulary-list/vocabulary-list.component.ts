import { Component, OnInit } from '@angular/core';
import { Vocabulary } from '../vocabulary.model';
import { VocabularyService } from '../vocabulary.service';

@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.css']
})
export class VocabularyListComponent implements OnInit {
  vocabularyItems: Vocabulary[];

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit() {
    this.getVocabulary();
    console.log('the items are: ' + this.vocabularyItems);
  }

  getVocabulary(): void {
    this.vocabularyService.getVocabulary()
      .subscribe((response) => {
          this.vocabularyItems = response;
        }
      );
  }

}
