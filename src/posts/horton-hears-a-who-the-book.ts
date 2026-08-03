import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/978-0-394-90078-01.jpg",
    "alt": "Horton Hears a Who!",
    "width": 144,
    "height": 168,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Dr. Seuss’s classic is a fantastic way to teach your kids about the importance of sticking up for the defenseless. When Horton the Elephant hears the microscopic Whos on a speck of dust, he doesn’t stop to question whether his interests should override theirs. Instead, he does everything in his power to protect them, because after all, “a person’s a person, no matter how small.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book recognizes in animals something our society, and certainly ",
      {
        "type": "link",
        "href": "http://findarticles.com/p/articles/mi_m0FRO/is_2_133/ai_60129620/",
        "external": true,
        "children": [
          "our legal system"
        ]
      },
      ", does not: that ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Sentience#Non-human_animal_rights_and_sentience",
        "external": true,
        "children": [
          "sentient"
        ]
      },
      " animals share characteristics (such as ",
      {
        "type": "link",
        "href": "http://www.empathogens.com/empathy/animal.html",
        "external": true,
        "children": [
          "empathy"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://www.pbs.org/wnet/nature/episodes/inside-the-animal-mind/introduction/2081/",
        "external": true,
        "children": [
          "intelligence"
        ]
      },
      ", and ",
      {
        "type": "link",
        "href": "http://www.msnbc.msn.com/id/7348880/",
        "external": true,
        "children": [
          "humor"
        ]
      },
      ") with human beings and that they should be treated as “persons,” at least so far as they shouldn’t be killed for trivial concerns."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8. For more reviews, click ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/book-reviews/Horton-Hears-Who.html",
        "external": true,
        "children": [
          "here"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
