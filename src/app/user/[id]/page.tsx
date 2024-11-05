import { CamelCasePlugin, Kysely } from "kysely";
import { createDb } from "../../../lib/createDb";

type Props = { params: { id: string } };

export default async function PostDetail(props: Props) {
  console.log(`PostDetail id: ${props.params.id} `);

  const id = parseInt(props.params.id);

  if (isNaN(id)) {
    return <div>Error: Invalid ID</div>;
  }

  const db = createDb();

  const userInfo = await db
    .selectFrom("users")
    .selectAll("users")
    .where("id", "=", id)
    .executeTakeFirst();

  if (userInfo == null) {
    return <div>Error: User not found</div>;
  }

  return (
    <div className="card bg-base-100 w-96 drop-shadow-md">
      <div className="card-body">
        <div style={{ whiteSpace: "break-spaces" }}>
          <p>user: {userInfo.displayName} </p>
          <p>user id: {userInfo.id}</p>
        </div>
      </div>
    </div>
  );
}
