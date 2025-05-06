CREATE TABLE "carImages" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "carImages_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"image_url" varchar NOT NULL,
	"carListingId" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "features" json;--> statement-breakpoint
ALTER TABLE "carImages" ADD CONSTRAINT "carImages_carListingId_users_id_fk" FOREIGN KEY ("carListingId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;