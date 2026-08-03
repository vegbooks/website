import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/harry-by-the-sea-pb.jpg",
    "alt": "Harry by the Sea",
    "href": "/media/2010/11/harry-by-the-sea-pb.jpg",
    "width": 210,
    "height": 293,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "At first glance, I thought that ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.commonsensemedia.org/book-reviews/Harry-by-Sea.html",
            "external": true,
            "children": [
              "Harry By The Sea"
            ]
          }
        ]
      },
      " would become a favorite in our house, but after reading it once with our daughter, I quietly stuck it in our basement storage, hoping that it would soon be forgotten."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story starts with Harry the dog going to the beach with his family. There’s not enough room for him under his family’s umbrella, so his family tells him to leave. Throughout the book, all the characters that Harry encounters are less than kind to him – telling him to “get lost,” etc. When Harry gets completely covered with seaweed, he is mistaken for a sea monster, and at this point the people he encounters become even more unkind. The beach attendants try to capture him to take him to an aquarium. At the end of the story, after he becomes clean and recognizable again, he reunites with his family, who finally decide to get a bigger umbrella so Harry can be included."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The family’s change of heart at the end feels like too little too late, especially when it seems like the reader is supposed to find it funny that all the people around Harry are cruel to him. Vegetarian families may also dislike the recurring mention of hot dogs and hamburgers throughout the book. And we also could have done without seeing one of the characters referred to as “a fat lady.” All in all, we felt like we were better off putting this book in basement storage rather in our daughter’s bookcase."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
