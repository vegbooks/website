import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/07/click-clack-abc-cover.jpg",
    "alt": "Click, Clack, ABC",
    "href": "/media/2012/07/click-clack-abc-cover.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This is a board book that manages to do something a little new (to me) in an ABC book – there is a hint of narrative as the various animals in the book progress through the letters of the alphabet. I have always thought ABC books for babies were more for parents than kids so being able to tell a story instead of just offering random objects or animals to get through the alphabet is refreshing."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Those that have read Vegbooks favorite, ",
      {
        "type": "link",
        "href": "/reviews/click-clack-moo-cows-that-type/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Click, Clack, Moo"
            ]
          }
        ]
      },
      ", will recognize some of our friends – the cows that type (depicted with blankets at hand) and the duck – as well as some other animals including cats, sheep, mice, and pigs. There is no sign of Farmer Brown or his barn, though some of the scenes evoke idyllic storytime farm life like pigs eating out of a trough and goats wearing bandanas. The ABCs culminate in a watermelon picnic on a hill and naps in the sun:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Watermelons waiting.",
              {
                "type": "lineBreak"
              },
              " X marks the picnic spot.",
              {
                "type": "lineBreak"
              },
              " Yawns yawning.",
              {
                "type": "lineBreak"
              },
              " Zzzz zz zzzzzzzzzzzz."
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A great board book companion to ",
      {
        "type": "emphasis",
        "children": [
          "Click, Clack, Moo"
        ]
      },
      ". Do you have a favorite ABC book?"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
