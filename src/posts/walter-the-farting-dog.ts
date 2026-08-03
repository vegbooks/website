import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/walter.jpg",
    "alt": "Walter the Farting Dog",
    "href": "/media/2011/07/walter.jpg",
    "width": 210,
    "height": 191,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Betty and Billy and their parents rescue Walter from a shelter. He stinks and no one else wants him. They soon learn that he has a stink that doesn’t wash out – he’s a chronic farter. No matter what he eats, no matter what he’s doing, he can’t stop farting. Betty and Billy don’t mind, but their father does. Father says Walter has to go back to the shelter because he can’t stand the stink. Betty and Billy are devastated. The night before they take him back, there is a break-in. The family is sleeping and Walter scares the burglars away with his stinky farts. He saves the silverware. Father changes his mind and says he doesn’t care if Walter stinks – he’s part of the family now."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I have mixed feelings about ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/B003K8EI48/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=B003K8EI48",
        "external": true,
        "children": [
          "this book"
        ]
      },
      ". Farts are funny, no doubt. The first half of the book is hilarious. The family tries everything but Walter just keeps farting. I love that Walter is a rescue and that Betty and Billy choose him because no one else wants him. And Betty and Billy are steadfast in their love – they don’t mind the stink, they love him anyway. I don’t like that Father is so quick to return him to the shelter and that only by proving his worth is he allowed to stay in the family. I also don’t like the gender dynamic of a firm and harsh father who makes all of the decisions. The pictures are hideous. The family is the ugliest family I’ve ever seen."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "But most of all, I don’t like the break-in. I don’t know why we need such a dramatic event to occur in a book for young children. It seems like this type of event would scare children. Are people going to break into our home while we’re sleeping?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book has both good and bad features. I think we’ll keep it in our family because farts are funny, though I won’t look at the pictures while I read."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          "Editor’s Note: Because the original ",
          {
            "type": "emphasis",
            "children": [
              "Walter the Farting Dog"
            ]
          },
          "is out of print, we were unable to get permission to run the image of that book with this review. Instead, the image above is of another installment in the ",
          {
            "type": "emphasis",
            "children": [
              "Walter"
            ]
          },
          " series."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
