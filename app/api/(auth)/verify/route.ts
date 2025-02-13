import jwt from "jsonwebtoken";
import { MdToken } from "react-icons/md";

export const POST = async (request: Request) => {
  try {
    const { token } = await request.json(); // Get token from request body

    if (!token) {
      return new Response(JSON.stringify({ error: "Token is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Verify the JWT token
    const secret = process.env.JWT_SECRET || "your_secret_key";
    const decoded = jwt.verify(token, secret);

    return new Response(
      JSON.stringify({ message: "verified", userData: decoded }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid or expired token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
};
