import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Benji Bean Sprout Doesn’t Eat Meat",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Sarah Rudy’s ",
      {
        "type": "link",
        "href": "http://www.paperbackswap.com/Benji-Bean-Sprout-Sarah-Rudy/book/097283401X/",
        "external": true,
        "children": [
          "slim paperback"
        ]
      },
      " portrays a school-age boy’s crisis of faith in vegetarianism. While this book is likely to appeal only to a narrow subsection of vegetarians, it could serve as a helpful tool for parents responding to peer pressure to eat meat."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The plot is simple. Bullied because of his family’s lifestyle, Benji announces to his parents that he would like to try a hamburger. In response, Dad brings Benji to an animal sanctuary, where he has the opportunity to meet the animals who would otherwise have become meat, and Mom prepares Neat Loaf, a vegan entree, and mashed potatoes for Benji’s class. As a result, Benji decides to stay veg and his former tormentors become open-minded friends."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are a couple things about this book I don’t quite get. The title is one. Benji Bean Sprout is the nickname that the bullies give Benji — why use it in the title? Further, while meeting individual cows, pigs, and chickens can be a powerful reminder of why we choose vegetarianism and veganism, I’m less confident that making a big batch of casserole is enough to sway kids intent on picking on another child. (Bullies usually care less about what makes the other kid different, and more about feeling powerful.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Some readers won’t like this simple resolution of a complex problem. And others will cringe at Rudy’s depiction of bullying — Benji is actually pushed against a wall in one scene. Still, for kids in Benji’s situation, and their parents, this book could ",
      {
        "type": "link",
        "href": "http://www.vrg.org/journal/vj2005issue2/vj2005issue2books.htm",
        "external": true,
        "children": [
          "help bolster their confidence"
        ]
      },
      " that other kids have felt the same way and that other vegetarians are out there. (And the recipe for Nut Loaf is included in the book!)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Because this book is geared to school-aged children subject to peer pressure, I’d recommend it for vegetarian kids ages 6-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
