import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";
import Properties from "./properties.entites";

@Entity("categories")
class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120, unique: true })
  name: string;

  @OneToMany(() => Properties, (properties) => properties.category)
  properties: Properties[];
}

export default Categories;

// @OneToMany(() => Properties, (properties) => properties.category)
// propeties:Properties[]
