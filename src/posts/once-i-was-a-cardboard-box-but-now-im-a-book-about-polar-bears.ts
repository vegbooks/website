import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Once I Was A Cardboard Box… but Now I’m a Book About Polar Bears!",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1906824339",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/1906824339?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1906824339",
            "external": true,
            "children": [
              "Once I Was a Cardboard Box … But Now I’m a Book About Polar Bears!"
            ]
          }
        ]
      },
      " is a clever book designed not only to inform children about the biology and status of polar bears but also give them a detailed look at what happens to some of our cardboard when it enters the recycling stream. The book itself, as the title proclaims, is made from recycled cardboard and the lack of plastic laminate gives it extra green cred (the heavy duty cardboard cover has held up perfectly well)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Each page of the book contains dual information: the main text is about polar bears and detailed sidebars discuss paper recycling. I found the information on the recycling especially interesting. The illustrations and graphics are bright and appealing. China plays a fairly significant role in the box-to-book portion of the book– a good way to discuss with your children issues such as the role that China plays as our trading partner, consumerism and how resource intensive even recycling can be (think multiple trans-Pacific voyages via container ship). We sometimes read the stories individually (first the polar bears, then the recyling) but we often mix the two."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The end of the book ties together the relationship between polar bears, global warming and recycling. The final page contains suggestions for steps that the entire family can take to slow climate change. If your family is interested in talking more about recycling, the EPA has developed a game called ",
      {
        "type": "link",
        "href": "http://www.epa.gov/recyclecity/",
        "external": true,
        "children": [
          "Recycle City"
        ]
      },
      ", and the National Institute of Environmental Health Sciences has a ",
      {
        "type": "link",
        "href": "http://kids.niehs.nih.gov/recycle.htm",
        "external": true,
        "children": [
          "kid-friendly page"
        ]
      },
      " with many links."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is great for kiddos ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
