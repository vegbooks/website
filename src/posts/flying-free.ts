import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/toddler-girl-reading.jpg",
    "alt": "Flying Free",
    "href": "/media/2010/12/toddler-girl-reading.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I absolutely love ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1594579725/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=1594579725",
        "external": true,
        "children": [
          "this book"
        ]
      },
      ", and so does my daughter. It’s told from the perspective of a firefly that is captured by a little girl. The girl wants to keep the firefly in a jar by her bedside to serve as a nightlight so that she won’t be scared at night. Her two moms have reservations about the idea, pointing out that the firefly would be happier outside living in its own home. The little girl insists she can make the firefly happy, poking holes in the jar for air and filling the jar with grass and flowers. But the firefly keeps trying to escape. Finally, the firefly dims his light so that he won’t be useful for the little girl. The moms point out that the firefly looks sad and insists the firefly be set free. The little girl is sad but lets the firefly out into the summer night, and the firefly flies happily away."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter received this book as a gift for her second birthday and wants to read it every night. I think she loves the depiction of the two mom family, which is just like hers. I love that too, but I also love the message. Animals, even bugs, want to be free. Telling the book from the firefly’s perspective allows us to feel the frantic urgency the firefly feels when trying to escape. The firefly doesn’t want to be in the jar. A great books for lovers of animals (even bugs)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
