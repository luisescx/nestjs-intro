import { UsersService } from '@/users/providers/users.service';
import { forwardRef, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}

  login(email: string, password: string, id: number) {
    const user = this.userService.findOneById(id);

    return user;
  }
}
