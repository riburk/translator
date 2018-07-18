import { Component, OnInit, ViewChild } from '@angular/core';
import { VocabularyService } from '../vocabulary.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vocabulary-add-word',
  templateUrl: './vocabulary-add-word.component.html',
  styleUrls: ['./vocabulary-add-word.component.css']
})
export class VocabularyAddWordComponent implements OnInit {
  public vocabWord: string;
  @ViewChild('f') addWordForm: NgForm;
  Form;

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit() {
  }

  addWord() {
    console.log('add word clicked');
    this.vocabularyService.addVocabularyWord(this.addWordForm.value.word).subscribe();
  }

}
