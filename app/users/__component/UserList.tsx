"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
//
type UserProps = {
  email: string;
  username: string;
  password: string;
  _id: number;
};

const UserList = () => {
  const [users, setUsers] = useState<UserProps[]>();
  const [error, setError] = useState<string>();

  const fetchUsers = () => {
    let apiUrl = `${process.env.API_DOMAIN}/users`;
    axios
      .get(apiUrl)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError("Error in getting user list");
      });
  };

  //
  const deleteUser = (uId: number) => {
    let apiUrl = `${process.env.API_DOMAIN}/users${uId}`;
    axios
      .delete(apiUrl)
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
        }
      })
      .catch((err: Error) => {
        console.log("Error : ", err.message);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="flex flex-1 flex-col mr-8">
      <h3 className="text-lg mb-2">User List</h3>
      {(users || []).map((user: UserProps) => {
        return (
          <div
            key={user._id}
            className="border-b border-slate-300 pb-1 flex justify-between"
          >
            <div>
              {user.username}
              {user.email}
            </div>
            <div>
              <button className="text-sm" onClick={() => deleteUser(user._id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
