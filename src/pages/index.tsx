import Image from "next/image";
import { Inter } from "next/font/google";
import Search from "../components/Search";
import GetRecipeUseCase from "../../domain/recipe/UseCases/GetRecipeUseCase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleOnSearch = async (ingredients: string) => {
    const resp = GetRecipeUseCase.create().execute({ ingredients });
    console.log(resp);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Search onSearch={handleOnSearch} />
      </div>
    </main>
  );
}
