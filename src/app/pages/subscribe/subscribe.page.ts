import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
    });
  }

  onSubscribe() {

  }

}
