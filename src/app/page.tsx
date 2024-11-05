import { createDb } from "../lib/createDb"; // const db = createDb();
import Link from "next/link";

export default async function Home() {
  const db = createDb();

  const posts = await db
    .selectFrom("posts")
    .selectAll()
    .orderBy("createdAt desc")
    .execute();

  return (
    <div>
      {posts.map((p) => (
        <div key={p.id} className="card bg-base-100 w-96 drop-shadow-md">
          <Link href={`/post/${p.id}`}>
            <div className="card-body">
              <p>{p.content}</p>
              <p>{new Date(p.createdAt).toString()}</p>
              <p>
                <Link href={`/user/${p.userId}`}>
                  {p.userId}
                  {p.userId === 1 ? " *" : ""}
                </Link>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
