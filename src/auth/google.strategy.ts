import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
      callbackURL:
        configService.get<string>('GOOGLE_CALLBACK_URL') ||
        'http://localhost:3000/auth/google/redirect',
      scope: ['email', 'profile'],
    } as StrategyOptions);
    console.log({
  GOOGLE_CLIENT_ID: configService.get<string>('GOOGLE_CLIENT_ID'),
  GOOGLE_CLIENT_SECRET: configService.get<string>('GOOGLE_CLIENT_SECRET'),
  GOOGLE_CALLBACK_URL: configService.get<string>('GOOGLE_CALLBACK_URL'),
});

  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    console.log(profile);
    const user = await this.authService.validateGoogle(profile);
    done(null, user);
  }
}
