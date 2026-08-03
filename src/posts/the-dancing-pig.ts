import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/the-dancing-pig.jpg",
    "alt": "The Dancing Pig",
    "href": "/media/2011/07/the-dancing-pig.jpg",
    "width": 210,
    "height": 260,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This colorful picture book by ",
      {
        "type": "link",
        "href": "http://www.judysierra.net/bio.htm",
        "external": true,
        "children": [
          "Judy Sierra"
        ]
      },
      " and Jesse Sweetwater brings to life a folktale from Bali, in which a dancing pig saves twin girls from an ogress. Using bold illustrations and expressive language, ",
      {
        "type": "emphasis",
        "children": [
          "The Dancing Pig"
        ]
      },
      " recounts the rescue — which involves a bunch of musical frogs and a mouse — and the family’s loving reunion."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In addition to the visual appeal and the fairytale quality of this book, I appreciate the book’s treatment of animals. We know the twins are kind because they regularly leave a bit of food on the ground for the mouse and they spend time with the family pig, performing dances for her so that she will be a little less lonely. When they are abducted, their mother unquestioningly follows the directions of the pig, in hopes of getting her children back. And in the end, the family’s reunion is portrayed by the mother and two girls gazing adoringly at the pig."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents concerned about the ",
      {
        "type": "link",
        "href": "http://msmagazine.com/blog/blog/2011/05/25/where-are-the-girls-in-childrens-lit/",
        "external": true,
        "children": [
          "portrayal of women and girls in children’s books"
        ]
      },
      " — and I’m among them — will appreciate that all of the characters are either depicted as female or else their gender is not indicated. (Interestingly, there are few female pigs in children’s literature. ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/24178.Charlotte_s_Web",
        "external": true,
        "children": [
          "Wilbur"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "/reviews/a-garden-for-pig/",
        "external": true,
        "children": [
          "Pig"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "/reviews/perfect-the-pig/",
        "children": [
          "Perfect"
        ]
      },
      ", and ",
      {
        "type": "link",
        "href": "/reviews/granny-gomez-and-jigsaw/",
        "children": [
          "Jigsaw"
        ]
      },
      " are all male. Serena in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/no-place-for-a-pig/",
            "children": [
              "No Place for Pig"
            ]
          }
        ]
      },
      " is the only other female who comes to mind.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
