import { Controller } from '@nestjs/common';
import { RefreshTokenService } from './refresh_token.service';

@Controller('refresh-token')
export class RefreshTokenController {
  constructor(private readonly refreshTokenService: RefreshTokenService) {}
}
