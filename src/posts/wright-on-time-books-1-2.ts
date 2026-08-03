import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/wot1-cover.jpg",
    "alt": "Wright on Time, Books 1 & 2",
    "href": "/media/2010/05/wot1-cover.jpg",
    "width": 205,
    "height": 314,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Roadschooling (v.): a nomadic form of homeschooling. For the Wright Family, this educational path calls for a cross-country adventure – RV style – that will eventually span 50 chapter books, authored by Lisa M. Cottrell-Bentley and illustrated by Tanja Bauerle."
    ]
  },
  {
    "type": "image",
    "src": "/media/2010/06/wot2-cover.jpg",
    "alt": "",
    "href": "/media/2010/06/wot2-cover.jpg",
    "width": 203,
    "height": 311,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Sister Nadia and her animated brother Aidan learn about the best America has to offer right alongside their parents in explorative, hands-on encounters. To date, the siblings have spelunked mineral-laden caves in Arizona where bats, iridescent scorpions and stunning geological formations abound and uncovered Allosaurus fossils in a Utah-based dinosaur dig. What kid wouldn’t want such an upbringing? Plus there’s mystery, suspense, and humor aplenty…and a great use of new vocabulary words and fun facts about each state."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This series is a fantastic find not only for its portrayal of a wholesome family, but one that shows alternative schooling and humane diets as an ordinary way of life. Although the term isn’t mentioned outright, the Wright foursome is vegan and enjoys classic beans and rice (Book 2), and crunchy peanut butter and prickly pear jam sandwiches (Book 1). ",
      {
        "type": "link",
        "href": "http://www.wrightontimebooks.com/",
        "children": [
          "Dig in and enjoy traveling with the Wright family."
        ]
      },
      " They know how to have a good time."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
