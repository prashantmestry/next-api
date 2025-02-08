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
    <div className="flex justify-between ">
      <UserList />
      <NewUserForm />
    </div>
  );
};

export default UserDetails;
