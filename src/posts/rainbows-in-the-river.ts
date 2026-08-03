import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/nick-russell-robertson-bogdoddies1-1.jpg",
    "alt": "Rainbows in the River",
    "href": "/media/2010/05/nick-russell-robertson-bogdoddies1-1.jpg",
    "width": 204,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Rainbows in the River"
        ]
      },
      " is a new book by Nick and Maggie Russell which focuses on environmental pollution. The story takes place outdoors in Ireland and tells the story of a young man, Fergal, who has a love for animals and nature."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Fergal often finds himself helping animals. As the story goes along, he finds there are rainbows in the river which are impacting the animals and environment. He investigates to find the source of the rainbows, which he discovered are caused by oil contamination from a milling business. Being brave, he confronts the ",
      {
        "type": "link",
        "href": "http://www.edf.org/page.cfm?tagID=56",
        "external": true,
        "children": [
          "business owner"
        ]
      },
      " and even helps him to put an end to the leak that is causing the environmental damage."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is an interesting story that shows one person’s compassion for animals and care for the planet. Vegetarian and vegan parents may want to know that there is one reference that says the ",
      {
        "type": "link",
        "href": "http://www.veganpeace.com/animal_cruelty/donkeys.htm",
        "external": true,
        "children": [
          "donkey pulled the tinker caravan"
        ]
      },
      " everywhere and was always “…strong, sturdy and as dependable as the seasons.” Additionally, there are activities included that contain non-vegan recipes, although they may be able to be easily veganized."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-8."
    ]
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=095651510X",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "NOTE: The book will soon be available on ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/095651510X?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=095651510X",
        "external": true,
        "children": [
          "Amazon.com"
        ]
      },
      ", but in the meanwhile, to order a copy, email ",
      {
        "type": "link",
        "href": "mailto:bogdoddies@gmail.com",
        "external": true,
        "children": [
          "bogdoddies@gmail.com"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
