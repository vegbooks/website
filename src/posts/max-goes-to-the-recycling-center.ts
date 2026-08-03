import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/9781404852723.jpg",
    "alt": "Max Goes to the Recycling Center",
    "href": "/media/2010/12/9781404852723.jpg",
    "width": 210,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A “Red Level” book in Picture Window Books’ Read-it! Readers series, ",
      {
        "type": "link",
        "href": "http://www.capstonepub.com/product/9781404852723",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Max Goes to the Recycling Center"
            ]
          }
        ]
      },
      " places its audience alongside Max’s diverse group of friends as they tour the local recycling hub. Together, we learn how items are separated and repurposed (bottles into shirts; paper into cereal boxes), and the significance of these efforts: to reduce waste and to “make the world a better place.” The sweet excursion ends with pictures of Max collecting bottles, cans and paper so he can do his part to heal the planet."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What’s most helpful about this series is the reading level guide, whereby the red tag indicates that familiar topics, common words and repeating sentence patterns are used throughout the text. Author Adria F. Klein’s note to parents is also constructive:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "When sharing a book with your child, read in short stretches, pausing often to talk about the pictures. Have your child turn the pages and point to the pictures and familiar words. And be sure to reread favorite stories or parts of stories…There is no right or wrong way to share books with children. Find time to read with your child, and pass on the legacy of literacy."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Well said!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegbooks followers may also find Max’s adventures to a farmer’s market and a nature center of interest in this ",
      {
        "type": "link",
        "href": "http://www.capstonepub.com/product/9781404852877",
        "external": true,
        "children": [
          "sweet series"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
