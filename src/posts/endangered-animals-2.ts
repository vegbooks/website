import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/04/1471112.jpg",
    "alt": "Endangered Animals",
    "href": "/media/2012/04/1471112.jpg",
    "width": 210,
    "height": 313,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“People and animals share the same earth. They have shared it for a long, long time.” So begins Faith McNulty’s simple, beautiful early reader that introduces children to the conservation of endangered species."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is geared to younger children than the ",
      {
        "type": "link",
        "href": "/reviews/endangered-animals/",
        "children": [
          "Flowerpot Press title of the same name"
        ]
      },
      ". With short, direct sentences, it’s a perfect fit for first and second graders who are reading on their own."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story is a familiar one. Once upon a time, the earth had sufficient resources for everyone, humans and nonhuman animals alike. But as our numbers have increased, we’ve encroached on habitat and forced the other animals out, causing many to face risk of extinction."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the emphasis is on habitat loss, this book also highlights the need to protect endangered animals from hunting — ",
      {
        "type": "link",
        "href": "http://www.star-telegram.com/2012/03/30/3849399/does-hunting-in-texas-save-endangered.html",
        "external": true,
        "children": [
          "an issue far more contentious than it should be in this country"
        ]
      },
      " — and, of particular relevance to children, to “give up things we want for ourselves.” As parents, teachers, and caregivers, we know that one of the most powerful ways that children can protect the environment is to buy less and have less purchased for them, but we also know that giving up luxuries can be hard — realities that McNulty acknowledges in one simple line of text. And yet her point is well taken: how can we refuse to give up what we do not need when the fate of other species hangs in the balance?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Carol Schwartz’s illustrations are accessible and beautiful, capturing a variety of endangered animals in their habitats."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this book for kids ages 6 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
