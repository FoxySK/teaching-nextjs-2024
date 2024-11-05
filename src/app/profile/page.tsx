import Link from "next/link";
import { createDb } from "../../lib/createDb";

export default async function UserProfile() {
  const db = createDb();

  const user = await db
    .selectFrom("users")
    .selectAll()
    .where("id", "=", 1)
    .executeTakeFirstOrThrow();

  return (
    <div className="card bg-base-100 w-96 drop-shadow-md">
      <div className="card-body">
        <p>{user.id}</p>
        <p>{user.email}</p>
        <p>{user.username}</p>
        <p>{user.displayName}</p>
        <Link href="/profile/posts">My Posts</Link>
      </div>
    </div>
  );
}
