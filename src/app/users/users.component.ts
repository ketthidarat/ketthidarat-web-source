// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.scss']
// })
// export class UsersComponent implements OnInit {

//   users: any;

//   constructor(private userService: UserService) {
//   }

//   ngOnInit() {
//     this.userService._getUsers().subscribe(
//       (data: any) => {
//         this.users = data.result.hits;
//         console.log(this.users);
//         for (const u of this.users) {
//           // console.log(u['source'])
//           // console.log(u._source)
//           console.log(u._source.user);
//         }
//       },
//       error => {

//       }
//     );
//   }

// }
import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {map} from 'rxjs/operators';
import { from } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  users: AngularFireList<any>;
  user: any[]

  constructor(private db: AngularFireDatabase) {
    this.users = db.list("/60114440143/user");
  }

  ngOnInit() {
    this.users.snapshotChanges().pipe(map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      })).subscribe(items => {
      this.user = items;
      for(let u of this.user){
        console.log(u.value.user)
      }
      });
    
  }

}
