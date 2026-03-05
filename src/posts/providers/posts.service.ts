import { UsersService } from '@/users/providers/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  findAll(userId: number) {
    const user = this.usersService.findOneById(userId);

    return [];
  }
}
