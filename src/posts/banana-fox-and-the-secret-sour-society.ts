import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/07/9781338660487.jpg",
    "alt": "Banana Fox and the Secret Sour Society",
    "width": 267,
    "height": 400
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338660487",
        "external": true,
        "children": [
          "BANANA FOX AND THE SECRET SOUR SOCIETY"
        ]
      },
      " by James Kochalka is a wild, colorful, Super Sour Soda fueled ride. This is the kind of graphic novel that (sometimes) grates on caregivers, but delights its 6+ audience. The heavy-inked lines and bright colors draw the eye to the action — and there is a lot of action! The great detective Banana Fox is taking time off to work in a banana smoothie shack where he slurps up most of the profits. When he meets an admirer he names Flashlight (because she carries a red one), they soon embark on crime solving that brings them to a Banana Fox fan club, sticky sewers, and face-to-face with Sour Grapes, Jr., the number one rival of Banana Fox. The action is non-stop, and so are the gross jokes and giant turtles. Of course, Banana Fox overcomes the trickery of his rivals in the end, and he even learns that his new friend’s name is not Flashlight, but Sharyanna."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Readers in the intended age group will love reading this very silly and sour book, and caregivers may come around to enjoying it as well. This is a very good thing because book #2 is coming in the fall. ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "https://www.indiebound.org/book/9781338660487",
            "external": true,
            "children": [
              "Banana Fox and the Secret Sour Society"
            ]
          }
        ]
      },
      " is the perfect book to finish off the summer."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
