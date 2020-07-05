import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-shuffler',
  templateUrl: './shuffler.page.html',
  styleUrls: ['./shuffler.page.scss'],
})

export class ShufflerPage implements OnInit {
  items: any = [
    {
      command: 'git init <directory>',
      title: 'Initialize Git',
      description: 'Create empty Git repo in specified directory. Run with no arguments to initialize the current directory as a git repository'
    },
    {
      command: 'git clone <repo>',
      title: 'Clone online Repo to Local device',
      description: 'Clone repo located at <repo> onto local machine. Original repo can be located on the local filesystem or on a remote machine via HTTP or SSH.'
    },
    {
      command: 'git config  user.name <name>',
      title: 'Configure user name',
      description: 'Define author name to be used for all commits in current repo. Devs commonly use --global flag to set config options for current user'
    },
    {
      command: 'git commit -m  "<message>"',
      title: 'Add message to denote your change',
      description: 'Commit the staged snapshot, but instead of launching a text editor, use <message> as the commit message.'
    },
    {
      command: 'git status',
      title: 'Get your current application status',
      description: 'List which files are staged, unstaged, and untracked.'
    },
    {
      command: 'git log',
      title: 'Get Logs of your git activities',
      description: 'Display the entire commit history using the default format. For customization see additional options.'
    },
    {
      command: 'git diff',
      title: 'Get difference in working directory ',
      description: 'Show unstaged changes between your index and working directory.'
    }
  ];
  filteredItems = [];

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    console.log('got here to shuffler');
  }

  search(event) {

    // Get the search terms from the input field
    const searchTerm = event.target.value;
    if (!searchTerm) {
      this.filteredItems = [];
    }

    console.log('searchTerm', searchTerm);
    // Tokenize the search terms and remove empty spaces
    const tokens = searchTerm
        .toLowerCase()
        .split(' ')
        .filter((token) => {
          return token.trim() !== '';
        });
    console.log('tokens', tokens);

    if (tokens.length) {
      //  Create a regular expression of all the search terms
      console.log('into filter block', tokens.length);

      const searchTermRegex = new RegExp(tokens.join('|'), 'gim');
      console.log('searchTermRegex', searchTermRegex);

      const filteredData = this.items.filter((item) => {
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

      this.filteredItems = filteredData;

    }
  }

  onView(item) {
    console.log('item', item);
    // this.navCtrl.navigateForward(ViewerPage, {...item});

  }

}
