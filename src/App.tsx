import CategoryDisplay from "./components/CategoryDisplay";
import { useQuery } from "urql";
import { GetCategoriesDocument } from "./graphql/generated";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";


function PublicPage() {
  const [results] = useQuery({
    query: GetCategoriesDocument,
  });

  return (
    <>
      <div>
        <LoginButton />
        <LogoutButton />
        <UserProfile />
      </div>
      <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
        {results.data?.categories.map((category, i) => (
          <CategoryDisplay category={category} key={i} />
        ))}
      </div>
    </>
  );
}

function ProtectedPage() {
  return (
    <>
      <div className="flex flex-row">
        <h1 className="basis-3/4 text-sm text-gray-800 font-bold px-4">
          Protected page
        </h1>
      </div>
    </>
  );
}

function App() {
  return <PublicPage />;
}

export default App;
