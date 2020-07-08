import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from '../models/app.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    constructor(public http: HttpClient) {
    }

    public getQuestions() {
        return this.http.get(`./assets/questions/questions.json`).pipe(
            map((result: any[]) => {
                return result.map(r => new Question(r.label, r.choices));
            })
        );
    }
}
