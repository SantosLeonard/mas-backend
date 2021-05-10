import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1620607154858 implements MigrationInterface {

        public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table({
                    name:"users",
                    columns:[
                        {name:"id",type:"varchar",isPrimary: true},
                        {name:"name",type:"varchar"},
                        {name:"description",type:"varchar"},
                        {name:"created_at",type:"timestamp",default:"now()"}
                    ]
                })
            );
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("users")
        }

}
