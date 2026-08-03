import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/07/9781585368334.jpg",
    "alt": "9781585368334",
    "href": "/media/2013/07/9781585368334.jpg",
    "width": 210,
    "height": 255,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "When I opened the box containing this review copy from Sleeping Bear Press, my visiting sister-in-law told me that she had just finished a unit of teaching with her third graders about “paper sons” in American History. So I knew this might not be the best fit for my young children because the subject matter is for an older crowd but that doesn’t mean I didn’t find the book beautiful and riveting. Becoming a “paper son” involved learning to pretend to be family of someone in the United States for immigration purposes after the aftermath of 1906 San Francisco earthquake meant that records had been lost to fire."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recall our immigration textbook in law school beginning with things like the ",
      {
        "type": "link",
        "href": "https://en.wikipedia.org/wiki/Chinese_Exclusion_Act",
        "external": true,
        "children": [
          "Chinese Exclusion Act"
        ]
      },
      " but will admit that the existence of “paper sons” was new to me and this fictionalized account of one young boy preparing to leave everything he knows for a chance at the American Dream did a fantastic job of giving the reader a hint of what it must have been like for Chinese immigrants in the early 1900s."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Much of my elementary level education in history that stuck with me came from historical fiction, and with immigration on the forefront of news today and the recent celebration of the Fourth of July, I highly recommend this book. It may be a novel concept to children today that people would risk everything to come to the United States. As an immigrant myself (albeit from the United Kingdom) my own experiences taught me that it was a privilege to be here but my U.S. born children will hopefully learn about my experiences and those of others before us through books such as ",
      {
        "type": "emphasis",
        "children": [
          "Paper Son"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’ll leave you with a bit of a spoiler (the book is touch and go about whether Lee will make it through the interrogation process on Angel Island):"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "In San Francisco his new future greeted him. Lee welcomed his paper father like PoPo had taught him. “Hello. My name is Fu Lee. My father, Fu Ming, is an American and so am I.”"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
