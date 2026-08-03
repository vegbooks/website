import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/09/monsters-dont-eat-broccoli.jpeg",
    "alt": "MonstersDontEatBroccoli",
    "width": 210,
    "height": 272,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This book is by Barbara Jean Hicks, the same author as my 4-year old’s favorite book, ",
      {
        "type": "emphasis",
        "children": [
          "The Secret Life of Walter Kitty"
        ]
      },
      ". I love Hicks’ books because they are about encouraging children to use their imagination and see the world in new, exciting ways. In ",
      {
        "type": "emphasis",
        "children": [
          "Monsters Don’t Eat Broccoli"
        ]
      },
      ", Hicks uses imagination as a tool to get kids to eat their veggies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The rhyming book is filled with great illustrations of monsters eating boulders, “fish and ships”, construction, tractors, and trailers. Throughout the book there is a fun little chant, “Fum, foe, fie, fee, monsters don’t eat broccoli!” which young kids will enjoy joining in on."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "At the end of the book, you see that the “monsters” are really two little kids on a picnic. Wheels are really tomatoes, boulders are really grapes, ships are orange slices, and construction is really cheese (though vegans could tell their kids it is tofu). The “monsters” are caught snacking on “trees”, only to discover that it is broccoli. And that they like it!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Admittedly, my daughter didn’t like this book nearly as much as ",
      {
        "type": "emphasis",
        "children": [
          "Walter Kitty"
        ]
      },
      ". However, when little boys come over, they love the book and will often flip through the pages by themselves, fascinated by the fun drawings of monsters. So (not to reinforce any gender stereotypes here), this book is probably a better choice for young boys and not girls."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
