import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { password } = body;
  const correctPassword = process.env.PAGE_ACCESS_PASSWORD;

  if (!correctPassword) {
<<<<<<< HEAD
    console.error("PAGE_ACCESS_PASSWORD environment variable is not set");
=======
    console.error('PAGE_ACCESS_PASSWORD environment variable is not set');
>>>>>>> 6e093c82ca0ba41cdf77be171e75324cef2269cd
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }

  if (password === correctPassword) {
    const response = NextResponse.json({ success: true }, { status: 200 });
<<<<<<< HEAD

=======
    
>>>>>>> 6e093c82ca0ba41cdf77be171e75324cef2269cd
    response.headers.set(
      "Set-Cookie",
      cookie.serialize("authToken", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
<<<<<<< HEAD
      }),
=======
      })
>>>>>>> 6e093c82ca0ba41cdf77be171e75324cef2269cd
    );

    return response;
  } else {
    return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
  }
}
