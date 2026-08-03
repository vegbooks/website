import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "In a Tizzy Over Turkey",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Anyone who has been a vegetarian for at least a year has likely been exposed to the jokes and ridicule that come when other adults hear about the idea of a vegetarian Thanksgiving. Now, through ",
      {
        "type": "emphasis",
        "children": [
          "In a Tizzy Over Turkey"
        ]
      },
      " by Adam Beechen, those same attitudes have been put into book form, aimed at children ages 5-7."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In this book, the author pokes fun of the idea of having a ",
      {
        "type": "link",
        "href": "/search/?q=vegetarian%20thanksgiving",
        "children": [
          "vegetarian Thanksgiving"
        ]
      },
      ". Timmy has his heart set on eating turkey for Thanksgiving, only to find out that his parents have opted for a vegetarian menu."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story makes fun of the “tofurkey” or “turkey-flavored tofu” that is served, with Timmy refusing to eat it. They also refer to it as “spongy,” and say that it bounced on the floor when it came time to carve it. They even have the bowl of gravy sticking its tongue out at the thought of a vegetarian Thanksgiving."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is one book that vegetarian parents will want to keep away from their children. In fact, it’s one that all parents should want their kids to avoid. The story is insensitive to the millions of people who opt for a more compassionate or vegetarian Thanksgiving each year."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
