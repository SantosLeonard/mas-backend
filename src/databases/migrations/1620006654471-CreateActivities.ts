import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivities1620006654471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"activities",
                columns:[
                    {name:"id",type:"varchar",isPrimary: true},
                    {name:"name",type:"varchar"},
                    {name:"activity_date",type:"timestamp"},
                    {name:"course_unit_id",type:"integer"},
                    {name:"created_at",type:"timestamp",default:"now()"}
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
