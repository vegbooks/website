import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/10-little-rubber-ducks.jpg",
    "alt": "10 Little Rubber Ducks",
    "href": "/media/2010/07/10-little-rubber-ducks.jpg",
    "width": 211,
    "height": 294,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Author and illustrator ",
      {
        "type": "link",
        "href": "http://ericcarle.com/",
        "external": true,
        "children": [
          "Eric Carle"
        ]
      },
      " has an extensive body of work that is well known to those with children or even those who have set foot in the children’s section of any American bookstore or library. A brief forward in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/1-9780060740757-8",
            "external": true,
            "children": [
              "10 Little Rubber Ducks"
            ]
          }
        ]
      },
      " explains that Mr. Carle’s inspiration for this particular book came after reading ",
      {
        "type": "link",
        "href": "http://harpers.org/archive/2007/01/0081345",
        "external": true,
        "children": [
          "an article about a container of bath toys washing overboard into the Pacific Ocean while being shipped between Hong Kong and the United States"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The account Mr. Carle colorfully weaves traces the path of ten of the ducks from their manufacture in an Asian factory to their uncharted journeys once they have fallen overboard during transit to America. The first nine ducks appear to fare well, encountering interesting creatures along the way, but the tenth duck has a harder time in the open ocean. Eventually, this last little rubber duck is taken under the wing of a mother duck and bobs along happily as an adopted member of a duck family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a powerful book. It is a traditional storybook filled with vivid illustrations of animals that (like most of Mr. Carle’s work) appeal to young children. At the same time, ",
      {
        "type": "emphasis",
        "children": [
          "10 Little Rubber Ducks"
        ]
      },
      " gently introduces important concerns surrounding us all– including consumerism, globalization, human rights and environmental issues. One thing environmentally concerned families will want to note that I find hugely disappointing is that each book comes with an embedded battery so that any child (or childish person) can press a spot to listen to the tenth rubber duck quack."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "If you are looking for answers or solutions to pressing global concerns, this book does not provide any. If you are looking for a way to plant a seed for later discussions of the aforementioned issues, this book is a good choice. Finally, the fact that it does touch on so many issues but remains a bright, engaging tale gives it enough interest to appeal to a broad range of ages. I recommend this book for ages 2 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
