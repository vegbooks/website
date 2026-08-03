import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "href": "/reviews/the-little-mermaid/",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "For a recent family movie night, I settled down with my kiddo and husband (and a big bowl of popcorn) to watch the 2012 Tim Burton flick “Frankenweenie.” Spoofing on ",
      {
        "type": "emphasis",
        "children": [
          "Frankenstein"
        ]
      },
      ", the plot revolves around a boy’s loss of his dog, his quest to revive his faithful companion, and the mayhem that ensues when the other kids decide to revive a variety of other animals they’ve dug up from the local pet cemetery."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG, this is really a movie for older kids, and my 8-year-old was definitely creeped out at parts. The black-and-white cinematography and the slightly grotesque characters add to the effect."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This film deserves props for accurately depicting the grief that people feel at the loss of a companion animal. And the plot is riveting enough to keep the interest of adults as well as kids."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Where I think this film fell flat was in its depiction of female characters. None of the companion animals in the film are female, and the only two girls and one woman in the movie exist solely in relation to the main character (prophet, love interest, mother). My kiddo was also disturbed that her favorite character in the movie, a feline named Mr. Whiskers, is stabbed through the heart with a stake near the end of the movie. In fairness, he ",
      {
        "type": "emphasis",
        "children": [
          "had"
        ]
      },
      "turned into a vampire bat-cat, but still, my kiddo couldn’t understand why he could not just return to being a cat again."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8 and up."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Have you seen “Frankenweenie,” or any of Tim Burton’s other movies? Tell me what you thought in the comments!"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
