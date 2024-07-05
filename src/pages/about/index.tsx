import Layout from "@/components/Layout";
import { useBearStore } from "@/store/store";

export default function About() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore(
    (state) => state.increasePopulation
  );
  const removeAllBears = useBearStore(
    (state) => state.removeAllBears
  );
  return (
    <>
      <h1>About Page 2 {bears}</h1>
      <button onClick={increasePopulation}>one up</button>
      <br></br>
      <button onClick={removeAllBears}>clear</button>
    </>
  );
}

About.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
