import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/02/martha-speaks.jpg",
    "alt": "Martha Speaks",
    "href": "/media/2010/02/martha-speaks.jpg",
    "width": 218,
    "height": 272,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0395729521",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "What would your dog say if he or she could talk human? Like the main canine character in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0395729521?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0395729521",
            "external": true,
            "children": [
              "Martha Speaks"
            ]
          }
        ]
      },
      " by Susan Meddaugh, your pup would probably have endless commentary on favorite foods and on life before becoming a member of your household.  She may even indulge you with some answers to long harbored questions – “Why do you drink from the toilet?” “Do dogs dream?”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "After devouring a bowl of alphabet soup, Martha dog is endowed with the power of speech and does all of the above. Her family is enthralled and amused by this newfound talent at first, but Martha soon overwhelms her family with secret phone orders for BBQ and nonstop chitchat. (Martha is not a veggie dog, but had her family talked to her about factory farming, I’m sure she would’ve opted for ",
      {
        "type": "link",
        "href": "http://www.v-dogfood.com/",
        "external": true,
        "children": [
          "V-Dog"
        ]
      },
      " instead.) After being yelled at to “shut up,” Martha recoils into isolation and sadness. But all ends well at the conclusion of the tale when Martha pulls off a ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/Walter-Farting-Dog-William-Kotzwinkle/dp/1583940537",
            "external": true,
            "children": [
              "Walter the Farting Dog"
            ]
          }
        ]
      },
      "-like feat of bravery and heroism."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Sincere, comical and insightful, ",
      {
        "type": "emphasis",
        "children": [
          "Martha Speaks"
        ]
      },
      " helps kids decipher the fine line between saying just enough and too much. Also a great read for highlighting and appreciating animal sentience and intelligence. There is now a ",
      {
        "type": "link",
        "href": "http://pbskids.org/martha/parentsteachers/program/index.html",
        "external": true,
        "children": [
          "PBS TV show"
        ]
      },
      " (check out the website for interactive activities) based on the Martha Speaks book series."
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
