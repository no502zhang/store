import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [CoreModule, SharedModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
