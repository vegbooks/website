import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/04/momo-pictures-1.jpg",
    "alt": "Momo Come Home",
    "href": "/media/2012/04/momo-pictures-1.jpg",
    "width": 210,
    "height": 162,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Momo Come Home"
        ]
      },
      " addresses a topic of interest to many children – the disappearance of a beloved pet. At the start of this self-published picture book, the narrator is walking down the street with her small pet parrot, Momo, when the parrot suddenly flies away. The rest of the story chronicles the numerous attempts made by the narrator to find her parrot and get him back. The narrator eventually finds Momo after an extensive search, and she unsuccessfully attempts to catch Momo as the parrot keeps flying away. At the end of the story, after many repeated attempts, the narrator succeeds in catching her parrot."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The pictures are sweet, and the story held the attention of both my four-year old daughter and her four-year old friend as I read it to them. The book has some grammatical errors and at times the wording is a bit awkward. However, this went totally unnoticed by my four-year old audience, who remained content throughout the reading."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Throughout the story, the narrator’s love and concern for her parrot shine through. Some vegan families may really appreciate the depth of the love that the narrator feels for Momo. Other vegan families may have questions about whether or not an escaping pet bird may be demonstrating a desire to be free. The story can perhaps serve as a starting point for a discussion with vegan children about both perspectives – the love people can feel for pets, as well as what habitats are best for various animals."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
