import UserList from "./__component/UserList";
import UserForm from "./__component/UserForm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "User Detail",
  description: "Create Update Delete User data",
};

const UserDetails = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="basis-[40%]">
        <UserForm />
      </div>
      <div className="basis-[60%]">
        <UserList />
      </div>

      <div className="flex ">
        {[1, 2].map((item) => {
          return (
            <div
              key={item}
              className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl my-8 mr-4"
            >
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    className="h-28 w-full object-cover md:h-full md:w-28"
                    src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
                    alt="Modern building architecture"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                    Company retreats
                  </div>
                  Link
                  <Link
                    href="#"
                    className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
                  >
                    Incredible accommodation for your team
                  </Link>
                  <p className="mt-2 text-gray-500">
                    Looking to take your team away on a retreat to enjoy awesome
                    food and take in some sunshine? We have a list of places to
                    do just that.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDetails;
