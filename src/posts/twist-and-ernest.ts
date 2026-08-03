import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/09/twist-and-ernest-rgb.jpg",
    "alt": "Twist and Ernest",
    "href": "/media/2011/09/twist-and-ernest-rgb.jpg",
    "width": 210,
    "height": 169,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I recently received a copy of ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0967468108/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0967468108",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Twist and Ernest"
            ]
          }
        ]
      },
      " to review. I was immediately captivated by the illustrations and thoroughly enjoyed the story of the little donkey who is very earnest indeed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ernest is a small, lonely donkey. Overjoyed when he gets a pasture mate in the form of Twist, a big, beautiful show horse, Ernest enthusiastically gives Twist a tour of his new home, happily pointing out all of the finer points, such as the pond, stream and beautiful green pasture. Unfortunately, Twist does not share Ernest’s enthusiasm about his new home, nor does he care to hang out with a scruffy little donkey."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Eventually, after a brief adjustment period, Twist begins to see things Ernest’s way and relaxes into both his new home and his new friendship with the little donkey. The two of them become best friends and live their days happily and with great affection for each other."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a sweet tale of friendship and love. That Twist eventually adjusts to Ernest’s energy and affection is a happy ending, though the plot glosses over some of the more complex social dances that humans (even small ones) often need to do in order to make new friends."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "We enjoyed this book but parents, teachers and caregivers of children with social or pragmatic deficits will want to know that they may need to be ready to discuss the fact that Ernest initially misses some very clear social cues from Twist and the donkey is often depicted invading the horse’s personal space."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
