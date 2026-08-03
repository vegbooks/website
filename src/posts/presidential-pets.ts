import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/08/presidential-pets-3002.jpg",
    "alt": "Presidential Pets",
    "href": "/media/2012/08/presidential-pets-3002.jpg",
    "width": 215,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We had so much fun reading through a ",
      {
        "type": "link",
        "href": "http://www.charlesbridge.com/",
        "external": true,
        "children": [
          "review copy"
        ]
      },
      " of ",
      {
        "type": "emphasis",
        "children": [
          "Presidential Pets"
        ]
      },
      " by Julie Moberg. Initially, because of the caricaturish drawing style, I didn’t think my kids would like it; they are much more into more child-friendly drawings. I was wrong. Both my three and my five-year-old laughed at the silly drawings, asked questions about why an alligator was in the bathtub, and I think they actually learned a lot about animals and our presidents from the text."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book devotes two pages to each president and the animals he held as pets. For each president, there is a fun rhyme about the president (or his family) and what kind of pet he had. Then there are Presidential Stats, extra facts about the family, and various accomplishments of the president. One of our favorite rhymes is for Abraham Lincoln. It’s the story of the first turkey pardoned for Thanksgiving. It ends with “Jack lived out his days, happy to roam the White House grounds, his permanent home.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veggie parents should be aware that the book does not soften some of the realities of pet ownership. There is mention of Zachary Taylor’s horse having his tail hairs plucked clean as souvenirs, and several pets end up in the zoo after misbehaving. The majority of the pages are about beloved pets as devoted companions. We used the different situations to talk about how we treat and respect animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations by Jeff Albrecht Studios and the text by Julie Moberg are both aimed at ages 8 and up, but younger children can appreciate the rhymes, if not all of the presidential facts. Parents, at least this one, can also learn new things about our presidents as well."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
