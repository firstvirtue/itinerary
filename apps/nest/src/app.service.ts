import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): User[] {
    return [
      new User(1, 'John Doe', 'john.doe@example.com'),
      new User(2, 'Jane Smith', 'jane.smith@example.com'),
      new User(3, 'Alice Johnson', 'alice.johnson@example.com'),
      new User(4, 'Bob Brown', 'bob.brown@example.com'),
      new User(5, 'Charlie Davis', 'charlie.davis@example.com'),
    ];
  }
}
