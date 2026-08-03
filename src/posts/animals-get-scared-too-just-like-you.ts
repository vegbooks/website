import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/front-cover-only.jpg",
    "alt": "Animals Get Scared Too, Just Like You!",
    "href": "/media/2010/11/front-cover-only.jpg",
    "width": 210,
    "height": 207,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "During a stroll through the Miami International Book Fair, I had a pleasant chance encounter with John Adkins, author and artist of ",
      {
        "type": "link",
        "href": "http://animalsgetscaredtoojustlikeyou.blogspot.com/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Animals Get Scared Too, Just Like You!"
            ]
          }
        ]
      },
      " Recently published by Miami Dade College – the same institution where Adkins instructs, – the book is simple is its goal: to appease kids of their nerves and anxiety by exploring the different ways animals handle their fears. Each of the 14 animals are artfully depicted in a collage-like format and superimposed on a fairly busy background of their own silhouettes."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The text is formatted in the same way on each page, where the first line reads: “A possum [or other animal] gets scared too, just like you!” A second line elaborates on what the animals do when they’re scared, such as playing dead in the opossum’s case. The third and last line asks the reader “Can you lay very still like a possum?” … or climb a tree (bear), snuggle with a family member (baby elephant), laugh out loud (hyena), etc."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This may not be the best bedtime story as kids are sure to get riled up pretending to be seals, ravens and turtles, but it’s yet another great work showing kids the emotional common denominator between humans and animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
