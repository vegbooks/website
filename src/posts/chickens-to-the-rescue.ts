import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/9780805079517.jpg",
    "alt": "Chickens to the Rescue",
    "href": "/media/2011/08/9780805079517.jpg",
    "width": 210,
    "height": 194,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "When the typical order of daily events breaks down on a farm, some atypical helpers emerge in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0805079513/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0805079513",
            "external": true,
            "children": [
              "Chickens to the Rescue"
            ]
          }
        ]
      },
      ". Silly events develop as the helpful poultry assist in all quarters. Watch fell down a well? Too tired to make dinner? Homework eaten by the dog? Duck absconded in a truck? This farm’s flock of chickens is ready to step in and make things happen!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "We cannot read this story without chuckling at the flock’s fervor and passion for helping their fellow farm dwellers. Though a cow named Milky is featured, which may not sit well with some, this tale by author/illustrator ",
      {
        "type": "link",
        "href": "http://jch.homestead.com/home.html",
        "external": true,
        "children": [
          "John Himmelman"
        ]
      },
      " characterizes chickens as lovable, capable do-gooders. We all should have a flock of such good-natured, helpful assistants."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
