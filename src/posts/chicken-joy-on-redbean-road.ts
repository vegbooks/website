import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/0618507590-lres.jpg",
    "alt": "Chicken Joy on Redbean Road",
    "href": "/media/2010/09/0618507590-lres.jpg",
    "width": 210,
    "height": 245,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What a wonderful book for vegetarian and vegan kids! ",
      {
        "type": "link",
        "href": "http://www.jacquelinebriggsmartin.com/books/chickenjoy.html",
        "external": true,
        "children": [
          "Jacqueline Briggs Martin"
        ]
      },
      " and Melissa Sweet team up to create a playful adventure book about saving a chicken."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Set in the bayou, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://books.google.com/books?id=1RboKjr5u6gC&printsec=frontcover&dq=chicken+joy+on+redbean+road&source=bl&ots=ZwIHMNUAT_&sig=Y0_rH9fYMKPvQovGCQRkelxz0wE&hl=en&ei=2uuETL-lKoK78gbEhMTeAQ&sa=X&oi=book_result&ct=result&resnum=3&ved=0CB8Q6AEwAg#v=onepage&q&f=false",
            "external": true,
            "children": [
              "Chicken Joy on Redbean Road"
            ]
          }
        ]
      },
      " is the story of a rooster who lost his ability to sing. Because a rooster who doesn’t rouse the barnyard has no use on a working farm, the other animals realize his life is in danger. Thus, the hen sets out to get help from the most powerful man around — a renowned musician — while an anonymous animal keeps distracting the farmer by putting vegetables in her path, which causes the farmer to focus on cooking her stew before she slaughters the rooster."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The hen, the musician, other neighbors, and the animals all end up saving the rooster’s life by having a huge party/ concert in the barnyard — which distracts the farmer and inspires her to sell vegetable stew (without any rooster)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "At the end of the party, all the farmed animals are mysteriously gone — and there’s a suggestion that they may have gone to live with the musician."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8. To learn more about the zydeco music that’s featured in the book, visit ",
      {
        "type": "link",
        "href": "http://www.mcbookwords.com/books/chickenjoy_zydeco.html",
        "external": true,
        "children": [
          "McBookWords"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
