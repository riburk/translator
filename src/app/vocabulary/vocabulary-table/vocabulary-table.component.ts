import { Component, OnInit } from '@angular/core';
import { VocabularyService } from '../vocabulary.service';

@Component({
  selector: 'app-vocabulary-table',
  templateUrl: './vocabulary-table.component.html',
  styleUrls: ['./vocabulary-table.component.css']
})
export class VocabularyTableComponent implements OnInit {
  displayedColumns = ['word', 'translation'];
  dataSource = [];

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit() {
    this.getVocabulary();
    console.log('the items are: ' + this.dataSource);
  }

  getVocabulary(): void {
    this.vocabularyService.getVocabulary()
      .subscribe((response) => {
          this.dataSource = response;
        }
      );
  }

}
