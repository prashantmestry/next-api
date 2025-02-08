"use client";
import axios from "axios";
//
import { ChangeEvent, FormEvent, useState } from "react";

interface UserT {
  email: string;
  username: string;
  password: string;
}

const dummyUser = {
  email: "",
  username: "",
  password: "",
};

const UserForm = () => {
  const [userInfo, setUserInfo] = useState<UserT>(dummyUser);

  const updateInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/users`;
    const body = JSON.stringify(userInfo);
    axios
      .post(apiUrl, body)
      .then((res) => {
        if (res.status === 200 && res?.data?.message === "User is created") {
          alert("User is created successfully");
          setUserInfo(dummyUser);
        } else {
          alert("Problem in creating new user");
        }
      })
      .catch((err) => {
        console.log("Error", err.message);
        alert("Error : " + err.message);
      });
  };

  const clearHandler = () => {
    setUserInfo(dummyUser);
  };

  return (
    <div className="flex  flex-col text-center">
      <h3 className="text-lg mb-2">Create New User</h3>
      <div className="flex justify-center">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="p-2 w-[400px] border"
              value={userInfo.email}
              onChange={updateInfo}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Enter User name"
              className="p-2 w-[400px] border"
              value={userInfo.username}
              onChange={updateInfo}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="p-2 w-[400px] border"
              value={userInfo.password}
              onChange={updateInfo}
            />
          </div>
          <div className="mt-4">
            <button
              className="text-sm bg-slate-300 hover:bg-slate-400 rounded-sm px-4 py-1 mr-4  font-medium"
              type="submit"
            >
              Submit
            </button>
            <button
              className="text-sm border hover:bg-slate-300 rounded-sm px-4 py-1 font-medium"
              type="button"
              onClick={clearHandler}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
