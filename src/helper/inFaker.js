import inTest from './inTest'
import { faker } from '@faker-js/faker'


const inFaker = {}

inFaker.date = (): Date => faker.date.recent()

inFaker.email = (): string => faker.internet.email()

inFaker.id = (): string => faker.random.numeric(10)

inFaker.img = (): string => inTest.img(inTest.random(800, 1000), inTest.random(800, 1000))

inFaker.imgName = (name: string): string => inTest.imgName(name ?? inFaker.name())

inFaker.name = (): string => faker.name.fullName()

inFaker.paragraphs = (count: number = 2): string => inTest.array(count).map(faker.lorem.paragraph).join('\n')


export default inFaker
