/** @type {import("drizzle-kit").Config} */

export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_6hSC4LizQbqA@ep-quiet-grass-a4mnrczd-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require",
  },
};
