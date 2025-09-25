import { userInfoDTO } from "../dto/user-info.dto"
import { User } from "../entitites/user.entity"



export class UserMapper {


  public toUserInfoDTO(user: User) {
    return new userInfoDTO(
      user.email,
      user.profile.firstName,
      user.profile.lastName,
      user.profile.sex,
      user.profile.age,
      user.profile.height,
      user.profile.weight
    )
  }

}