import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): User[] {
    return this.appService.getUsers();
  }
}
