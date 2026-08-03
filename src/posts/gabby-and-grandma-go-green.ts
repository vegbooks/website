import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/gabby-and-grandma.jpg",
    "alt": "Gabby and Grandma Go Green",
    "href": "/media/2011/07/gabby-and-grandma.jpg",
    "width": 210,
    "height": 177,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Author and illustrator ",
      {
        "type": "link",
        "href": "http://www.monicawellington.com/",
        "external": true,
        "children": [
          "Monica Wellington’s"
        ]
      },
      " ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0525422145/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0525422145",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Gabby and Grandma Go Green"
            ]
          }
        ]
      },
      " is a very sweet book for young children about, yes, going green. Little Gabby and her grandma spend the day together sewing reusable cloth bags, heading to the recycling center, going to the grocery store and declining the proffered grocery bag, shopping at the farmer’s market where they are thanked for buying local, preparing sandwiches and having a picnic. Gabby even refrains from feeding the ducks at the park because she knows they have their own food. Their last stop is the library– a very green choice!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is cute, with green tips peppered throughout and a pattern for a reusable cloth bag at the end. I loved Grandma’s kitty, who is featured in many of the illustrations, and the fact that Gabby is excited to sew her mama a bag when she gets home. Many young children will relate to the love and joy Gabby feels being with her grandmother."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegans will want to note that Gabby and Grandma buy eggs and cheese at the farmers market — unspoken is that these are ",
      {
        "type": "link",
        "href": "http://www.brightergreen.org/entry.php?id=301",
        "external": true,
        "children": [
          "not truly green food choices"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All told, this is a storybook which will either serve to reinforce green household habits or inspire new ones."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
