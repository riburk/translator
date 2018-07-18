import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyAddWordComponent } from './vocabulary-add-word.component';

describe('VocabularyAddWordComponent', () => {
  let component: VocabularyAddWordComponent;
  let fixture: ComponentFixture<VocabularyAddWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyAddWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyAddWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
