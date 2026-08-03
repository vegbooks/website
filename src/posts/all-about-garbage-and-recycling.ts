import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "All About Garbage and Recycling (2008)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Kiddo has been asking about what happens to trash, and she was appalled to learn about landfills. So you can imagine her excitement when we rented Backpack Jack’s “All About Garbage and Recycling.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’d never watched anything with Backpack Jack in it before. He reminded me of Steve Burns, the original host of Blue’s Clues — young, friendly, and upbeat. Kids will love all the car- and can-crushing machines, but some might not get Backpack Jack’s sense of humor. Kiddo, for example, thought he was serious when he said a machine was crushing ",
      {
        "type": "emphasis",
        "children": [
          "his"
        ]
      },
      " car!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This movie has a definite pro-recycling perspective, so it made kiddo very happy. Still, I wish it talked a little bit about reducing and reusing old materials."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Not Rated. Ages 4-8."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For recycling activities (including instructions on making a necklace from magazines), check out ",
      {
        "type": "link",
        "href": "http://www.educationworld.com/a_lesson/lesson308.shtml",
        "external": true,
        "children": [
          "Education World"
        ]
      },
      ". To play a recycling-themed game, visit the Environmental Protection Agency’s ",
      {
        "type": "link",
        "href": "http://www.epa.gov/recyclecity/mainmap.htm",
        "external": true,
        "children": [
          "Recycle City"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
