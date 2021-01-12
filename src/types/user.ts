import { ObjectType, Field, registerEnumType, ID } from 'type-graphql'

export enum Visibility {
  PUBLIC = 2,
  PROTECTED = 1,
  PRIVATE = 0,
}

registerEnumType(Visibility, {
  name: 'Visibility', // this one is mandatory
  description: 'The basic directions', // this one is optional
})

@ObjectType()
export class User {
  @Field(() => ID)
  id: string = ``

  @Field()
  username: string = ``

  @Field()
  name: string = ``

  @Field()
  email: string = ``

  @Field()
  passwordHash: string = ``

  @Field({
    defaultValue: true,
  })
  isActive: boolean = true

  @Field(() => Visibility)
  visibility: Visibility = Visibility.PUBLIC
}
