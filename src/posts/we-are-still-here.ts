import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/03/we-are-still-here.jpg",
    "alt": "We Are Still Here!",
    "href": "/media/2021/03/we-are-still-here.jpg",
    "width": 272,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "This non-fiction picture book, ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781623541927",
        "external": true,
        "children": [
          {
            "type": "strong",
            "children": [
              "WE ARE STILL HERE!"
            ]
          }
        ]
      },
      ", is subtitled ",
      {
        "type": "emphasis",
        "children": [
          "Native American Truths Everyone Should Know,"
        ]
      },
      "and the book makes sure the reader knows them by the end. Written by Traci Sorell in the structure of elementary student presentations, the book educates us on topics often glossed over in elementary school and beyond. Each section concludes with the refrain, “We Are Still Here!” reminding us that this history is still very much alive and unfolding."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From the first page, unfair policies and broken treaties are introduced and discussed. Each topic is written clearly and with the late elementary reader in mind. Policies like Assimilation, Allotment, Relocation precede the later sections of Tribal Activism, Self-Determination, and the fight for Religious Freedom. The end result ensures that children will feel hopeful and empowered to share what they have learned."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations by Frané Lessac compliment the text by adding not just visualization but meaning. The facing pages focused on Termination, for example, include text that discuss betrayal of treaties by the US Government, and the illustration contrasts Menominee Nation land for sale, and presumed purchasers fishing from a rowboat, as members of the Menominee hold signs demanding justice. The page about Language Revival shows a classroom of children learning their native languages, and the Cherokee Syllabary, along with Sequoyah, its inventor, on the board."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The details within the pages are supplemented by additional information on the 12 topics, including a timeline and glossary. A caregiver unfamiliar with the topics will appreciate reading the end pages in the book prior to sharing it with a child; there are sure to be questions."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781623541927",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "We Are Still Here!"
            ]
          }
        ]
      },
      " is highly recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
