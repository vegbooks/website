import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/diary-of-a-spider.jpg",
    "alt": "Diary of a Spider",
    "href": "/media/2010/07/diary-of-a-spider.jpg",
    "width": 210,
    "height": 277,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Since spiders are probably one of the most feared creatures around, it stands to reason that a book providing a view of things from their side would make interesting reading. And this book does not disappoint!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.curledupkids.com/diaryspi.htm",
            "external": true,
            "children": [
              "Diary of a Spider"
            ]
          }
        ]
      },
      " is a personal account of a spider going through its normal routines of building webs, conducting vacuum drills, and showing the fragility of their existence. The book even ends with the spider writing that it would be great if people wouldn’t judge all spiders based on a few that bite."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From the snapshots included in the front and back, including one that shows the spider’s favorite book is ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.care2.com/causes/animal-welfare/blog/animal-rights-reading-a-top-ten-summer-book-list/",
            "external": true,
            "children": [
              "Charlotte’s Web"
            ]
          }
        ]
      },
      ", this is an entertaining look at these small creatures which, when we find them in our homes, we scoop up and take outdoors."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a cute book for children since it teaches that all creatures should be respected and have the right to live, including spiders. It helps to show their personality, demonstrate that they have interests, and explain that humans and spiders can get along if they try."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
