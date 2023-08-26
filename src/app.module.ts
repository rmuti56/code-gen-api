import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
      // transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
    }),
    CatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
