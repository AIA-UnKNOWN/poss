import { MigrationInterface, QueryRunner } from "typeorm"

/**
 * This migration inserts roles data that are required for the app
 */
export class GenerateRoles1684364167268 implements MigrationInterface {
    
    roles = ['customer', 'admin', 'cashier', 'employee'];

    public async up(queryRunner: QueryRunner): Promise<void> {
        Promise.all(
            this.roles.map(
                role => queryRunner.query(`INSERT INTO roles (name) VALUES ('${role}')`)
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        Promise.all(
            this.roles.map(
                role => queryRunner.query(`DELETE FROM roles WHERE name = ${role}`)
            )
        );
    }

}
