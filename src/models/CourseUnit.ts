import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';
import { Activity } from './Activity';

class CourseUnit {
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
    @PrimaryColumn()
    readonly id:string;

    @OneToMany(()=> Activity, activity => activity.course_unit)
    activities: Activity[]

    @Column()
    name:string;
    @Column()
    description:string;
    @CreateDateColumn()
    create_at:Date;

}

export {CourseUnit}