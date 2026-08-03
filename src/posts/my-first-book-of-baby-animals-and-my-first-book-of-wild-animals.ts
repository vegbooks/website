import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/03/my1st-book-wild-animals.jpg",
    "alt": "My1stBookWildAnimals",
    "href": "/reviews/my-first-book-of-baby-animals-and-my-first-book-of-wild-animals/",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Gorgeous. That was my first thought when reviewing these National Wildlife Federation board books for infants and toddlers that I received for review from ",
      {
        "type": "link",
        "href": "http://www.charlesbridge.com/index.cfm",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      ". The books themselves are very simple – just a picture of an animal and the name of the animal. It’s the pictures that are the stars here. Gorgeous, high quality pictures of animals in the wild."
    ]
  },
  {
    "type": "image",
    "src": "/media/2014/03/my1st-book-baby-animals.jpg",
    "alt": "My1stBookBabyAnimals",
    "href": "/reviews/my-first-book-of-baby-animals-and-my-first-book-of-wild-animals/",
    "width": 210,
    "height": 210,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "My First Book of Baby Animals"
        ]
      },
      " (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1623540283/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1623540283&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") is my favorite of the two simply because, well, it’s baby animals. Super cute. It also includes the name of the baby animal which adds to the educational value for your child as he or she grows. Even I learned some things from this one. For example, a baby fox is called a kit and it is super cute!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I read these books with my six-month old son. If you asked him for his review, he would say they are super tasty. I definitely recommend these books, especially ",
      {
        "type": "emphasis",
        "children": [
          "My First Book of Baby Animals"
        ]
      },
      ", for the babies in your life."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
