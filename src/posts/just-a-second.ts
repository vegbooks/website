import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/12/just-a-second-hres-1.jpg",
    "alt": "Just a Second",
    "href": "/media/2011/12/just-a-second-hres-1.jpg",
    "width": 210,
    "height": 169,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I remember the long stretch of days when I was a kid, how summer seemed endless, and that we settled into games quickly enough to (nearly) finish them in twenty minutes of recess. Looking back, I think that time seemed different then, possibly because of my point of reference — only a few years of memories, only a few more years than that spent alive. So then, I wonder, how do hummingbirds and tortoises experience the world and the passage of time?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In what may be the best children’s book of 2011, Steve Jenkins explores just this question, and many others too. Not only does ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.nytimes.com/2011/11/23/books/just-a-second-steve-jenkins-review.html?_r=1",
            "external": true,
            "children": [
              "Just a Second"
            ]
          }
        ]
      },
      "simulataneously dive into the conventions of time — which increments are related to the workings of the universe (the year) and which are artificial constructs (the second) — and the natural histories of many animals (including humans), but does so in a way that’s completely accessible to children. With intriguing nuggets of information, such as the fact that a baby blue whale feeding on mother’s milk may gain ten pounds in an hour, Jenkins’ is the kind of book that may inspire a child to become a marine mammologist, or a naturalist, or a physicist. Facts aren’t presented for information’s sake, or even for mere interest, but because they may inspire further inquiry — an approach I absolutely love."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Bright, eye-catching illustrations round out this wonderful children’s book, which would readily do double-duty as a coffee table book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Families who care about the environment will delight to learn that this book, like many of Jenkins’ other works, has a strong but subtle conservation theme. Readers will discover, for example, that each minute, 59,000 barrels of oil are used (almost 15,000 of them in the United States), and each hour, an average of 19 gallons of fresh water is used for every person on earth."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Oh, and did I mention that Jenkins presents a stunning one-page visual history of the universe, and a compelling graphic about the growth of the human population?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0618708960/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0618708960",
        "external": true,
        "children": [
          "masterpiece of a book"
        ]
      },
      " is a great pick for kids ages 4 to 8 (and adults like me)."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
