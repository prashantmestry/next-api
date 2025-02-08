"use client";
import React, { useEffect, useState } from "react";
import { BiGroup } from "react-icons/bi";
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
    let apiUrl = process.env.NEXT_PUBLIC_API_URL + "/users";
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
    let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/users${uId}`;
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
    console.log("domain", process.env.NEXT_PUBLIC_API_URL);
    fetchUsers();
  }, []);
  //
  return (
    <div className="flex flex-1 flex-col">
      <h3 className="text-lg mb-2">User List</h3>
      {(users || []).map((user: UserProps) => {
        return (
          <div
            key={user._id}
            className="border-b border-slate-300 hover:bg-slate-200 py-1 px-2 flex justify-between items-center"
          >
            <div className="flex items-center ">
              <BiGroup className="mr-4" />
              {user.username}
              {user.email}
            </div>
            <div>
              <button
                className="text-sm bg-slate-300 hover:bg-slate-400 rounded-lg px-4 py-1"
                onClick={() => deleteUser(user._id)}
              >
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
