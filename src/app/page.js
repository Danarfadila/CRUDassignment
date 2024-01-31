import AllNote from "@/components/AllNote";
import Box from "@/components/Box";

import pageStyles from "../styles/page.module.css";

export const dynamic = "force-dynamic";

async function getData() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/oi5gfMAyNOoR");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getData();
  return (
    <div>
      <div className={pageStyles.pageLayout}>
        <div className={pageStyles.heroLayout}>
          <p className={pageStyles.heroText}>What's on your mind?</p>
        </div>
        <Box />
        <AllNote data={data} />
      </div>
    </div>
  );
}
