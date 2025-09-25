import { User } from 'src/modules/user/entitites/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Session {

  @PrimaryColumn({ name: "id", type: "varchar" })
  public id: string;

  @Column({ name: "expiry_date", type: "varchar" })
  public expiryDate: number;


  @OneToOne(() => User, (user) => user.session, { cascade: true })
  @JoinColumn({ name: 'user_email' })

  user: User;
}
