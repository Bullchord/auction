import Head from "next/head";
import Layouts from "../components/Layouts";
import Market from "../components/MarketPlace/Market";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BullChord Music</title>
        <meta
          name="BullChord musicverse"
          content="Create, listen, earn, sell"
        />
      </Head>
      <div className="bg-black">
        <Layouts>
          <Market />
        </Layouts>
      </div>
    </div>
  );
}
