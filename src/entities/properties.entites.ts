import { Address } from "cluster";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Addres from "./addresses.entites";
import Categories from "./categories.entities";
import SchedulesUsersProperties from "./schedules_users_properties.entities";

@Entity("properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "boolean", default: false })
  sold: boolean;

  @Column({ type: "decimal" })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

 
  @OneToOne(() => Addres)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Categories, (categories) => categories.properties)
  category: Categories;

  @OneToMany(
    () => SchedulesUsersProperties,
    (schedules_users_properties) => schedules_users_properties.property
  )
  schedules: SchedulesUsersProperties[];
}

export default Properties;
