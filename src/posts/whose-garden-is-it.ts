import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/garden.jpg",
    "alt": "Whose Garden Is It?",
    "width": 215,
    "height": 233,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As someone who believes that at the very least ",
      {
        "type": "link",
        "href": "http://animals.change.org/blog/view/legal_rights_for_animals_the_debate",
        "external": true,
        "children": [
          "animals deserve rights"
        ]
      },
      " equal to, say, ",
      {
        "type": "link",
        "href": "http://challengeoppression.com/2010/01/25/on-corporate-personhood-and-animal-rights/",
        "external": true,
        "children": [
          "corporations"
        ]
      },
      ", I’m disturbed that our legal system treats them as property. So when I read Mary Ann Hoberman’s ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.maryannhoberman.com/books/whoseGardenIsIt.html",
            "external": true,
            "children": [
              "Whose Garden Is It?"
            ]
          }
        ]
      },
      ", I was delighted to see that she tackled a complex issue like ownership in a way that is both eco- and animal-friendly and accessible to small children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ms. Hoberman’s thoughtful text, accompanied by ",
      {
        "type": "link",
        "href": "http://www.rmichelson.com/Artist_Pages/DyerJane/Jane%20Dyer%20Prints.html",
        "external": true,
        "children": [
          "Jane Dyer’s"
        ]
      },
      " whimsical illustrations, gives voice to the different interests who claim a suburban garden as their own: the gardener, the wildlife, the plants, the soil, the seed, and the sun. At the end, the reader is left with no definitive answer to the question, “Whose Garden Is It?” Instead, we’re all left to wonder what’s really ours, and what it’s like to live in a community of beings."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Teachers might enjoy learning that the story is also available in ",
      {
        "type": "link",
        "href": "http://www.schoollibraryjournal.com/article/CA6445419.html",
        "external": true,
        "children": [
          "DVD format"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
