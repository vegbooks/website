import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/03/you-are-enough.jpg",
    "alt": "You Are Enough: A Book About Inclusion",
    "href": "/media/2021/03/you-are-enough.jpg",
    "width": 328,
    "height": 328,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "https://www.indiebound.org/book/9781338630749",
            "external": true,
            "children": [
              "YOU ARE ENOUGH"
            ]
          }
        ]
      },
      " is an inspirational and encouraging picture book inspired by Sofia Sanchez, a young girl with Down Syndrome. Written by Margaret O’Hair, who has a series with Sofia, the book is a first-person narrative from Sofia’s point-of-view. After sharing a short history of how Sofia arrived to the USA from Ukraine, sharing that she and one of her brothers have Down Syndrome, Sofia as the narrator launches into the thrust of the book: We are all beautiful, just as we are."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Being different, being unique, and being the star of your own story is emphasized again and again without feeling repetitive or mundane. The book acknowledges that sometimes being different can be scary to some people, and that can make someone feel lonely. Sofia enthusiastically encourages readers to be stronger than their fears and to have courage when trying something new. Each page contains supportive mantras for readers who are doubtful or unsure of themselves. “You are just right exactly as you are,” “Be YOU wherever you are. If people stop and stare, just keep going!” and “Never say no to being yourself” are just a few examples."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The joyful pictures by illustrator Sofia Cardoso show children of all abilities, races, gender identities, religions, and interests, emphasizing the “Different is Beautiful!” message. Two children are shown with vitiligo, and another child who is an amputee uses crutches. Characters who are blind have a cane and a seeing eye dog. Different body types are represented as are children using wheelchairs, wearing hijab, wearing glasses, and one girl with albinism. The diversity extends to the adults depicted as well."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338630749",
        "external": true,
        "children": [
          "YOU ARE ENOUGH: A Book About Inclusion"
        ]
      },
      " will be a picture book children will return to whenever they need a pick-me-up after (or before!) a difficult day. Recommended for ages 3+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
