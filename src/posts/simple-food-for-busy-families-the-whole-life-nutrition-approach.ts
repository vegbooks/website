import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/978-1-58761-336-4.jpg",
    "alt": "Simple Food for Busy Families: The Whole Life Nutrition Approach",
    "href": "/media/2010/12/978-1-58761-336-4.jpg",
    "width": 210,
    "height": 254,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Whether you’ll like this book depends on the reason that you pick it up. If your family consumes a lot of packaged food, or eats out frequently, and you’re looking for new approaches to eating that incorporate whole foods, you’ll probably find a lot to like in this book by holistic health counselors ",
      {
        "type": "link",
        "href": "http://www.realfoodmoms.com/",
        "external": true,
        "children": [
          "Jeannette Bessinger and Tracee Yablon-Brenner"
        ]
      },
      ". If, however, you’re already eating a pretty good diet, or if you’re looking for a book to give to friends or family that will encourage a plant-based diet, you’ll be sorely disappointed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "On the positive side, almost all of the authors’ nutritional advice is easily incorporated a vegetarian or vegan lifestyle, and most of their super-flexible mix and match recipes include plant-based choices — the two exceptions being their crustless quiche (made with eggs) and their stew (which only provides options as to what kind of meat to use). The authors also provide a critique of the Standard American Diet (“SAD”) and associated lifestyle that is likely to ring true with most veg readers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s precisely this critique of the SAD lifestyle that made me think that the authors would have had something meaningful to say about the importance of plant-based food choices. To their credit, they include comprehensive guides to grains and green vegetables, which form the basis of many veg diets. They’re also positive on meat analogs, such as Tofurky and veggie burgers, and provide some information on the ills of factory farming. Still, perhaps because they’re influenced by the work of Weston A. Price, a dentist who studied indigenous diets and whose work has been used to fuel the ",
      {
        "type": "link",
        "href": "http://unreasonable.org/node/1642",
        "external": true,
        "children": [
          "anti-soy camp"
        ]
      },
      ", their repeated inclusion of meat throughout the book is likely to leave a bad taste in most vegetarians’ mouths. (Surprisingly, there’s even a sidebar that suggests that vegetarians may be more prone to the SAD lifestyle than their meat-eating counterparts!)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is geared to adults."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
