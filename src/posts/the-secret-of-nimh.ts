import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Secret of NIMH (1982)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 318,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "When a mama mouse living in a field must save her family from the plow, including her son who is stricken with pneumonia, she discovers a secret world of super-intelligent rats who have suffered at the hands of vivisectors (at the National Institute of Mental Health, or NIMH) and are seeking to create a community of their own."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Decades before Hollywood gave the world ",
      {
        "type": "link",
        "href": "http://www.ourhenhouse.org/2011/08/film-analysis-rise-of-the-planet-of-the-apes/",
        "external": true,
        "children": [
          "“Rise of the Planet of the Apes,”"
        ]
      },
      " Don Bluth’s animated movie provoked thought about medical research on animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Replete with dark imagery, the story has many scary scenes, as well as depictions of animal cruelty. Families concerned with animal rights may appreciate that the film shines a light on ",
      {
        "type": "link",
        "href": "http://dawnofanewera.wordpress.com/2010/02/07/the-secret-of-nimh/",
        "external": true,
        "children": [
          "the “secret” of NIMH"
        ]
      },
      ": the barbaric treatment of animals in laboratories. Be prepared, however, for your kiddos to ask lots of questions. In addition to the animal laboratory scenes, which show animals living in barren cages and researchers administering injections, one scene depicts an owl killing a spider in a tree cavity filled with bones. Predation can be a difficult issue for vegetarian and vegan kids — particularly in movies where the animals have human-like traits."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G, this movie is geared to kids ages 6 to 10, although ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/secret-nimh",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends it for ages 8 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
