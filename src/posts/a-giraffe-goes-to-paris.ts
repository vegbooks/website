import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/giraffe.jpg",
    "alt": "A Giraffe Goes to Paris",
    "href": "/media/2011/06/giraffe.jpg",
    "width": 210,
    "height": 269,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As a follow-up to her historical fiction piece on ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Clara_%28rhinoceros%29",
        "external": true,
        "children": [
          "Clara the Rhino"
        ]
      },
      ", author/ curator/ teacher Mary Tavener Holmes depicts the life and travels of one other influential animal in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0761455957/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217153&creative=399349&creativeASIN=0761455957",
            "external": true,
            "children": [
              "A Giraffe Goes to Paris"
            ]
          }
        ]
      },
      ". Born in 1824, Belle is given to the King of France, Charles X, as an exotic gift from the Pasha of Egypt, Muhammad Ali. The person charged with her care during the voyage is Atir, who also serves as the story’s narrator."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Like Clara, Belle was an absolute sensation. No one had seen the likes of her before: “Was she some kind of camel? She had spots like a leopard’s. She had a long tongue, almost like a snake’s. And she walked so strangely – first her two rights legs, then her two left legs – so she was not a horse. What was she? Everyone had a different idea.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Belle’s trip involved some additional pondering such as how to transport her on a boat (think: a hole carved out of the top deck for her neck) or how to get her to Paris (Let’s just have her walk all 500 miles over 41 days!). For food, they provided her with cow’s milk and, for companionship, a few antelopes. From an animal rights perspective, there’s a host of ethical issues in this historical narrative, but there’s no denying that it’s an interesting tale."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From Belle tchotchke to giraffe-inspired hairdos to the thousands that flooded Le Jardin Des Plantes to see her (where she spent the remaining 18 years of her life with Atir), it’s easy to acknowledge that the people of France were in love with this docile creature. What I appreciate most in this book is the way in which illustrator Jon Cannell incorporates actual artifacts and artwork into his design work. My only criticism would be that there is no discussion guide for teachers, parents or students; without ethical commentary or queries (should wild animals be given as gifts?), history loses its significance and becomes disjointed from the present and future. Otherwise, ",
      {
        "type": "emphasis",
        "children": [
          "A Giraffe Goes to Paris"
        ]
      },
      " is a great tidbit from human-animal studies and one that shows Atir’s sincere commitment to Belle and her welfare (as you’ll see, if you pick up a copy!)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6-9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
