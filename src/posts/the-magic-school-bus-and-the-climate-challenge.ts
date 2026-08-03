import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/ms-bandthe-climate-challenge-cover.jpg",
    "alt": "The Magic School Bus and the Climate Challenge",
    "href": "/media/2010/11/ms-bandthe-climate-challenge-cover.jpg",
    "width": 210,
    "height": 175,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Climate change is not just a difficult problem, but difficult to understand as well. Joanna Cole and Bruce Degen attempt to make the causes and effects of global warming accessible to children in ",
      {
        "type": "emphasis",
        "children": [
          "The Magic School Bus and the Climate Challenge"
        ]
      },
      ". I have to admit that after reading this book, my daughter’s understanding of climate change, to the extent she has one at all, is a vague sense that pollution changes weather in a bad way – but I’m hopeful that she will come to understand this important issue with time."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The method in the Magic School Bus madness is making science into an adventure. This installment allows children to imagine becoming the sun’s rays caught in an endless return loop, bouncing off the earth and then back off the greenhouse gasses again. In the end, the children stage a play about climate change, attracting the attention of the local media and even the mayor. Interspersed throughout the zany plot are sidebars that flesh out the details for older readers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My only disappointment with this book is its emphasis on alternative energy as a solution to climate change. Not only do I keep seeing a bird instead of the Magic School Bus above the hillside filled with wind turbines, but I’m also concerned that children can’t do a heck of a lot about alternative energy. Even if it is an important part of the solution, why focus on something that kids don’t have much say over?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan kids will appreciate a reminder (absent from this book) that their lifestyle ",
      {
        "type": "link",
        "href": "http://www.time.com/time/health/article/0,8599,1839995,00.html",
        "external": true,
        "children": [
          "helps reduce greenhouse gasses"
        ]
      },
      ", and they can learn from the sidebars at the back of the book that inform them that kids can help the earth by recycling, using cloth bags, and buying things with less packaging."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
