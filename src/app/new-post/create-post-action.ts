"use server";

import { CamelCasePlugin, Kysely } from "kysely";
import { DB } from "../../lib/db-types";
import { dialect } from "../../lib/db";
import { redirect } from "next/navigation";
import { createDb } from "../../lib/createDb";

export async function createPost(content: string) {
  console.log(`Creating post with text: ${content}`);

  const db = createDb();

  const newPost = await db
    .insertInto("posts")
    .values({
      userId: 1,
      content: content,
      createdAt: new Date().getTime(),
    })
    .returningAll()
    .executeTakeFirstOrThrow();

  console.log(newPost);

  redirect(`/post/${newPost.id}`); //redirect to newly created post
}
