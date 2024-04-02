import BarChart from "./components/BarChart";
import Basics from "./components/Basics";

export default function Home() {
  const data = [20, 25, 30, 45, 60];
  return (
    <main>
      Hello
      {/* <BarChart /> */}
      <Basics data={data} />
    </main>
  );
}
