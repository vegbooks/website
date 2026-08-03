import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/muncha-muncha-muncha-cover.jpg",
    "alt": "Muncha! Muncha! Muncha!",
    "href": "/media/2011/06/muncha-muncha-muncha-cover.jpg",
    "width": 210,
    "height": 269,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter and I enjoyed reading about Mr. McGreely’s gardening enthusiasm and battle with the bunnies over his vegetables. ",
      {
        "type": "link",
        "href": "http://www.gbriankaras.com/index.html",
        "external": true,
        "children": [
          "G. Brian Karas"
        ]
      },
      " (whom I recognized from ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0805061509/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217153&creative=399349&creativeASIN=0805061509",
            "external": true,
            "children": [
              "My Crayons Talk"
            ]
          }
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://www.cricketmag.com/BBB-BABYBUG-Magazine-for-Babies-6mo-3yrs",
        "external": true,
        "children": [
          "Baby Bug"
        ]
      },
      ") creates cute little bunnies to accompany Candace Fleming’s cute bunny sounds as the moochers munch away on Mr. McGreely’s hard earned harvest. Kids like my four-year-old will find it fun to make the repetitive sounds the bunnies make as they sneak into the garden (“tippy-tippy-tippy, pat!”) and muncha! muncha! muncha!way."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "McGreely’s expressions illustrate the clear emotional statements “he was angry,” “he was really angry,” and “he was really, really, angry” after discovering the vegetables demolished each day. The wonderful part of the story is that McGreely expresses his anger (modeling for children that it is ok to feel angry and frustrated), but he also uses the angry energy constructively (AR folks read: safe for bunnies) to build obstacles to keep the bunnies out of his garden. They don’t work on the devious bunnies but McGreely proves a pacifist who never harms the bunnies even when he’s at his angriest. (Somehow, we’re all rooting for the bunnies even though we might have related more to McGreery and his urge to garden at the beginning).The most aggressive he gets is when he resorts to benevolent name-calling (such as “flop-ears” and “puff-tails”) and building obstacles to block the bunnies from returning to his garden. Children, AR folks, bunny-lovers, and gardeners will enjoy this cotton tale."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8.",
      {
        "type": "strong",
        "children": [
          {
            "type": "lineBreak"
          }
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
