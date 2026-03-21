import clientPromise from "@/lib/mongodb";
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return Response.json({ error: "No token" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);

    const client = await clientPromise;
    const db = client.db();

    const user = await db
      .collection("users")
      .findOne({ _id: decoded.id });

    return Response.json({ user });
  } catch {
    return Response.json({ error: "Invalid token" }, { status: 401 });
  }
}