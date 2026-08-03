import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Wurst Case Scenario",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0064472876",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0064472876?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0064472876",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Wurst Case Scenario"
            ]
          }
        ]
      },
      " is a young adult novel chronicling the coming-of-age of a young vegan woman as she moves from her hometown in Colorado to begin college in Wisconsin. Author ",
      {
        "type": "link",
        "href": "http://www.harpercollins.com/author/microsite/About.aspx?authorid=11087",
        "external": true,
        "children": [
          "Catherine Clark"
        ]
      },
      "does an excellent job of letting us eavesdrop in on her character, Courtney Van Dragen Smith, as we witness Courtney’s transitions and experiences through the pages of her diary."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Courtney is as complicated as most women in their late teens are, especially when in the midst of major life changes. Her long distance relationship with her beloved boyfriend Grant, her exploration of various cultures and sub-cultures in a college setting, her experiences with her dorm-mates, new friends (and foes) and her veganism are all captured in this book. While occasionally some entries veer into seeming contrived, overall the book is a fun read and the mini-dramas are mainly of the temporary, lighter hearted sort. Courtney’s veganism is front and center in this book, and while she does seem to struggle with it at times, she generally remains committed to her lifestyle. While many vegans may not always appreciate the way Courtney’s vegan choices are portrayed, almost all vegans will be able to nod or smile in recognition at some of the situations in which she finds herself. Sex and drinking are either alluded to or discussed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A good read for anyone ready to read about a fictionalized first college year."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
