import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Gowanus Dogs",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Dark subject matter and equally dark drawings comprise ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0374310580/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0374310580",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Gowanus Dogs"
            ]
          }
        ]
      },
      ", the story of a family of homeless dogs and the homeless man who changes their lives and whose life is in turn changed through knowing them. Though the illustrations remain in the same shades-of-grey tenor throughout the book, our spirits are lifted by the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A mother dog and her puppies make their home in an old mixing tank in the industrial area of ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Gowanus_Canal",
        "external": true,
        "children": [
          "Gowanus Canal, Brookyn"
        ]
      },
      ", while the main human character lives in a cardboard box. Not only does this book provide an age-appropriate and quasi-realistic look at the plight of both homeless dogs and people, but it also does an great job of painting a picture of what life in this urban industrial area is like, between depictions of a concrete company, oil boats pumping their cargo into underground holding tanks and life under the Brooklyn-Queens Expressway. It also illustrates some incredibly compassionate and even risky acts that exemplify the best of human (and canine) nature."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Some of the scenes are set at an animal shelter, where the man brings one of the puppies when he realizes she is ill. Though some of us have had challenging experiences in shelters, this book gives a fairly positive spin on what is often a negative experience. A spirit of kindness pervades this book, as many people do kind deeds for one another and the dogs. The book is full of breaks and opportunities for the dog family and the nameless man, who, by the end of our story, is no longer homeless."
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
