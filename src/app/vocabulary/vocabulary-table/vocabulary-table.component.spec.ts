import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyTableComponent } from './vocabulary-table.component';

describe('VocabularyTableComponent', () => {
  let component: VocabularyTableComponent;
  let fixture: ComponentFixture<VocabularyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
