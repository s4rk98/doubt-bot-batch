import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import configuration from './configuration/env.configuration';
import validationSchema from './configuration/env.validation';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
      validationSchema,
    }),
    ScheduleModule.forRoot(),
    SharedModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
