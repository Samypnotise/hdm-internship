import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export default class Bcrypt {
  async hash(input: string) {
    return bcrypt.hash(input, 10);
  }

  async compare(input: string, hash: string) {
    return bcrypt.compare(input, hash);
  }
}
