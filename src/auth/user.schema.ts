// src/auth/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  googleId: string;

  @Prop()
  email: string;

  @Prop()
  displayName: string;

  @Prop()
  avatar: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
