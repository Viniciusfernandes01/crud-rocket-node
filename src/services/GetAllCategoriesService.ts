import { getRepository } from 'typeorm';
import { Category } from '../entities/category';

export class GetAllCategoriesService {
  async execute() {
    const repo = getRepository(Category)

    const categories = repo.find()

    return categories
  }
}