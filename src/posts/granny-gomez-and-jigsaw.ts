import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/03/granny-low-res.jpg",
    "alt": "Granny Gomez and Jigsaw",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.vegsource.com/news/2010/04/new-pig-friendly-childrens-book.html",
        "external": true,
        "children": [
          "Granny Gomez"
        ]
      },
      " is an unlikely but formidable hero. The story opens with her enjoying her life and her peaceful house but craving a little companionship. She sets her sights on a traditional “pet” like a cat when her life unexpectedly collides with that of a piglet. At first she is resistant to the idea of living with a pig, but upon learning that he will otherwise become someone’s breakfast, she welcomes him into her home and names him Jigsaw."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.deborahunderwoodbooks.com/",
        "external": true,
        "children": [
          "Deborah Underwood"
        ]
      },
      "‘s masterful story allows two conflicts to emerge. First, the piglet outgrows his accommodations in the house. Second, once he is installed in his new barn — constructed by none other than Granny Gomez herself — the unlikely pair of friends misses each other."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s the story’s resolution of this second conflict that makes it such a gem for vegetarian and vegan children. Rather than leave Jigsaw in his barn alone, or adopt a friend to keep him company, Granny herself packs up her things and moves into the barn! In a culture that expects nonhuman animals to cater to humans’ every whim, Granny’s decision to meet her friend on his own terms is nothing short of heroic."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Granny Gomez is the woman I want to be, and the person I hope my daughter will become. Kids will admire her strength, independence, and loyalty. ",
      {
        "type": "link",
        "href": "http://greatkidbooks.blogspot.com/2010/04/granny-gomez-and-jigsaw-by-deborah.html",
        "external": true,
        "children": [
          "This book"
        ]
      },
      " is a treasure — I highly recommend it for anyone who cares about vegetarianism and animal rights."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7. To read an interview with the author, visit ",
      {
        "type": "link",
        "href": "http://www.ourhenhouse.com/2010/03/our-hen-house-talks-to-author-deborah-underwood/",
        "external": true,
        "children": [
          "Our Hen House"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
