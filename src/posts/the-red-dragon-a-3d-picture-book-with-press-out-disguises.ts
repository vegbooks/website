import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "alt": "Girl Reading",
    "href": "/reviews/flying-free/",
    "width": 210,
    "height": 286,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Red Dragon can’t wait to meet his new neighbors. Plus, he is starving. But he knows that the sight of a red dragon might scare them, so he puts on disguises. This is where your kid can really have fun putting the disguises on dragon. The pop-ups are great too (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0803714521/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0803714521&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ")."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "At each of the neighbors, Red Dragon asks for meat. He can’t understand why cow is so offended when he asks for a hamburger, or why sheep won’t open the door when he asks for lamp chops. All his new neighbors eat is grass! So, Red Dragon decides to try it. The grass actually tastes pretty good! After eating lots of grass, Red Dragon turns Green. His neighbors aren’t afraid of green dragons, so they join him for a bite of grass on the lawn."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is not only a lot of fun because of the cut-out disguises, but it is a good way to teach kids that ",
      {
        "type": "emphasis",
        "children": [
          "meat comes from animals"
        ]
      },
      ". Ask them questions like “Why do you think cow is scared of Red Dragon when he asks for a hamburger?” It also teaches them that veggies might even be tasty if you’d just give them a try."
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
