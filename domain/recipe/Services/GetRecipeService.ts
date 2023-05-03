import HTTPRecipeRepository from '../Repositories/HTTPRecipeRepository'
import { Repository, RecipeUseCaseProps } from '../types.d'

type ConstructorType = {
  repository: Repository
}

class GetRecipeService {
  repository

  constructor({ repository }: ConstructorType) {
    this.repository = repository
  }

  static create() {
    const repository = HTTPRecipeRepository.create()
    return new GetRecipeService({ repository })
  }

  async execute({ ingredients }: RecipeUseCaseProps) {
    return this.repository.getRecipe({ ingredients })
  }
}

export default GetRecipeService
