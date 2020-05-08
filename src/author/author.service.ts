import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './author.interface';
import { CreateAuthorDTO, UpdateAuthorDTO } from './dto/create-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel('Author')
    private readonly authorModel: Model<Author>,
  ) {}

  async find(): Promise<Author[]> {
    return this.authorModel.find();
  }

  async findOne(id: string): Promise<Author> {
    return this.authorModel.findById(id);
  }

  async create(author: CreateAuthorDTO): Promise<Author> {
    return this.authorModel.create(author);
  }

  async update(id: string, author: UpdateAuthorDTO): Promise<Author> {
    return this.authorModel.findByIdAndUpdate({ _id: id }, author, {
      new: true,
    });
  }

  async delete(id: string): Promise<string> {
    await this.authorModel.deleteOne({ _id: id });
    return `Author was deleted with id ${id}`;
  }
}
