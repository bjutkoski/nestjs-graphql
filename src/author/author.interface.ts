import { Document } from 'mongoose';

export interface Author extends Document {
  id: number;
  firstName: string;
  lastName: string;
}
