import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

export const db = factory({
  posts: {
    userId: faker.number.int,
    id: primaryKey(faker.number.int),
    title : faker.lorem.slug,
    body: faker.lorem.paragraphs
  },
});
