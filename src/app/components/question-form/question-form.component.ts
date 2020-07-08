import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Question} from '../../models/app.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit {

  @Input() question: Question;
  @Output() onChoiceMade = new EventEmitter();
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      choice: new FormControl()
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => this.onChoiceMade.emit(this.form.value.choice));
  }

}
