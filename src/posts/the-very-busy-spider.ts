import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000002866095-x-small.jpg",
    "alt": "The Very Busy Spider",
    "href": "/media/2010/08/i-stock-000002866095-x-small.jpg",
    "width": 210,
    "height": 319,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Spiders have a special status in our home. Rather than shoo them outside — as we do for other bugs — we let spiders stay, at least for a little while."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s not surprising then that ",
      {
        "type": "link",
        "href": "http://www.eric-carle.com/home.html",
        "external": true,
        "children": [
          "Eric Carle’s"
        ]
      },
      " classic board book, ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/3252303.The_Very_Busy_Spider",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Very Busy Spider"
            ]
          }
        ]
      },
      ", is also a favorite around here. The story follows the day of a barnyard spider, who is too busy spinning her web to respond to the other animals’ invitations. When at last the web is complete, the rooster runs over to ask if she’d like to help him catch a fly. Her response? She catches the fly in her web “… just like that!”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While this isn’t a very nice book from the fly’s perspective, I appreciate Mr. Carle’s interest in spiders. Besides, the fact that some animals eat other animals is a reality that all ",
      {
        "type": "link",
        "href": "http://www.vegfamily.com/",
        "external": true,
        "children": [
          "vegan and vegetarian parents"
        ]
      },
      " need to confront at some point — might as well deal with it early."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 0-4. For homeschool or classroom activities related to the book, ",
      {
        "type": "link",
        "href": "http://www.makinglearningfun.com/themepages/SpiderTheVeryBusyPrintables.htm",
        "external": true,
        "children": [
          "click here"
        ]
      },
      " or ",
      {
        "type": "link",
        "href": "http://www.hubbardscupboard.org/the_very_busy_spider.html",
        "external": true,
        "children": [
          "here"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
