import HTTPRecipeRepository from "../Repositories/HTTPRecipeRepository";
import { RecipeServiceType, RecipeUseCaseProps } from "../types.d";

class GetRecipeService {
  repository;

  constructor({ repository }: RecipeServiceType) {
    this.repository = repository;
  }

  static create() {
    const repository = HTTPRecipeRepository.create();
    return new GetRecipeService({ repository });
  }

  async execute({ ingredients }: RecipeUseCaseProps) {
    return this.repository.getRecipe({ ingredients });
  }
}

export default GetRecipeService;
