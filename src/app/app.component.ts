import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe({
      next(response: any) {
        console.log(response);
      },
      error(err: Error) {
        console.error('Error: ' + err);
      },
      complete() {
        console.log('Done Getting Users');
      },
    });
  }
}
