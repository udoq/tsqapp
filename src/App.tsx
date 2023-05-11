// src/App.tsx
import CategoryDisplay from "./components/CategoryDisplay";
import CustomerDisplay from "./components/CustomerDisplay";
import { useQuery } from "urql";
import { GetCategoriesDocument } from "./graphql/generated";
import useAuth from "./hooks/useAuth";

function App() {
  const [results] = useQuery({
    query: GetCategoriesDocument,
  });

  const isLogin = useAuth();

  return isLogin ? (
    <CustomerDisplay></CustomerDisplay>
  ) : (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {results.data?.categories.map((category, i) => (
        <CategoryDisplay category={category} key={i} />
      ))}
    </div>
  );
}

export default App;
