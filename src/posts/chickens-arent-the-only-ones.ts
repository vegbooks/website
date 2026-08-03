import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "alt": "Chickens Aren’t the Only Ones",
    "href": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "width": 210,
    "height": 288,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0698117786/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0698117786",
            "external": true,
            "children": [
              "Chickens Aren’t the Only Ones"
            ]
          }
        ]
      },
      " doesn’t start off on a promising note for vegans because the first few pages are dedicated to the traditional notion that chickens lay eggs to be bought, eaten (boiled or fried) or dyed. However, this book unfolds into a beautifully illustrated tour through the world of ",
      {
        "type": "link",
        "href": "http://www.thefreedictionary.com/oviparous",
        "external": true,
        "children": [
          "oviparous"
        ]
      },
      " beings. Birds, reptiles, amphibians, fish and even dinosaurs abound!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Author and illustrator Ruth Heller’s bright illustrations make the book a treat to browse through, and her smart prose anticipates that her audience is comprised of bright, interested children. Adults may also learn something new about the egg-layers amongst us!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
