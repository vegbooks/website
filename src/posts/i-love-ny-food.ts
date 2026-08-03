import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/0-cover-revised.jpg",
    "alt": "I Love NY Food",
    "href": "/media/2011/11/0-cover-revised.jpg",
    "width": 210,
    "height": 263,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/1934597562/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=1934597562",
            "external": true,
            "children": [
              "I Love NY Food"
            ]
          }
        ]
      },
      " is a inviting coloring book full of pleasing, eye-catching drawings inspired by New York City’s abundant food options. Unlike ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/happy-thanksliving/",
            "children": [
              "Happy Thanksliving"
            ]
          }
        ]
      },
      ", this is not a strictly veg-friendly coloring book and there are depictions of meat, seafood and cheese."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In recent years, there has been a proliferation of cruelty-free meat and dairy alternatives which means that many veg kids are pretty familiar with options like vegan or vegetarian cheese, hot dogs, sausages, burgers, pepperoni, soft serve and cream cheese. Therefore, in my opinion, there are only a few pages that are verging on ",
      {
        "type": "link",
        "href": "http://suicidefood.blogspot.com/",
        "external": true,
        "children": [
          "Suicide Food"
        ]
      },
      " — the Soul Food page’s drumstick and shrimp, for example, and pages depicting sushi. ",
      {
        "type": "emphasis",
        "children": [
          "I Love NY Food"
        ]
      },
      " includes bonus vegetarian pages, featuring selections that are typically considered vegetarian fare (though veg-friendly food choices like Chinese, pretzels, pierogi, pizza and falafel are featured in the main section). This book is very light on text."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Where this book really shines is with its simple, friendly pictures just waiting for a crayon or marker. Once colored in, each page is a bright treatment of that particular food choice. We enjoyed coloring the array of foods and discussing the bounty of choices that New York offers. Even if you don’t live in or near the city that never sleeps, your young family members and friends will probably enjoy coloring in this fun book, though those who do not wish to see depictions of any animal products may choose to remove or glue together some of its pages, or simply use them as a catalyst for discussion."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 1 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
