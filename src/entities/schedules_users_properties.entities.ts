import { timeStamp } from "console";
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  CreateDateColumn,
  Timestamp,
} from "typeorm";
import Properties from "./properties.entites";
import { User } from "./user.entities";

@Entity("schedules_users_properties")
class SchedulesUsersProperties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "date" })
  hour: string;

  @ManyToOne(() => User, (user) => user.schedules)
  user: string;

  @ManyToOne(() => Properties, (properties) => properties.schedules)
  property: string;
}

export default SchedulesUsersProperties;
