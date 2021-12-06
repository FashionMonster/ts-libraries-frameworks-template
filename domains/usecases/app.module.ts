import { Module } from '@nestjs/common';
import { AppController } from '../../interfaces/controllers/app.controller';
import { UserController } from '../../interfaces/controllers/user.controller';
import { PostController } from '../../interfaces/controllers/post.controller';
import { AppService } from '../../usecases/app.service';
import { UserService } from '../../usecases/user.service';
import { PostService } from '../../usecases/post.service';
import { PrismaService } from '../../usecases/prisma.service';

const CONTROLLER_ARRAY = [AppController, UserController, PostController];
const SERVICE_ARRAY = [PrismaService, AppService, UserService, PostService];

@Module({
  imports: [],
  controllers: CONTROLLER_ARRAY,
  providers: SERVICE_ARRAY,
})
export class AppModule {}
