import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {FormGroup} from '@angular/forms';
import {Answers, Choice, Question} from '../../models/app.model';
import {EventQueueService} from '../../services/event-queue.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.page.html',
    styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

    view: number;
    views = {
        welcome: 1,
        game: 2,
        result: 3
    };
    gamePoint = 0;
    currentQuestionIndex: number;
    form: FormGroup;
    questions: Question[];
    answers: Answers;
    subscription: any;
    isPressed: boolean = false;

    constructor(public  questionService: QuestionService, public eventService: EventQueueService) {
    }


    ngOnInit() {
        this.view = this.views.welcome;
        this.currentQuestionIndex = 0;
        this.questionService.getQuestions()
            .subscribe(questions => {
                this.questions = questions;
                this.answers = new Answers();
                this.currentQuestionIndex = 0;
            });
        this.subscription = this.eventService.eventBroker$.subscribe(data => {
            //do something here
            console.log('data ', data);
            const {points} = data;
            this.gamePoint = points;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    updateChoice(choice: Choice) {
        this.answers.values[this.currentQuestionIndex] = choice;
        const question = this.questions[this.currentQuestionIndex];
        let choiceString: string = `${choice}`;
        this.calcPoints(question.choices.find((choice) => choice.value == choiceString));
    }

    nextOrViewResults() {
        if (this.currentQuestionIndex === this.questions.length - 1) {
            return;
        }
        this.currentQuestionIndex++;
    }

    showResult() {
        this.view = this.views.result;
    }

    con(value) {
        console.log('value', value);
    }

    calcPoints(choice: Choice) {
        if (!choice.correct) {
            // console.log('got to calc choice', choice, this.isPressed);
            // if (this.isPressed) {
            //     this.gamePoint > 0 ? this.gamePoint -= 10 : null;
            //     this.eventService.notifyApp({points: this.gamePoint});
            // }
            this.nextOrViewResults();
            return;
        }

        // if (this.isPressed === false) {
        this.gamePoint += 10;
        this.nextOrViewResults();

        // this.isPressed = true;
        // }

        this.eventService.notifyApp({points: this.gamePoint});
    }

    gotoGameScreen() {
        this.view = this.views.game;
    }


}
