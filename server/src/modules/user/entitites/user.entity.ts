import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Session } from 'src/modules/session/entities/session.entity';

@Entity()
export class User {
    @PrimaryColumn()
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToOne((type) => Session, (session) => session.user)
    public session: Session;

    @OneToOne((type) => Profile, (profile) => profile.user)
    public profile: Profile;
}
