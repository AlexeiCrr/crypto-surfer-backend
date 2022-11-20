import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { CoinDto } from 'src/DTOs/crypto.dto';

@Injectable()
export class CryptoService {
  constructor(private readonly httpService: HttpService) {}
  getListings(params): Observable<CoinDto> {
    const { currency, page } = params;
    const res = this.httpService
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`,
      )
      .pipe(
        map((response) => response.data),
        map((data) =>
          data.map((coin) => ({
            id: coin.id,
            name: coin.name,
            image: coin.image,
            currentPrice: coin.current_price,
            circulatingSupply: coin.circulating_supply,
            totalSupply: coin.total_supply,
          })),
        ),
      );
    return res;
  }
}
