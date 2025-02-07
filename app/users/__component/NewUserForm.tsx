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

const NewUserForm = () => {
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
    const body = JSON.stringify(userInfo);
    axios
      .post("http://localhost:3000/api/users", body)
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
    <div className="flex flex-1 flex-col">
      <h3 className="text-lg mb-2">Create New User</h3>
      <div className="flex">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="p-2 w-[400px]"
              value={userInfo.email}
              onChange={updateInfo}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Enter User name"
              className="p-2 w-[400px]"
              value={userInfo.username}
              onChange={updateInfo}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="p-2 w-[400px]"
              value={userInfo.password}
              onChange={updateInfo}
            />
          </div>
          <div>
            <button
              className="bg-slate-300 border-slate-300 h-[40px] px-3 py-2 mr-4"
              type="submit"
            >
              Submit
            </button>
            <button
              className="border border-slate-300 h-[40px] px-3"
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

export default NewUserForm;
