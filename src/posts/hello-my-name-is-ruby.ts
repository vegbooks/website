import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2020/08/hello-my-name-is-ruby.jpg",
    "alt": "Hello, My Name is Ruby",
    "href": "/media/2020/08/hello-my-name-is-ruby.jpg",
    "width": 341,
    "height": 400,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781596438095",
        "external": true,
        "children": [
          "HELLO, MY NAME IS RUBY"
        ]
      },
      " by Philip C. Stead is a charming story of a tiny bird with a big heart who meets many new friends with different personalities and skills. Ruby, the title character, travels around introducing herself to fellow birds of all sizes, hoping to get to know them better. The illustrations are colorful and childlike, with just enough detail to entice small readers to inspect closely and admire feathers and shapes and feet and beaks. HELLO, MY NAME IS RUBY is a wonderful book to share before a child starts on a new adventure with enthusiasm or with shyness, with positive results or with disappointment."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ruby’s perseverance and sweetness would be enough to carry this picture book, but the supporting characters make sure that everyone will find someone to champion in the story. None of the birds are labeled by species, but by attributes. A colorful Kiwi shows Ruby that not all birds fly to get around, and a disinterested Peacock makes Ruby sad for a moment, allowing us to see how Ruby handles rejection: with a sad song. Each interaction teaches Ruby something about the world and new skills, until finally Ruby finds an entire flock of birds just like her and introduces her new friends to the flock (peacock excepted…)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations have visible lines and “squiggles” throughout, and the colors don’t always stay inside the lines perfectly. Children tend to respond well to this style because they recognize their own tendencies in it. Despite the intentional roughness, emotions jump out at readers. When Ruby is excited, it’s clear she is happy. The curious Ostrich really looks curious, and even the Kiwi has a perplexed look when asking, “What is flying?”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Finding friends and a place for oneself can be a challenge, and ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781596438095",
        "external": true,
        "children": [
          "HELLO, MY NAME IS RUBY"
        ]
      },
      " uses little Ruby to show children that while the world is a big place with lots of different types of friends, we each have a place in it. Highly recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
