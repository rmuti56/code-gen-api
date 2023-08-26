import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'cat' })
export class Cat {
  @Field((type) => ID)
  id: string;

  @Directive('@upper')
  title?: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  description2?: string;

  @Field()
  creationDate: Date;
}
