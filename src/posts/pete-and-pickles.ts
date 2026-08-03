import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/pete-pickles.jpg",
    "alt": "Pete and Pickles",
    "href": "/media/2010/05/pete-pickles.jpg",
    "width": 216,
    "height": 216,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Pete is a “perfectly predictable… perfectly practical… and a perfectly uncomplicated pig.” A sad little widower, Pete’s life gets turned upside down by Pickles, an imaginative and adventuresome ",
      {
        "type": "link",
        "href": "http://www.circuses.com/",
        "external": true,
        "children": [
          "circus"
        ]
      },
      "-escapee elephant. The two are so different in every way creating the age-old “opposites attract” conflict that makes for an exciting relationship and love story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Every page is filled with dramatic and fantastic imagery and the story moves along at a fast clip. Emotions flow across the pages faster than the flood that traps the two characters but all of them tinted with humor. Told by a master storyteller with words and images, ",
      {
        "type": "link",
        "href": "http://www.berkeleybreathed.com/",
        "external": true,
        "children": [
          "Berkeley Breathed"
        ]
      },
      " (creator of Opus and the comic ",
      {
        "type": "emphasis",
        "children": [
          "Bloom County"
        ]
      },
      ") easily pulls the strings on our emotions like a master puppeteer. The characters are so well described and lovable that we could probably relate them to people we know in our own lives."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Mr. Breathed wrote an absolutely touching yet hilariously illustrated romance between a staid pig and a lively elephant. This is one exciting backyard adventure/love story not to be missed!"
    ]
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0399250824",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Grade 2-4 according to ",
      {
        "type": "link",
        "href": "http://www.schoollibraryjournal.com/article/CA6625221.html",
        "external": true,
        "children": [
          "School Library Journal"
        ]
      },
      " but ages 4-8 on ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0399250824?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0399250824",
        "external": true,
        "children": [
          "Amazon"
        ]
      },
      ". (Personally, I think all ages would enjoy it as my 3 year old loves it and I find it brilliant!)"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
