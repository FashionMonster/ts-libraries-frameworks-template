import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException) // @Catch() デコレータの適用、HttpException をハンドルすることを宣言
export class HttpExceptionFilter implements ExceptionFilter {
  // ExceptionFilter インターフェースの実装
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    console.log('フィルター通過');

    // レスポンスを加工
    response.status(status).json({
      statusCode: status,
      serverErrMsg: 'サーバーエラーが発生しました',
    });
  }
}
