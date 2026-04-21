CREATE TABLE "waitlist_signups" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(320) NOT NULL,
	"source" varchar(64),
	"user_agent" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "waitlist_signups_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX "waitlist_signups_created_at_idx" ON "waitlist_signups" USING btree ("created_at");