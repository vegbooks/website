import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/stern-ori-tang.jpg",
    "alt": "The Misadventures of Ori Tang",
    "href": "/media/2011/01/stern-ori-tang.jpg",
    "width": 210,
    "height": 147,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As a parent, I find myself grappling with how to talk to my daughter about the serious issues our world faces. Sometimes books can help start the conversation in an age-appropriate, nonthreatening way."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Misadventures of Ori Tang"
        ]
      },
      " by Sandra F. Stern and Alex Walton broaches the issue of the pet trade by presenting a story geared to kids ages 4 to 8 that recounts one young orangutan’s capture and his heroic rescue. While the book tries to be lighthearted — characterizing humans as “very, very ugly creatures” — the story is likely to be too scary for some children. And yet, it still does not tell the full truth about the pet trade, leaving out, for example, the fact that ",
      {
        "type": "link",
        "href": "http://www.newscientist.com/article/dn7529-orangutans-killed-for-illegal-trade.html",
        "external": true,
        "children": [
          "poachers often kill mother orangutans to get their babies"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian kids will appreciate that one of the characters is a vegetarian tiger named One-Fang Flossie, and many parents will appreciate that this book starts the conversation about wildlife protection without making orangutans attractive as “pets.” The illustrations, however, are what really make this book shine. While the text can be a little dense and heavy at times — particularly for younger children — the orangutans’ expressive faces are utterly captivating, keeping listeners’ attention even where the text on a single page is several paragraphs long."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is geared to ages 4-8, but is probably best for kids ages 6-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
