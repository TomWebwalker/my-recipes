import { mysqlTable, primaryKey } from "drizzle-orm/mysql-core";
import { timestamp } from "drizzle-orm/mysql-core/columns/timestamp";
import { varchar } from "drizzle-orm/mysql-core/columns/varchar";

export const verificationTokens = mysqlTable(
    "verificationToken",
    {
        identifier: varchar("identifier", { length: 255 }).notNull(),
        token: varchar("token", { length: 255 }).notNull(),
        expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (verificationToken) => ({
        compositePk: primaryKey({
            columns: [verificationToken.identifier, verificationToken.token],
        }),
    })
)

export type VerificationToken = typeof verificationTokens.$inferSelect;