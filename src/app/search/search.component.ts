import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'gh-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string = '';
  minLength: number = 3;
  isLoad: boolean = false;
  user: any;

  constructor(private  usersServise: UsersService) {
  }

  ngOnInit() {
  }

  handleChange() {
    // console.log(this.searchStr);
    if (this.minLength <= this.searchStr.length) {
      this.usersServise.getUser(this.searchStr)
        .subscribe(user => {
          this.user = user;
          this.isLoad = true;
        });
    }

  }
}
