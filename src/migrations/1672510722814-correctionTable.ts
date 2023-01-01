import { MigrationInterface, QueryRunner } from "typeorm";

export class correctionTable1672510722814 implements MigrationInterface {
    name = 'correctionTable1672510722814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "soId" TO "sold"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "sold" TO "soId"`);
    }

}
