import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/t-do-it.jpg",
    "alt": "I Didn’t Do It",
    "href": "/media/2011/04/t-do-it.jpg",
    "width": 210,
    "height": 258,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Dog lovers will be especially appreciative of Patricia MacLachlan and Emily MacLachlan Charest’s ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/1-9780061358333-2",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "I Didn’t Do It"
            ]
          }
        ]
      },
      ", a short volume of poems illustrating various facets of life from a dog’s perspective. All of the dogs in the story appear to be both loving and loved, if not a little bit silly sometimes. Illustrator Katy Schneider evocatively illustrates each poem to provide a real sense of the individual dogs, their voices and their stories. In our home, we especially like the poem about what the dog likes…and the one about what the dog does not like!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "I Didn’t Do It"
        ]
      },
      " is a sweet addition to libraries of kids who love companion canines. Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
