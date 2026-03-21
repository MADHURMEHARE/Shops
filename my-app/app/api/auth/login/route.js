import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/auth";

export async function POST(req) {
  const { username, password } = await req.json();

  const client = await clientPromise;
  const db = client.db();

  const user = await db.collection("users").findOne({ username });

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({
    id: user._id,
    role: user.role,
  });

  return Response.json({ token });
}