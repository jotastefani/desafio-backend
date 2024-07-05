-- CreateTable
CREATE TABLE "sports_activity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "kilometer" DECIMAL NOT NULL,
    "effort" INTEGER NOT NULL
);
