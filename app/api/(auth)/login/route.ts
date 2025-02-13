import connect from "@/lib/db";
import User from "@/lib/modals/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

//
export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { email, password } = body;
    await connect();

    if (request.method !== "POST") {
      return new NextResponse("Method not allowed", { status: 500 });
    }

    const user = await User.findOne(
      {
        email: email,
      },
      {
        password: password,
      }
    );

    const payload = {
      email,
      role: "admin",
    };

    const secret = process.env.JWT_SECRET || "your_secret_key";
    const token = jwt.sign(payload, secret, { expiresIn: "5min" });

    return new NextResponse(
      JSON.stringify({ message: "Login successful", token: token }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("No user found" + error.message, {
      status: 500,
    });
  }
};
