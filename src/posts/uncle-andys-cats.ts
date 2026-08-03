import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/10/s-cats.jpg",
    "alt": "Uncle Andy’s Cats",
    "href": "/media/2011/10/s-cats.jpg",
    "width": 210,
    "height": 270,
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
            "href": "http://www.amazon.com/gp/product/0399251804/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0399251804",
            "external": true,
            "children": [
              "Uncle Andy’s Cats"
            ]
          }
        ]
      },
      " is the imaginative story of artist Andy Warhol’s life with many, many cats. Young cat lovers will giggle at the silliness of 25 cats all named Sam running rampant through Andy Warhol’s home, but animal advocates will wince at the unapologetic, unexplained depiction of overbreeding. Eventually, author ",
      {
        "type": "link",
        "href": "http://www.jameswarhola.com/childlit.html",
        "external": true,
        "children": [
          "James Warhola’s"
        ]
      },
      " (yes, he is one of Andy Warhol’s nephews) Uncle Andy realizes that he must reduce the size of his cat population, but even the superstar artist is hard-pressed to figure out how to do so. Uncle Andy’s solution is to collaborate with his mother on a series of ",
      {
        "type": "link",
        "href": "http://www.christies.com/features/2009-September-London-Andy-Warhol-25-Cats-Named-Sa-102-1.aspx",
        "external": true,
        "children": [
          "books about cats"
        ]
      },
      " and popularize the idea of having a Warhol cat. The idea is successful, everyone wants a cat and by the end of the story, only the original two cats remain at the Warhol residence."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "If only finding homes for cats were so straightforward! It isn’t. ",
      {
        "type": "link",
        "href": "http://www.aspca.org/about-us/faq/pet-statistics.aspx",
        "external": true,
        "children": [
          "Seven out of ten cats in shelters are euthanized."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Faaaaabulous author and commentator ",
      {
        "type": "link",
        "href": "/reviews/beautiful-yetta-the-yiddish-chicken/",
        "children": [
          "Daniel Pinkwater"
        ]
      },
      "doesn’t share my concerns about this story and wholeheartedly recommended this book to NPR host Scott Simon in 2009. Have a listen ",
      {
        "type": "link",
        "href": "http://www.npr.org/templates/story/story.php?storyId=112779118",
        "external": true,
        "children": [
          "here"
        ]
      },
      " to the two of them discussing this story and sharing in a reading of it — I do love their rapport when they get together to discuss children’s books!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Of course, this book provides a great framework for a discussion of why we spay and neuter animals. The silly story and engaging pictures keep a child’s interest, but so too do the imaginative plot twists and fun illustrations in the book ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/cats/",
            "children": [
              "It’s Raining Cats and Cats"
            ]
          }
        ]
      },
      ", which contains a much more valuable — and lifesaving — message of spay and neuter."
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
