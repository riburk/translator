// import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vocabulary } from './vocabulary.model';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VocabularyService {
  constructor(private http: HttpClient) {}
  getVocabulary(): Observable<Vocabulary[]> {
     return this.http.get<Vocabulary[]>('https://rxq8am8n5i.execute-api.us-west-2.amazonaws.com/beta');
  }

  addVocabularyWord(word: string): Observable<any> {
    const url = 'https://rxq8am8n5i.execute-api.us-west-2.amazonaws.com/beta/word/' + word;

    return this.http.put(url, null, httpOptions).pipe(
      tap(_ => console.log('added word: ' + word))
    );
  }
}



