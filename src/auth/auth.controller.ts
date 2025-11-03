import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Redirects user to Google login page
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res: any) {
    const { access_token, user }: any = await this.authService.validateGoogle(req.user);

    // Redirect to frontend with token as query param
    const redirectUrl = `http://localhost:3001/auth-success?token=${access_token}`;
    return res.redirect(redirectUrl);
  }
}
