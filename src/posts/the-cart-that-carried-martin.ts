import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/10/cart-that-carried-martin-300.jpg",
    "alt": "CartThatCarriedMartin_300",
    "href": "/media/2013/10/cart-that-carried-martin-300.jpg",
    "width": 210,
    "height": 190,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Eve Bunting’s latest work has my passion for animals, culture, history, artifacts, and social justice all wrapped up into one children’s book that addresses a brief, albeit important moment in our nation’s collective memory: the funeral procession of Martin Luther King Jr."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.charlesbridge.com/productdetails.cfm?PC=5786",
            "external": true,
            "children": [
              "The Cart that Carried Martin"
            ]
          }
        ]
      },
      "doesn’t focus on Dr. King’s civil rights efforts, but on the mourning rituals that were carried out to honor his life and legacy. A simple wooden cart was discovered outside an antique shop, painted green, and selected to transport Martin from the church, through the streets of Atlanta, Georgia and finally to Morehouse College. This is how museum-housed artifacts are made. Simple, everyday objects that had a front row seat to historic events."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "You know who else has a front row seat more often than we realize? Animals. Belle and Ada were the two mules that pulled the cart –"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "“Ordinary mules for an ordinary funeral,” the people told one another. “That was what he wanted.”"
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "“The mule is a symbol of freedom,” someone said. “Each slave got a mule and forty acres when he was freed.”"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Isn’t it interesting that mules are considered symbols of freedom, but are domesticated and used for labor purposes themselves?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The mules take readers through the crowded streets and church scenes, where it becomes clear that this man is not gone. His great spirit lives on. In our hearts. In our memories. In our values. The beautiful art of Don Tate matches Bunting’s eloquent prose and truly brings this momentous occasion and King’s legacy to light."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The cart can now be seen at the ",
      {
        "type": "link",
        "href": "http://www.nps.gov/malu/index.htm",
        "external": true,
        "children": [
          "Martin Luther King Jr. National Historic Site"
        ]
      },
      ". Dr. King’s love for animals continues with his widow, Coretta Scott King, who follows a vegan lifestyle."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6 – 9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
