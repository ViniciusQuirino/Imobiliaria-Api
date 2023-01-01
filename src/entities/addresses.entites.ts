import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import Properties from "./properties.entites";

@Entity("addreses")
class Addres {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60 })
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 15, nullable: true })
  number: string;

  @Column({ length: 60 })
  city: string;

  @Column({ length: 30 })
  state: string;

}


export default Addres