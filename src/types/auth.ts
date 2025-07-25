export type UserType = 'Admin' | 'User';

export interface AuthTokenPayload {
  user_id: string;
  given_name: string;
  family_name: string;
  userType: UserType;
  exp: number;
}
