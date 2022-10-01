import inComm from './inComm'
import { faker } from '@faker-js/faker'


const inFaker = {}

inFaker.date = (): Date => faker.date.recent()

inFaker.email = (): string => faker.internet.email()

inFaker.id = (): string => faker.random.numeric(10)

inFaker.img = (): string => inComm.img(inComm.random(800, 1000), inComm.random(800, 1000))

inFaker.imgName = (name: string): string => inComm.imgName(name ?? inFaker.name())

inFaker.name = (): string => faker.name.fullName()

inFaker.paragraphs = (count: number = 2): string => inComm.array(count).map(faker.lorem.paragraph).join('\n')


export default inFaker
