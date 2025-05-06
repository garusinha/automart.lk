import { pgTable, serial, varchar, integer, json } from "drizzle-orm/pg-core";

export const CarListing = pgTable("carListing", {
  id: serial("id").primaryKey().notNull(),
  listingTitle: varchar("listingTitle").notNull(),
  originalPrice: integer("originalPrice"),
  sellingPrice: integer("sellingPrice").notNull(),
  category: varchar("category").notNull(),
  condition: varchar("condition"),
  type: varchar("type").notNull(),
  make: varchar("make").notNull(),
  year: integer("year").notNull(),
  driveType: varchar("driveType").notNull(),
  transmission: varchar("transmission").notNull(),
  mileage: integer("mileage").notNull(),
  location: varchar("location").notNull(),
  contact: varchar("contact").notNull().default("077-1234567"),
  description: varchar("description").notNull(),
  features: json("features").default([]),
  createdBy: varchar("createdBy").notNull(),
  userName: varchar("userName").notNull().default("Niketha"),
  userImageUrl: varchar("userImageUrl"),
  postedOn: varchar("postedOn"),
});

export const CarImages = pgTable("carImages", {
  id: serial("id").primaryKey(),
  imageUrl: varchar("imageUrl").notNull(),
  carListingId: integer("carListingId")
    .notNull()
    .references(() => CarListing.id),
});
