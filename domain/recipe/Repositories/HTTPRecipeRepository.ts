import { RecipeUseCaseProps } from "../types";

class HTTPRecipeRepository {
  static create() {
    return new HTTPRecipeRepository();
  }

  async getRecipe({ ingredients }: RecipeUseCaseProps) {
    const url = new URL(window.location.origin + "/api/recipe");
    url.searchParams.set("ingredients", ingredients);
    const resp = await fetch(url);
    const data = await resp.json();
    console.log({ data });
    debugger;
    return data;
  }
}

export default HTTPRecipeRepository;
