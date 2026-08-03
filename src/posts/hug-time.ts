import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/hug-time.jpg",
    "alt": "Hug Time",
    "href": "/media/2010/07/hug-time.jpg",
    "width": 210,
    "height": 183,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "With ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/2-9780316114943-4",
            "external": true,
            "children": [
              "Hug Time"
            ]
          }
        ]
      },
      ", Patrick McDonnell, longtime cartoonist and creator of “",
      {
        "type": "link",
        "href": "http://muttscomics.com/",
        "external": true,
        "children": [
          "Mutts"
        ]
      },
      "” (as well as the artist behind ",
      {
        "type": "link",
        "href": "http://www.state.nj.us/mvc/Vehicle/AnimalFriendly.htm",
        "external": true,
        "children": [
          "New Jersey’s animal friendly license plate"
        ]
      },
      "), has crafted another winner. The sweet rhyming cadence and nicely balanced illustrations happily hook adults and children as they follow Jules the Kitten. Jules is feeling a little down about the state of global affairs and has come up with a solution: to hug the whole world. Caregivers of young children can probably relate to Doozy as she helps Jules with his sweater and asks, “hug the whole world, will that make it better?” Jules answers in the affirmative (ah! the certainty of the very young!) and sets out."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Along the way, there are allusions to various environmental themes as we follow Jules through the world and he experiences finding (and hugging) charismatic mega-fauna and lesser-known species as well. A nod to climate change and its impact on polar bears makes its way into the end of the story but before the plot becomes too heavy, we are reminded that change begins with our actions at home, sometimes with just one hug."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "An adorable book to share with huggable folks ages 3 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
