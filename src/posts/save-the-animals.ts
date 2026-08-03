import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/9780763645014.jpg",
    "alt": "Let’s Save the Animals",
    "href": "/media/2010/05/9780763645014.jpg",
    "width": 214,
    "height": 194,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“I wish we could save all the endangered animals in the world!” So begins this creative book by ",
      {
        "type": "link",
        "href": "http://www.francesbarry.com/",
        "children": [
          "Frances Barry"
        ]
      },
      ". Bold, simple sentences with compelling action verbs (rhinos wallowing, penguins skidding, turtles scuttling) describe 10 endangered animals the author would save. Additional sentences in smaller, unobtrusive text highlight a bit about why each animal is endangered. (These sentences could be skipped, if desired, for younger audiences.) Textures, colors and patterns in the collage illustrations help breathe life into the story, and the flaps cleverly reveal two views of each animal in her habitat."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The ending of the book turns more somber, using stark black and white (and simple silhouettes of the animals) to emphasize: “Let’s save them all before they are…gone forever.” The book then offers a few simple actions young people can take to help animals, such as “Don’t litter” or “Let animals sleep, feed, and play on their own.” A great title for nurturing respect for animals and cultivating positive action in children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
