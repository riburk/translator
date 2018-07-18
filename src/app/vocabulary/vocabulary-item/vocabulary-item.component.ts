import { Component, Input, OnInit } from '@angular/core';
import { Vocabulary } from '../vocabulary.model';

@Component({
  selector: 'app-vocabulary-item',
  templateUrl: './vocabulary-item.component.html',
  styleUrls: ['./vocabulary-item.component.css']
})
export class VocabularyItemComponent implements OnInit {
  @Input() vocab: Vocabulary;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
