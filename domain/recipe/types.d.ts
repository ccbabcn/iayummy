export type RecipeUseCaseType = {
  service: Service;
  execute?: ({ ingredients }: RecipeUseCaseProps) => Promise<never[]>;
  //execute?: () => Promise<never[]>;
};

export type RecipeServiceType = {
  repository: Repository;
  execute?: ({ ingredients }: RecipeUseCaseProps) => Promise<never[]>;
};

type Service = {
  execute: ({ ingredients }: RecipeUseCaseProps) => Promise<never[]>;
};

export type Repository = {
  getRecipe: ({ ingredients }: RecipeUseCaseProps) => Promise<never[]>; // IRecipe
};

export interface IIngredient {
  name: string;
  quantity: string;
}

export interface IRecipe {
  name: string;
  level: number;
  time: number;
  rations: number;
  ingredients: IIngredient[];
  steps: string[];
}

export type RecipeUseCaseProps = {
  ingredients: string;
};

// {
//     "recipe": {
//         "name": "Huevos con melón y Nutella",
//         "level": "Fácil",
//         "time": 15,
//         "rations": 2,
//         "ingredients": [
//             {
//                 "name": "Huevo",
//                 "quantity": "2"
//             },
//             {
//                 "name": "Melón",
//                 "quantity": "1/4 unidad"
//             },
//             {
//                 "name": "Nutella",
//                 "quantity": "2 cucharadas"
//             }
//         ],
//         "steps": [
//             "Cuece los huevos en agua hirviendo durante 10 minutos.",
//             "Corta el melón en cubos pequeños.",
//             "Unta la Nutella en un bowl o plato.",
//             "Pela los huevos y córtalos en rodajas.",
//             "Sirve el melón, los huevos y la Nutella juntos en un plato.",
//             "Disfruta!"
//         ]
//     }
// }
