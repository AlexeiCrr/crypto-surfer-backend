import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CryptoService } from 'src/crypto/crypto.service';
import { CoinDto } from 'src/DTOs/crypto.dto';

@Controller('/crypto')
export class CryptoController {
  constructor(private cryptoService: CryptoService) {}

  @Get('/listings')
  getListings(
    @Query() query: { currency: string; page: number },
  ): Observable<CoinDto> {
    return this.cryptoService.getListings(query);
  }
}
