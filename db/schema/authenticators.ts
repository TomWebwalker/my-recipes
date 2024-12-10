import {
    boolean,
    int,
    mysqlTable,
    varchar,
} from "drizzle-orm/mysql-core";
import { primaryKey } from "drizzle-orm/mysql-core/primary-keys";
import { users } from "./users";

export const authenticators = mysqlTable(
    "authenticator",
    {
        credentialID: varchar("credentialID", { length: 255 }).notNull().unique(),
        userId: varchar("userId", { length: 255 })
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
        credentialPublicKey: varchar("credentialPublicKey", {
            length: 255,
        }).notNull(),
        counter: int("counter").notNull(),
        credentialDeviceType: varchar("credentialDeviceType", {
            length: 255,
        }).notNull(),
        credentialBackedUp: boolean("credentialBackedUp").notNull(),
        transports: varchar("transports", { length: 255 }),
    },
    (authenticator) => ({
        compositePk: primaryKey({
            columns: [authenticator.userId, authenticator.credentialID],
        }),
    })
)

export type Authenticator = typeof authenticators.$inferSelect;
