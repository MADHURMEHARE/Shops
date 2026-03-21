import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { username, password, role } = await req.json();

  const client = await clientPromise;
  const db = client.db();

  const existing = await db.collection("users").findOne({ username });

  if (existing) {
    return Response.json({ error: "User exists" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  await db.collection("users").insertOne({
    username,
    password: hashed,
    role: role || "user",
  });

  return Response.json({ message: "User created" });
}