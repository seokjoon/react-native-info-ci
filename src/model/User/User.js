import inComm from '../../helper/inComm'
import inFaker from '../../helper/inFaker'
import type { UserType } from './UserType'

const User = {}

User.create = (): UserType => {
  return {
    count: {
      foo: inComm.random(10, 100)
    },
    email: inFaker.email(),
    id: inFaker.id(),
    img: inFaker.img(),
    imgName: inFaker.imgName(),
    name: inFaker.name(),
  }
}

export default User
