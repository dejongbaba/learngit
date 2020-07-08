import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GitCommand} from '../models/app.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CommandService {

    constructor(private http: HttpClient) {
    }

    public getCommands() {
        return this.http.get(`./assets/commands/commands.json`).pipe(
            map((result: any[]) => {
                return result.map(c => new GitCommand(c.title, c.command, c.description));
            })
        );
    }

}
