import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2018/12/the-truth-about-elephants.jpg",
    "alt": "The Truth About Elephants",
    "width": 242,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "The tagline for Maxwell Eaton’s collection of ",
      {
        "type": "emphasis",
        "children": [
          "The Truth About…"
        ]
      },
      "books is “Seriously Funny Facts About Your Favorite Animals,” and it proves itself true throughout the 32 pages of the latest installment: ",
      {
        "type": "link",
        "href": "https://us.macmillan.com/books/9781626726697",
        "external": true,
        "children": [
          "THE TRUTH ABOUT ELEPHANTS"
        ]
      },
      ". Aimed at ages 4-8, the illustrations are colorful, funny, and detailed enough to both entertain and inform. As promised on the cover, there really is tons of information about elephants in the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Eaton takes readers through elephant origins, the differences between Asian and African elephants, body parts (did you know elephants have just four teeth?), the make-up of herds, and predators and defenses. All of this information is shared with humor through clever visuals and funny side-notes sprinkled on each page."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book addresses threats posed by humans as well, including trophy hunting, the clearing of elephant habitats, and development of buildings and roads that slice through elephant land and paths. The threats, both human and non-human, are presented in an age-appropriate manner in both language and illustration."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Truth About Elephants"
        ]
      },
      " is a wonderful book for children interested in elephants or animals of all kinds. The ",
      {
        "type": "link",
        "href": "http://maxwelleaton.com/books/",
        "external": true,
        "children": [
          "three earlier books in this series"
        ]
      },
      ", focused on bears, hippos, and dolphins, share facts in the same humorous and clever manner. Highly recommended for ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
