import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivities1620607168858 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"activities",
                columns:[
                    {name:"id",type:"varchar",isPrimary: true},
                    {name:"name",type:"varchar"},
                    {name:"activity_date",type:"timestamp"},
                    {name:"course_unit_id", type:"integer"},
                    {name:"created_at",type:"timestamp",default:"now()"}
                ],
                foreignKeys: [
                    {
                        name: 'ActivityCourseUnit',
                        referencedTableName: 'course_units',
                        referencedColumnNames: ['id'],
                        columnNames: ['course_unit_id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activities")
    }

}
