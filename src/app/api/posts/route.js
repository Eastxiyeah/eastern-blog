import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req) => {
  const url = new URL(req.url);
  const username = url.searchParams.get("username");
  try {
    await connect();

    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (req) => {
  const body = await req.json();

  const newPost = new Post({
    title: body.title,
    content: body.content,
    image: body.image,
    desc: body.desc,
    username: body.username,
  });
  try {
    await connect();

    const post = await newPost.save();

    return new NextResponse(JSON.stringify(post), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};
