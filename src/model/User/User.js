import inTest from '../../helper/inTest'
import inFaker from '../../helper/inFaker'
import type { UserType } from './UserType'

const User = {}

User.create = (): UserType => {
  return {
    count: {
      foo: inTest.random(10, 100)
    },
    email: inFaker.email(),
    id: inFaker.id(),
    img: inFaker.img(),
    imgName: inFaker.imgName(),
    name: inFaker.name(),
  }
}

export default User
