import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/01/9781432951528.jpg",
    "alt": "From Trash to Treasure",
    "href": "/media/2012/01/9781432951528.jpg",
    "width": 210,
    "height": 236,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In the same vein as ",
      {
        "type": "link",
        "href": "/reviews/grow-it-yourself/",
        "children": [
          "the ",
          {
            "type": "emphasis",
            "children": [
              "Grow It Yourself!"
            ]
          },
          " series"
        ]
      },
      ", the six titles in the ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.capstonepub.com/product/9781432951566",
            "external": true,
            "children": [
              "Trash to Treasure"
            ]
          }
        ]
      },
      " lineup make arts and crafts an easy, green practice for early elementary students and also challenge their reading skills."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Books are broken up into their respective reuse material: cardboard, jars and pots, buttons and beads, old clothes, paper, and plastic. Each work generally has the same format: description of the material, what happens once it’s disposed of (landfill), how to recycle and repurpose it through a pictorial example of craft ideas, and at least 1 how-to project guide. Included activities can be a bit more commonly known (snow globe from a jar), while others are so creative that even I want to do them: a flower bouquet made of buttons or a ceramic pot wind chime."
    ]
  },
  {
    "type": "image",
    "src": "/media/2012/01/9781432951542.jpg",
    "alt": "",
    "href": "/media/2012/01/9781432951542.jpg",
    "width": 210,
    "height": 236,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "I know if I was back in kindergarten I would have absolutely loved to dive into these works with an adult by my side and give them a go. Although there is really only one project with instructions contained within each title, author Daniel Nunn includes website links to the other craft projects. Most adults can figure out what materials are needed and how to assemble them on their own, but who doesn’t love getting more crafty ideas from the net, especially when Nunn recommends ",
      {
        "type": "link",
        "href": "http://pbskids.org/zoom/activities/do/buttonflowers.html",
        "external": true,
        "children": [
          "PBS Kids"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://www.artistshelpingchildren.org/",
        "external": true,
        "children": [
          "Artists Helping Children"
        ]
      },
      "?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
