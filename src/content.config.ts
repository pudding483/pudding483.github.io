import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// 定義了整個 blog 文章可以使用的 frontmatter 結構和類型
const blog = defineCollection({
  // defineCollection 是 Astro Content 的 API ，用來定義一個 content 集合
  loader: glob({
    // 忽略掉以 "_" 開頭的檔案，因為通常是草稿，然後不限制開頭路徑
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: z.object({
    // zod 是一個 TypeScript 的 schema 驗證庫，可以定義內容的結構和類型
    title: z.string(),
    description: z.string(),
    keywords: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    excerpt: z.string().optional(),
    comment: z.boolean().optional(),
    outdated: z.boolean().optional(),
    toc: z.boolean().optional(),
    author: z.string().optional(),
    sponsor: z.boolean().optional(),
    copyright: z.boolean().optional(),
    share: z.boolean().optional(),
  }),
});

export const collections = { blog };
// 最後匯出，可以在其他檔案用 getCollection('blog') 來呼叫
