import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We took our seven-year-old to watch this delightful movie about a big friendly vegetarian giant and the entire family enjoyed it. Directed by Steven Spielberg, the live action and CGI cast bring this lovely story to life. The giant’s CGI features are so friendly and loveable."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Based on the chapter book of the same name by Roald Dahl (author of ",
      {
        "type": "emphasis",
        "children": [
          "Charlie and the Chocolate Factory"
        ]
      },
      " and ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/the-magic-finger/",
            "children": [
              "The Magic Finger"
            ]
          }
        ]
      },
      "), “The BFG” tells the story of a Big Friendly Giant who chooses not to eat human beings like all the other giants. The giant captures a little girl, Sophie, and they become great friends."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There is a nice representation of what it is like to fear being eaten as Sophie at first thinks The BFG is going to eat her and then several scenes of Sophie being hunted by the other giants who do eat people. Sophie and The BFG concoct a plan to stop all of the other giants from eating people, a successful plan in which none of the giant’s is harmed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I was really looking forward to this movie because the book has such a strong vegetarian message. The movie removes many of the conversations in which Sophie and The BFG discuss vegetarian topics. But there is still a strong vegetarian vibe to this movie and a vegetarian child will really enjoy it. There are not a lot of scary parts–a few scenes in which giants are hunting Sophie and a few scenes in which the other giants bully The BFG. But overall it’s not a super scary movie. There are some flatulence jokes which my seven year old said was her favorite part but others may consider crass."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG. ",
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/the-bfg",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends this movie for ages 7+ and my seven-year-old really loved it."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
