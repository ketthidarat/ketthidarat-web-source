import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends = [
    {
      name: 'Thidarat Ruamsamrong',
      pic: 'ket.jpg',
      position: 'Ket',
    },
    
    {
      name: 'Duenchay Wongtree',
      pic: 'pare.jpg',
      position: 'Pare',
    },
    
    {
      name: 'Toranit Wongkhamsa',
      pic: 'king.jpg',
      position: 'King',
    },
    {
      name: 'Siriluk Yomthaisong',
      pic: 'sirilak.jpg',
      position: 'Miw',
    },{
      name: 'Chadaporn Netwong',
      pic: 'tik.jpg',
      position: 'Tik',
    },
    {
      name: 'Alisa Kapat',
      pic: 'alisa.jpg',
      position: 'Benz',
    },
    {
      name: 'Pattamawan Somsakul',
      pic: 'pat.jpg',
      position: 'Pat',
    }
    
  ];
  users: any

  constructor(private http: HttpClient) {
    this._getUsers()
  }

  _getUsers() {
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/59110440084/user/_search',
      {
        query: {
          /*
          wildcard: {
            user: { value: '*an*' }
          }
          */
        }
      }
    ); /*.subscribe( data => {
      this.users = data['result']['hits']
      console.log(this.users)
    }, error => {});
    */
  }

  _saveUser(usr: string, passwd: string) {
    console.log(`user=${usr} passwd:${passwd}`);
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/59110440084/user/_create',
      {
        user: usr,
        password: passwd,
      }
    );
  }

  getFriends() {
    return this.friends;
  }
}
