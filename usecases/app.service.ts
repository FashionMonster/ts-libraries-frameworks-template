import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHelloS(): string {
    console.log("サービス IN");
    return "Hello World!";
  }
}
