import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&~`_(){}[\]-])(?=.*[$@$!%*?&~`_(){}[\]-]).{8,}$/,
    {
      message:
        'Password must contain at least 8 characters, one alphabet, one number, and one special character',
    },
  )
  readonly password: string;
}
