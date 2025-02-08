import React from "react";
import UserList from "./__component/UserList";
import NewUserForm from "./__component/NewUserForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Detail",
  description: "Create Update Delete User data",
};

const UserDetails = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="basis-[40%]">
        <NewUserForm />
      </div>
      <div className="basis-[60%]">
        <UserList />
      </div>
    </div>
  );
};

export default UserDetails;
