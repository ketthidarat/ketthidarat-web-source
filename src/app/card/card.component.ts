import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  friends: any;
  users: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.friends = this.userService.getFriends();
    this.userService._getUsers().subscribe(
      (data: any) => {
        this.users = data.result.hits;
        console.log(this.users);
        for (const u of this.users) {
          // console.log(u['source'])
          // console.log(u._source)
          console.log(u._source.user);
        }
      },
      error => {

      }
    );
  }

}
