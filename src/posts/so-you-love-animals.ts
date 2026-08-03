import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/1-88169-901-3-soy.jpg",
    "alt": "So, You Love Animals",
    "href": "/media/2010/04/1-88169-901-3-soy.jpg",
    "width": 209,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "For a parent who is raising vegetarian children, this book can come in quite handy. It’s a good resource for finding things to do with your children that can help them get involved with learning more about animals and their habitats, and helping to care for them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book covers such topics as meat, companion animals, animals in entertainment, ",
      {
        "type": "link",
        "href": "http://www.peta2.com/college/c-dissection.asp",
        "external": true,
        "children": [
          "dissection"
        ]
      },
      ", animal laboratories, and ",
      {
        "type": "link",
        "href": "http://www.hsus.org/wildlife/",
        "external": true,
        "children": [
          "animals in the wild"
        ]
      },
      ", offering pertinent facts about each. There are also projects the kids can undertake to help them learn more about the issues."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Some of the projects in the book that parents can help their children do include making a bird feeder and bath, keeping the beach clean, making wind chimes using natural materials like seashells, and ways to get active in helping to protect wildlife."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Depending on personal preferences, some parents may not care for the “be a zoo reporter” project because it involves visiting the zoo. However, it does lay out the ",
      {
        "type": "link",
        "href": "http://www.savezooelephants.com/inside_zoos.html",
        "external": true,
        "children": [
          "facts and concerns with zoos"
        ]
      },
      ", and provides a list of questions aimed at getting kids to take inventory of what they see wrong with zoos, and then to take steps to try and make things better."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
