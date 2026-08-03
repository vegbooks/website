import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/03/ocean-cover-rgbmed.jpg",
    "alt": "Only One Ocean",
    "href": "/media/2012/03/ocean-cover-rgbmed.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Looking for a kids’ CD featuring a range of musical styles and a strong, positive message of marine conservation? Then ",
      {
        "type": "link",
        "href": "http://www.bananaslugstringband.com/",
        "external": true,
        "children": [
          "The Banana Slug String Band’s"
        ]
      },
      " album “Only One Ocean” is definitely for you! The copy of ",
      {
        "type": "link",
        "href": "https://www5.cruzio.com/w5a146/prds0708.html#oneOcean",
        "external": true,
        "children": [
          "this CD"
        ]
      },
      " we received to review has been in very heavy rotation in our household, and it is not just the children that have been enjoying the clever lyrics and catchy tunes. The ocean-themed songs feature a wide range of facts about subjects ranging from plankton to cetaceans (your kids will enjoy singing along to the fast paced singing in “Cetacea,” you will be impressed that they can suddenly rattle off so many cetaceans in so little time) to, perhaps most importantly, the relationship between the ocean and the global climate."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is one of those rare CDs that seems to make everyone smarter for having listened to it. Despite the fact that we work to reduce plastic consumption in our household, it wasn’t until we listened to the song “Turtle Ate a Jelly” that some of the younger members of our cadre realized why we do this, making the connection between plastic bags in the sea and wildlife confusing them with a meal. Ditto with the information about the worrisome state of the world’s coral reefs in “Coral Reef.” You may actually find yourself walking around humming lines like, “our reef needs some protection from human destruction.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The Banana Slug String Band’s motto is “Science, Song and Celebration” and they’ve released a number of albums marrying environmental education and song. “Only One Ocean’s” songs are based on the Lawrence Hall of Science’s ",
      {
        "type": "link",
        "href": "http://mare.lawrencehallofscience.org/ocean",
        "external": true,
        "children": [
          "Ocean Literacy"
        ]
      },
      " curricula. Though the lyrics can occasionally veer into some advanced concepts, this CD is appropriate for ages 4 and up. Happy listening!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
