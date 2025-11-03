import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateGoogle(profile: any) {
    const { displayName, emails, photos } = profile;
    // Simulate user creation (can connect to MongoDB later)
    if (displayName && emails && photos) {
        const user = {
          name: displayName,
          email: emails[0].value,
          picture: photos[0].value,
        };
    
        const payload = { email: user.email, sub: user.email };
        const access_token = this.jwtService.sign(payload);
    
     return { user, access_token };
    } else {
        return { ...profile };
    }
  }
}
