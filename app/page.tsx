import Header from "./__component/Header";
import UserDetails from "./users/page";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-2 bg-slate-100">
        <UserDetails />
      </div>
      <Header />
    </main>
  );
}
