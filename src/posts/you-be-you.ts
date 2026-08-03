import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/kranz-you-be-you-cover.jpg",
    "alt": "You Be You",
    "href": "/media/2011/11/kranz-you-be-you-cover.jpg",
    "width": 210,
    "height": 185,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Playful and colorful, this sequel to ",
      {
        "type": "emphasis",
        "children": [
          "Only One You"
        ]
      },
      " stars ",
      {
        "type": "link",
        "href": "http://lindakranz.com/",
        "children": [
          "Linda Kranz’s"
        ]
      },
      " bright, vivid “rockfish,” and cleverly incorporates photographs of the ocean into the background. As little rockfish Adri swims home after exploring the ocean, he notices that, “Some fish swim left/some fish swim right/some fish swim in a circle/some fish swim in a line,” and observes colorful fish and playful fish as well as quiet fish and loud fish."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When Adri returns home, he tells his parents what he has learned. They welcome his enthusiasm and confirm his uniqueness in the world with his mother providing the title line, “You be you.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With its universal theme that life is the greatest journey of all as well as its celebration of the differences between all creatures, ",
      {
        "type": "emphasis",
        "children": [
          "You Be You"
        ]
      },
      " offers a positive message to readers of all ages. In addition, parents can share with their children the homilies featured on the endpapers and children can search for Adri swimming among the other fish. These features, plus Kranz’s whimsical illustrations, ensure that ",
      {
        "type": "emphasis",
        "children": [
          "You Be You"
        ]
      },
      "will be an instant favorite of young and emergent readers or anyone looking for a little encouragement during trying times."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
