import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/01/9781432951115.jpg",
    "alt": "Grow It Yourself!",
    "href": "/media/2012/01/9781432951115.jpg",
    "width": 211,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Capstone now has a new wonderful imprint, ",
      {
        "type": "link",
        "href": "http://www.capstonepub.com/category/LIB_PUBLISHER_HRT",
        "external": true,
        "children": [
          "Heinemann-Raintree"
        ]
      },
      ", that’s solely dedicated to publishing curriculum-driven nonfiction “that encourages inquiry and satisfies curiosity” for students in grades PreK-8. In their “Grow It Yourself!” series, children are challenged to cultivate something with a tangible result – catnip for a cat toy, tomatoes for a tomato and cheese (who says it can’t be Daiya, Follow Your Heart or even slices of Tofutti?) sandwich, pumpkins for soup, plants for a butterfly ",
      {
        "type": "emphasis",
        "children": [
          "farm"
        ]
      },
      " (why they didn’t title it a ",
      {
        "type": "emphasis",
        "children": [
          "garden"
        ]
      },
      " is beyond my comprehension!), and more."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Generally these titles are pretty veg-friendly with a few minor tweaks; e.g. – soy yogurt in place of the “natural yogurt” and agave vs. the honey called for in the ",
      {
        "type": "emphasis",
        "children": [
          "Grow Your Own Smoothie"
        ]
      },
      " text."
    ]
  },
  {
    "type": "image",
    "src": "/media/2012/01/9781432951108.jpg",
    "alt": "",
    "href": "/media/2012/01/9781432951108.jpg",
    "width": 210,
    "height": 238,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "The text is of course age appropriate and the photography colorful and inviting. A glossary in each book ensures that young ones are expanding their vocabulary. All in all, these are a great find. I particularly enjoyed ",
      {
        "type": "emphasis",
        "children": [
          "Grow Your Own Catnip Toy"
        ]
      },
      ", but then again who couldn’t resist a book with cute kitties being silly? It made me want to plow my yard and get my hands dirty, just like the kids in the book. Good job, author John Malam, for showing kids they don’t need a so-called green thumb to just follow basic instructions and realize the fruits of their labor."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
