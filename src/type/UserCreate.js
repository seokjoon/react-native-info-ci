import type { User } from './User'
import inComm from '../helper/inComm'
import inFaker from '../helper/inFaker'

const UserCreate = (): User => {
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

export default UserCreate
