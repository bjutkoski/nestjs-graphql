import { Resolver, Query, Args, Mutation, Root } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from './author.interface';
import { CreateAuthorDTO, UpdateAuthorDTO } from './dto/create-author.dto';

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query()
  async allAuthors(): Promise<Author[]> {
    return this.authorService.find();
  }

  @Query()
  async author(@Args('id') id): Promise<Author> {
    return this.authorService.findOne(id);
  }

  @Mutation()
  async createAuthor(@Args('author') author: CreateAuthorDTO): Promise<Author> {
    return this.authorService.create(author);
  }

  @Mutation()
  async updateAuthor(
    @Args('id') id: string,
    @Args('author') author: UpdateAuthorDTO,
  ): Promise<Author> {
    return this.authorService.update(id, author);
  }

  @Mutation()
  async deleteAuthor(@Root() root, @Args('id') id): Promise<string> {
    return this.authorService.delete(id);
  }
}
