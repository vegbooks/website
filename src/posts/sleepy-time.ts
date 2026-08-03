import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/toddler-boy-reading.jpg",
    "alt": "Sleepy Time",
    "href": "/media/2011/01/toddler-boy-reading.jpg",
    "width": 210,
    "height": 312,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1848570457",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1848570457?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1848570457",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Sleepy Time"
            ]
          }
        ]
      },
      " is a very short board book, full of simple rhymes. It showcases a handful of different animals and how they sleep—including baby Whale, who floats asleep in the ocean while her mom watches over her; baby Flamingo, who sleeps with his head tucked under his wing while standing on one leg; and baby Bat, who sleeps upside down under the stars. On the final page, a young girl sleeps snuggled in her cozy bed. Each rhyme is accompanied by a large pastel picture of a sleeping animal."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a very calming book that sets the tone for bedtime, and it helps reinforce the idea that animals are just like us, despite the different locations and positions that they sleep in. Kids will enjoy learning about the many different ways that animals sleep."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 0-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
