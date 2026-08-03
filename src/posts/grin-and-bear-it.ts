import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/grin-bear-it-72.jpg",
    "alt": "Grin and Bear It",
    "href": "/media/2011/08/grin-bear-it-72.jpg",
    "width": 210,
    "height": 285,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Leo Landry’s new book ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.publishersweekly.com/978-1-57091-745-5",
            "external": true,
            "children": [
              "Grin and Bear It"
            ]
          }
        ]
      },
      " is a good pick for kids interested in a silly book with short chapters and lots of illustrations. Consisting of 7 chapters over 48 pages, the book tells the story of Bear, a comedian with plenty of material and a serious case of stage fright. In the end, he finds a solution that makes his friends laugh but spares him the anxiety of performing."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I like the fact that Bear eats berries for breakfast. Some parents might cringe when he falls asleep while drinking a root beer at the local watering hole, but my kiddo didn’t think anything of it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While all the puns might be a bit much for some adults reading aloud, ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/entity/Leo-Landry/B001ITYVQQ?ie=UTF8&ref_=ntt_athr_dp_pel_1&tag=vegbooks-20&linkCode=ur2&camp=1789&creative=390957",
        "external": true,
        "children": [
          "Landry’s classic illustrations"
        ]
      },
      " are quite attractive and the story moves quickly, making this a fun read."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
