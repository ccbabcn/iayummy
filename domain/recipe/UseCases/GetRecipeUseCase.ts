import GetRecipeService from "../Services/GetRecipeService";
import { RecipeUseCaseType, RecipeUseCaseProps } from "../types.d";

class GetRecipeUseCase {
  service;

  constructor({ service }: RecipeUseCaseType) {
    this.service = service;
  }

  static create() {
    const service = GetRecipeService.create();
    return new GetRecipeUseCase({ service });
  }

  async execute({ ingredients }: RecipeUseCaseProps) {
    return this.service.execute({ ingredients });
  }
}

export default GetRecipeUseCase;
