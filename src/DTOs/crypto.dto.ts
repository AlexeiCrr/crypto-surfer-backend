import { Expose } from 'class-transformer';
export class CoinDto {
  @Expose()
  id: string;
  @Expose()
  name: string;
  @Expose()
  image: string;
  @Expose()
  currentPrice: string;
  @Expose()
  circulatingSupply: string;
  @Expose()
  totalSupply: string;
}
