-- CreateTable
CREATE TABLE "Interval" (
    "id" TEXT NOT NULL,
    "dateFrom" TIMESTAMP(3) NOT NULL,
    "dateTo" TIMESTAMP(3) NOT NULL,
    "mocksCount" INTEGER NOT NULL,
    "isPublic" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MockType" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IntervalToMockType" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IntervalToMockType_AB_unique" ON "_IntervalToMockType"("A", "B");

-- CreateIndex
CREATE INDEX "_IntervalToMockType_B_index" ON "_IntervalToMockType"("B");

-- AddForeignKey
ALTER TABLE "_IntervalToMockType" ADD FOREIGN KEY ("A") REFERENCES "Interval"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IntervalToMockType" ADD FOREIGN KEY ("B") REFERENCES "MockType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
