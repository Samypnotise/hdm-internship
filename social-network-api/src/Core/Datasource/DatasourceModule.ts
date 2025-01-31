import { Module } from '@nestjs/common';
import { PrismaService } from './Prisma';

@Module({
  imports: [],
  exports: [PrismaService],
  providers: [PrismaService],
})
export default class DatasourceModule {}
