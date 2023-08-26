import { Query, Resolver } from '@nestjs/graphql';
import { Cat } from './models/cat.model';
import { CatService } from './cat.service';

@Resolver((of) => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query((returns) => [Cat])
  cats(): Cat[] {
    return this.catService.findAll();
  }
}
