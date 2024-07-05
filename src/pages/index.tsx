import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
    <>
      {/* 子要素の高さに応じて変更できるようにする */}
      {/* もしくはレスポンス対応 */}
      <div className="h-[600px]">
        <HeroImage />
      </div>
      <div>
        <p>商品一覧</p>
      </div>
    </>
  );
}
