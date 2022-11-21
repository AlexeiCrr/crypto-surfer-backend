import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { CryptoModule } from 'src/crypto/crypto.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CryptoModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
