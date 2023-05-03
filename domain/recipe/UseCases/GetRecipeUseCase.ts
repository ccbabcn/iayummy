import GetRecipeService from "../Services/GetRecipeService";
import { Service, RecipeUseCaseProps } from "../types.d";

type ConstructorType = {
  service: Service;
};

class GetRecipeUseCase {
  service;

  constructor({ service }: ConstructorType) {
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
