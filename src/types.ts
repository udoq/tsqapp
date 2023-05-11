// src/types.ts
import type { GetCategoriesQuery } from "./graphql/generated";

export type Course = GetCategoriesQuery["categories"][0]["courses"][0];
export type Category = GetCategoriesQuery["categories"][0];
