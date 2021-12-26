import { getRepository } from 'typeorm';
import { Category } from '../entities/category';

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = getRepository(Category)
    
    const alreadyExists = await repo.findOne( id )

    if(!alreadyExists){
      return new Error('Category does not exists')  
    }
    await repo.delete(id)
  }
}