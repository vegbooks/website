import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Cherry and Olive",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 140,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Move over ",
      {
        "type": "link",
        "href": "/reviews/mama-is-it-summer-yet/",
        "children": [
          "Nikki McClure fans"
        ]
      },
      ", there’s a new hot shot artist-author on the Vegbooks blog. He’s Parisian. A little dark. A little gothic. And he has my heart. Ladies and gentlemen, meet ",
      {
        "type": "link",
        "href": "http://www.benjaminlacombe.com/home_e.html",
        "external": true,
        "children": [
          "Benjamin Lacombe"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Cherry, who doesn’t actually like the fruit she’s named after, is a plump, alienated child who finds refuge from her schoolmates in the adventures that unfold in her books. After school, she volunteers at her father’s animal shelter, helping to clean cages. One day she meets her kindred spirit in a round and wrinkly canine she names Olive. Since Olive’s owners will likely come looking for her, her father warns, Cherry shouldn’t get attached. Little Miss can’t help but do just that, in hopes that they never come for her only friend. I won’t give away the ending, but if you, like Cherry, enjoy chocolate, you’ll be sweet on the finale too."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is well suited to the following discussion topics: bashfulness/feelings, “broken” families, friendship, tolerance, and charity/animal welfare. All that in a mere 32 pages!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
