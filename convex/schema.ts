import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  podcasts: defineTable({
    user: v.id("users"),
    podcastTitle: v.string(),
    podcastDescritpion: v.string(),
    audioUrl: v.optional(v.string()),
    audiaStorageId: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    imageStorageId: v.optional(v.string()),
    author: v.string(),
    authorId: v.string(),
    authorImageUrl: v.string(),
    voivePrompt: v.string(),
    imagePrompt: v.string(),
    voiveType: v.string(),
    audioDuration: v.number(),
    views: v.number(),
  })
    .searchIndex("search_author", { searchField: "author" })
    .searchIndex("search_title", { searchField: "podcastTitle" })
    .searchIndex("search_body", { searchField: "podcastDescritpion" }),
  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    name: v.string(),
  }),
});
