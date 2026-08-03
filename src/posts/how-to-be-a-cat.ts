import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/01/howtobeacat.jpg",
    "alt": "Image of the children's book How to Be a Cat by Nikki McClure, reviewed by Jennifer Gannett for Vegbooks",
    "href": "/reviews/how-to-be-a-cat/",
    "width": 210,
    "height": 165,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Small Kitten learns the tricks of the cat trade and we are along for the ride in Nikki McClure’s ",
      {
        "type": "emphasis",
        "children": [
          "How to Be a Cat"
        ]
      },
      " ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/B00CC92ICA/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00CC92ICA&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "(Amazon affiliate link)"
        ]
      },
      ". Spare in its prose but unskimping on detailed illustrations, this story is a delight for young cat friends as we see Small Kitten (and Big Cat) exploring and learning about the world."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One of the many special things about this book is the way each illustration captures the activities of a young kitty. The depictions are in black and white with blue typography and accents. This spare design serves to focus the reader’s attention on the beautifully executed woodcuts. Caregivers of sensitive youngsters will note that there is a page dedicated to hunting, though in keeping with the gentle spirit of the book, there is nothing upsetting or gory depicted. There is a warmth and humor in the book that comes from knowing cats well and in fact a small note at the end describes how the author/illustrator came to have a cat in her household. Nikki McClure is a favorite of mine, and this book is a sweet and lovely addition to her body of work."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Excellent for ages 1 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
