import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/wild-horse-winter.jpg",
    "alt": "Wild Horse Winter",
    "href": "/media/2011/05/wild-horse-winter.jpg",
    "width": 210,
    "height": 150,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In the affecting spirit of Japanese nature poetry (like that of ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Matsuo_Bash%C5%8D",
        "external": true,
        "children": [
          "Basho"
        ]
      },
      "), comes ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.chroniclebooks.com/index/main,book-info/store,kids/products_id,951/title,Wild-Horse-Winter/",
            "external": true,
            "children": [
              "Wild Horse Winter"
            ]
          }
        ]
      },
      ", a flowing and dramatic tale of a colt and his mother who survive four seasons on the island of Hokkaido, Japan. Author-artist Testuya Honda beautifully portrays – in a cold color palette (blues, whites) – the harsh winter they and the other horses in the herd must endure. The horses resort to tree bark for sustenance and live through a terrible blizzard by allowing the snow to engulf them. We learn in a note from the editor that the horses maintain a warmer body temperature by doing this instead of facing the ferocious, bustling winds. But the journey to carry on does not end here,"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“At the edge of the forest they crossed a river. The water was cold and the current was strong, but the colt swam close to his mother, and together they made it to the other side.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "On the other side is a marshland, and just beyond that, the sea. Colt and mother feast on kelp and gallop along the seashore. This tale is a testament to the bond between mother and child, and the reassurance that a mother will always look out and be there for her young. Between the lines, one can read into the dichotomy of dark/light, trial/triumph and death/rebirth. Wild Horse Winter is a powerful work that can be used in many ways either in the classroom or at home."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For those interested in history and human-animal studies, the editor’s notes are fascinating. Three hundred years ago, visiting merchants and fisherman brought Nambu horses to Hokkaido, and left them there during the winter to fend for themselves. While many died, those Darwinian-survival-of-the-fittest-horses became their own breed, the Dosanko horses: shorter in height, longer hair, and tougher hooves. They adapted to blizzard-like conditions by doing what is portrayed in the text and images: lying down and letting the snow cover them entirely."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Quite a unique subject!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
