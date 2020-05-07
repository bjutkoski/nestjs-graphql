import { Resolver, Query, Context, Info, Parent, Args } from '@nestjs/graphql';
import { Author } from 'src/graphql';

@Resolver('Author')
export class AuthorResolver {
  authors: Author[] = [{ id: '1', firstName: 'Bruno', lastName: 'Jutkoski' }];

  @Query()
  async allAuthors(): Promise<Author[]> {
    return this.authors;
  }
  @Query()
  async author(
    @Parent() parent,
    @Args('id') id,
    @Context() context,
    @Info() info,
  ): Promise<Author> {
    return this.authors.find(author => author.id === id);
  }
}
