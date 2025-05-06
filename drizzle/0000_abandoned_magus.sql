CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"listing_title" varchar NOT NULL,
	"original_price" integer,
	"selling_price" integer NOT NULL,
	"category" varchar NOT NULL,
	"condition" varchar,
	"type" varchar NOT NULL,
	"make" varchar NOT NULL,
	"year" integer NOT NULL,
	"drive_type" varchar NOT NULL,
	"transmission" varchar NOT NULL,
	"mileage" integer NOT NULL,
	"location" varchar NOT NULL,
	"description" varchar NOT NULL
);
