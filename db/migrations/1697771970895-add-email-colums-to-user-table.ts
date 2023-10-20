import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailColumsToUserTable1697771970895 implements MigrationInterface {
    name = 'AddEmailColumsToUserTable1697771970895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
