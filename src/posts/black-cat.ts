import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/black-cat-cover.jpg",
    "alt": "Black Cat",
    "href": "/media/2011/08/black-cat-cover.jpg",
    "width": 210,
    "height": 258,
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
            "href": "http://www.amazon.com/gp/product/0590033751/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0590033751",
            "external": true,
            "children": [
              "Black Cat"
            ]
          }
        ]
      },
      " is the rhythmic, melodious story of a black cat who moves through the urban environment of New York City — and not the ",
      {
        "type": "link",
        "href": "/reviews/pale-male-citizen-hawk-of-new-york-city/",
        "children": [
          "opulent neighborhood that redtailed hawk Pale Male chose as his home"
        ]
      },
      ". ",
      {
        "type": "link",
        "href": "http://www2.scholastic.com/browse/contributor.jsp?id=3258",
        "external": true,
        "children": [
          "Christopher Myers’s"
        ]
      },
      " graphic collage illustrations captivate us as he takes us through some of the aspects of urban life that are less frequently chronicled in children’s literature. The collages serve to illustrate the answer to the narrator’s question to the black street cat: where is your home? As the feline passes through busy urban streets, decaying housing projects, graffiti covered walls, no-netted basketball hoops and across bodega signs, he corroborates the reader’s suspicion that his home is anywhere he roams."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids who love cats will likely want to talk about life on the streets from the cat’s perspective. This artful book opens the door to important conversations about homeless animals– even those who believe their home is wherever they may roam."
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
