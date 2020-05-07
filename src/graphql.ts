
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    allAuthors(): Author[] | Promise<Author[]>;
    author(id: string): Author | Promise<Author>;
}

export interface Author {
    id: string;
    firstName?: string;
    lastName?: string;
}
