import { Model } from './Model'
import { Attributes } from './Attributes'
import { Sync } from './Sync'
import { Eventing } from './Eventing'
export interface UserProps {
  id?: number; 
  name?: string;
  age?: number;
} 

const rootUrl = 'http://localhost:3000'

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new Sync<UserProps>(rootUrl)
    )
  }
}