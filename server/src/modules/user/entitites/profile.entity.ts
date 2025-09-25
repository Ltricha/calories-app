import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {

    @PrimaryColumn()
    id: number;

    @OneToOne(() => User)
    @JoinColumn({ name: "user_email" })
    user: User;

    @Column({ name: "first_name" })
    firstName: string;

    @Column({ name: "last_name" })
    lastName: string;

    @Column()
    age: number;

    @Column()
    sex: string;

    @Column()
    height: number;

    @Column()
    weight: number;
}
