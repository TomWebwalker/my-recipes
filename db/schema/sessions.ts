import { mysqlTable, timestamp } from "drizzle-orm/mysql-core";
import { varchar } from "drizzle-orm/mysql-core/columns/varchar";
import { users } from "./users";

export const sessions = mysqlTable("session", {
    sessionToken: varchar("sessionToken", { length: 255 }).primaryKey(),
    userId: varchar("userId", { length: 255 })
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
})

export type Session = typeof sessions.$inferSelect;