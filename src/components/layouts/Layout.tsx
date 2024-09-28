import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="bg-amber-50 flex flex-col min-h-screen">
      <Header />
      <main className="w-3/5 mx-auto my-10 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
