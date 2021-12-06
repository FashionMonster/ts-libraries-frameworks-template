import { Controller, Get, Res, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../../common/exceptionFilters/httpException.filter';
import { AppService } from '../../usecases/app.service';
import { Response } from 'express';

@Controller('nestRequest')
@UseFilters(HttpExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloC(@Res() res: Response) {
    console.log('コントローラー IN');
    const message: string = this.appService.getHelloS();

    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    return res.json({
      nestResponse: message,
    });
  }
}
