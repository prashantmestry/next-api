import React from "react";
import UserList from "./__component/UserList";
import NewUserForm from "./__component/NewUserForm";
const UserDetails = () => {
  return (
    <div className="flex justify-between ">
      <UserList />
      <NewUserForm />
    </div>
  );
};

export default UserDetails;
