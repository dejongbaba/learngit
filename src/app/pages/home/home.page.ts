import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {CommandService} from '../../services/command.service';

@Component({
  selector: 'app-shuffler',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  commands: any = [];
  filteredCommands = [];

  constructor(public navCtrl: NavController, public cmdService: CommandService) {
  }

  ngOnInit() {
    this.cmdService.getCommands()
        .subscribe(commands => {
          this.commands = commands;
        });
  }

  search(event) {
    // Get the search terms from the input field
    const searchTerm = event.target.value;
    if (!searchTerm) {
      this.filteredCommands = [];
    }

    // Tokenize the search terms and remove empty spaces
    const tokens = searchTerm
        .toLowerCase()
        .split(' ')
        .filter((token) => {
          return token.trim() !== '';
        });

    if (tokens.length) {
      //  Create a regular expression of all the search terms

      const searchTermRegex = new RegExp(tokens.join('|'), 'gim');

      const filteredData = this.commands.filter((item) => {
        // Create a string of all object values
        let searchString = '';
        for (const key in item) {
          if (item.hasOwnProperty(key) && item[key] !== '') {
            searchString += item[key].toString().toLowerCase().trim() + ' ';
          }
        }
        // Return objects where a match with the search regex if found
        return searchString.match(searchTermRegex);
      });
      this.filteredCommands = filteredData;
    }
  }

}
