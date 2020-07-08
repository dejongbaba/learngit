// src/app/app.model.ts

export class Choice {
    constructor(public value: string, public correct?: boolean) {
    }
}

export class Question {
    constructor(public label: string, public choices: Choice[]) {
    }
}

export class Quiz {
    constructor(public label: string, public name: string, public description: string, public fileName: string) {
    }
}

export class GitCommand {
    constructor(public title: string, public command: string, public description: string) {
    }
}

export class Answers {
    constructor(public values: Choice[] = []) {
    }
}
