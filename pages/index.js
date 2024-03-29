import Head from "next/head";
import { Feed } from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import InputModal from "../components/InputModal";
import { inputModalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

export default function Home(providers) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(inputModalState);

  if (!session) return <Login providers={providers} />;

  return (
    <div className="">
      <Head>
        <title>Home / Twitter</title>
        <link rel="icon" href="/twitter-icon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
        // trendingResults={trendingResults}
        // followResults={followResults}
        />

        {isOpen && <InputModal />}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      // trendingResults,
      // followResults,
      providers,
      session,
    },
  };
}
