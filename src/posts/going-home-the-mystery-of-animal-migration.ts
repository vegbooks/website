import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/08/9781584691273.jpg",
    "alt": "Going Home: The Mystery of Animal Migration",
    "href": "/media/2012/08/9781584691273.jpg",
    "width": 210,
    "height": 180,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Vegbooks favorite, author ",
      {
        "type": "link",
        "href": "http://www.teachingbooks.net/tb.cgi?aid=5120#AuthorInterviews",
        "external": true,
        "children": [
          "Marianne Berkes"
        ]
      },
      ", presents the concept of animal migration in the multi-tiered way I’ve come to enjoy in her books (",
      {
        "type": "link",
        "href": "/reviews/over-in-the-forest/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Over in the Forest"
            ]
          }
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "/reviews/over-in-the-jungle-a-rainforest-rhyme/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Over in the Jungle"
            ]
          }
        ]
      },
      "). For younger readers the book is a great read-aloud and the pictures are larger than life — migratory animals are shown in the foreground while their journeys and habitats make up the background of each two page spread. For older readers there are inset paragraphs offering interesting facts to complement the main text. For example, I learned that Canada Geese, by flying in a “V” formation, actually have an easier time in their flight because the pattern creates a current of air. Also new to me are Arctic terns, who, in seeking daylight, alternate their migration between summers in both Antarctica and the Arctic."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The 10 animals featured are also shown on a world map at the end of the book which makes the world feel both big and small at the same time. In addition to the Canada goose and Arctic tern, readers get to learn about the California grey whale, Caribou, Emperor penguins, Loggerhead turtles, Manatees, Monarch butterflies, Pacific salmon, and the Ruby-throated hummingbird. My daughter especially enjoyed how the male (“daddy”) Emperor penguins sat on each egg while the females (“mommies”) went off in search of food."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The rhymes also contribute to make ",
      {
        "type": "emphasis",
        "children": [
          "Going Home"
        ]
      },
      " another engaging winner from ",
      {
        "type": "link",
        "href": "http://www.dawnpub.com/",
        "external": true,
        "children": [
          "Dawn Publications"
        ]
      },
      " (I reviewed the ebook of this title that they provided to Vegbooks)."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
