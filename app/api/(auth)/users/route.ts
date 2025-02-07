import connect from "@/lib/db";
import User from "@/lib/modals/user";
import { Types } from "mongoose";
import { NextResponse } from "next/server";
const ObjectId = require("mongoose").Types.ObjectId;
//
export const GET = async () => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching users" + error.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const newUser = new User(body);
    await newUser.save();
    return new NextResponse(
      JSON.stringify({ message: "User is created", user: newUser }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error creating user" + error.message, {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { userId, newUsername } = body;
    await connect();

    // case I :  id or username nout found
    if (!userId || !newUsername) {
      new NextResponse(
        JSON.stringify({ message: "Id or Username not found" }),
        { status: 400 }
      );
    }

    // case II : if id is not valid.
    if (!Types.ObjectId.isValid(userId)) {
      new NextResponse(JSON.stringify({ message: "Invalid user id" }), {
        status: 400,
      });
    }

    const updatedUser = await User.findOneAndUpdate(
      {
        _id: new ObjectId(userId),
      },
      {
        username: newUsername,
      },
      {
        new: true,
      }
    );

    // case : III if updated user not found return message
    if (!updatedUser) {
      return new NextResponse(
        JSON.stringify({ message: "User not found in the database" }),
        {
          status: 400,
        }
      );
    }

    // case IV : if user is updated successfully.
    return new NextResponse(
      JSON.stringify({
        message: "User is Updated",
        user: updatedUser,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse("Error in updating user" + error.message, {
      status: 500,
    });
  }
};

// parameter is passed in url params.
export const DELETE = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    //
    if (!userId) {
      new NextResponse(JSON.stringify({ message: "Id not found" }), {
        status: 400,
      });
    }
    //
    if (userId && !Types.ObjectId.isValid(userId)) {
      new NextResponse(JSON.stringify({ message: "Invalid user id" }), {
        status: 400,
      });
    }
    //
    await connect();

    // user is deleted
    const deletedUser = await User.findOneAndDelete(new ObjectId(userId));

    // If user is not able to delete.
    if (!deletedUser) {
      return new NextResponse(
        JSON.stringify({
          message: "User not found in the database",
        }),
        {
          status: 400,
        }
      );
    }

    // response when user delteted
    return new NextResponse(
      JSON.stringify({
        message: "User is Deleted",
        user: deletedUser,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse("Error deleting user" + error.message, {
      status: 500,
    });
  }
};
