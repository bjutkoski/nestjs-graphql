
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateAuthorInput {
    firstName: string;
    lastName: string;
}

export interface UpdateAuthorInput {
    firstName?: string;
    lastName?: string;
}

export interface IQuery {
    allAuthors(): Author[] | Promise<Author[]>;
    author(id: string): Author | Promise<Author>;
}

export interface Author {
    _id: string;
    firstName?: string;
    lastName?: string;
}

export interface IMutation {
    createAuthor(author: CreateAuthorInput): Author | Promise<Author>;
    updateAuthor(id: string, author?: UpdateAuthorInput): Author | Promise<Author>;
    deleteAuthor(id: string): string | Promise<string>;
}
