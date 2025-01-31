import { Module } from '@nestjs/common';
import DatasourceModule from './Datasource/DatasourceModule';
import SecurityModule from './Security/SecurityModule';
import UserRepository from 'src/Api/Repository/UserRepository';

@Module({
  imports: [DatasourceModule, SecurityModule],
  exports: [DatasourceModule, SecurityModule, UserRepository],
  controllers: [],
  providers: [UserRepository],
})
export default class CoreModule {}
