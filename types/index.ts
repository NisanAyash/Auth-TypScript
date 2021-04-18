export type User = {
  id?: string;
};

export interface AuthConfig {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
}
