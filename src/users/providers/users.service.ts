import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamsDto } from '../dtos/get-user-params.dto';
import { AuthService } from '@/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly userService: AuthService,
  ) {}

  findAll(getUserParamsDto: GetUserParamsDto, limit: number, page: number) {
    return [];
  }

  findOneById(id: number) {
    return {
      firstName: 'John',
      lastName: 'Doe',
    };
  }
}
