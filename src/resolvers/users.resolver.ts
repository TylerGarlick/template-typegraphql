import { Resolver, Query } from 'type-graphql'
import { User } from '../types'

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users() {
    return []
  }
}
