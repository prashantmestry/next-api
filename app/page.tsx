import Header from "./__component/Header";
import UserDetails from "./users/page";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-2 bg-slate-100 ">
        <UserDetails />

        <div className="flex ">
          {[1, 2].map((item) => {
            return (
              <div
                key={item}
                className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl my-8 mr-4"
              >
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img
                      className="h-28 w-full object-cover md:h-full md:w-28"
                      src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                      Company retreats
                    </div>
                    <a
                      href="#"
                      className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
                    >
                      Incredible accommodation for your team
                    </a>
                    <p className="mt-2 text-gray-500">
                      Looking to take your team away on a retreat to enjoy
                      awesome food and take in some sunshine? We have a list of
                      places to do just that.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Header />
    </main>
  );
}
