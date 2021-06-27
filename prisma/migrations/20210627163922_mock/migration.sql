-- CreateTable
CREATE TABLE "Mock" (
    "id" SERIAL NOT NULL,
    "typeId" INTEGER NOT NULL,
    "primaryId" TEXT NOT NULL,
    "secondaryId" TEXT NOT NULL,
    "dateFrom" TIMESTAMP(3) NOT NULL,
    "dateTo" TIMESTAMP(3) NOT NULL,
    "primaryConfirmAt" TIMESTAMP(3) NOT NULL,
    "secondaryConfirmAt" TIMESTAMP(3) NOT NULL,
    "primaryDeclineAt" TIMESTAMP(3) NOT NULL,
    "secondaryDeclineAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mock" ADD FOREIGN KEY ("typeId") REFERENCES "MockType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mock" ADD FOREIGN KEY ("primaryId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mock" ADD FOREIGN KEY ("primaryId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
