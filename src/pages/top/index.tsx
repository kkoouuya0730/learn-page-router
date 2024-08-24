import Layout from "@/components/layouts/Layout";

export default function Top() {
  return (
    <>
      <div className="flex items-center justify-center">
        <p>TOP PAGE</p>
      </div>
    </>
  );
}

Top.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
