/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as campuses from "../campuses.js";
import type * as classes from "../classes.js";
import type * as cron from "../cron.js";
import type * as curriculums from "../curriculums.js";
import type * as http from "../http.js";
import type * as lessons from "../lessons.js";
import type * as livekit from "../livekit.js";
import type * as migration from "../migration.js";
import type * as organizations from "../organizations.js";
import type * as permissions from "../permissions.js";
import type * as roleAssignments from "../roleAssignments.js";
import type * as schedule from "../schedule.js";
import type * as schools from "../schools.js";
import type * as seed from "../seed.js";
import type * as seedCPCA from "../seedCPCA.js";
import type * as student from "../student.js";
import type * as types from "../types.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  campuses: typeof campuses;
  classes: typeof classes;
  cron: typeof cron;
  curriculums: typeof curriculums;
  http: typeof http;
  lessons: typeof lessons;
  livekit: typeof livekit;
  migration: typeof migration;
  organizations: typeof organizations;
  permissions: typeof permissions;
  roleAssignments: typeof roleAssignments;
  schedule: typeof schedule;
  schools: typeof schools;
  seed: typeof seed;
  seedCPCA: typeof seedCPCA;
  student: typeof student;
  types: typeof types;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
