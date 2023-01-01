import { MigrationInterface, QueryRunner } from "typeorm";

export class correctionn1672528773509 implements MigrationInterface {
    name = 'correctionn1672528773509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ALTER COLUMN "date" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ALTER COLUMN "hour" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ALTER COLUMN "hour" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ALTER COLUMN "date" DROP DEFAULT`);
    }

}
