import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Cloudy with a Chance of Meatballs (2009)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Don’t let the title put you off too much. “",
      {
        "type": "link",
        "href": "http://www.sonypictures.com/movies/cloudywithachanceofmeatballs/",
        "external": true,
        "children": [
          "Cloudy with a Chance of Meatballs"
        ]
      },
      "” is actually a decent animated flick. While there aren’t strong animal or environmental themes, vegetarians will be interested to know that this movie emphasizes eating in moderation — and that the meatballs in the title don’t actually come from animals."
    ]
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=&l=as2&o=1&a=0689707495",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Based on ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0689707495/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0689707495",
        "children": [
          "the book by Judi and Ron Barrett"
        ]
      },
      ", this movie is one that is likely to appeal to a wide range of ages. We’ve seen it twice now. Kiddo loves the music and the fast pace, and I appreciate its emphasis on science and discovery, as well as the innocent love story between the protagonist, an inventor, and a meteorologist who’s trying to pass as a ditzy weather girl."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are two animal issues that parents should be aware of. First, the inventor fits his monkey-companion Steve with a thought-translating device, which reveals that he doesn’t think about much more than food. Second, there is a scary scene in which genetically modified headless chicken carcasses come to life and attack people. It ends up being more silly than scary, but still …."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veggie families might find that this film inspires some interesting conversation. Would you, for example, eat ",
      {
        "type": "link",
        "href": "http://www.peta.org/b/thepetafiles/archive/2008/04/21/Lab-Meat-Tastes-Like-a-Million-Bucks.aspx",
        "children": [
          "meat from a laboratory"
        ]
      },
      "? Is genetic modification a good idea?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
