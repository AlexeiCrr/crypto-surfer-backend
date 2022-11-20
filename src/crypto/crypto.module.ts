import { Module } from '@nestjs/common';
import { CryptoController } from 'src/crypto/crypto.controller';
import { CryptoService } from 'src/crypto/crypto.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class CryptoModule {}
