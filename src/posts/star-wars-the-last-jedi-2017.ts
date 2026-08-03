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
      "My family has mad love for all things Star Wars and the latest movie is no exception. We saw “The Last Jedi” as a family and my 8-year-old daughter said, “That was just amazing! It’s the best movie I’ve ever seen!”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The latest movies in the Star Wars franchise do an excellent job of presenting a diverse cast which includes males and female and people of different races and ethnicities. Many articles have been written about the role of women in “The Last Jedi,” such as this one from Bustle with the excellent title, “",
      {
        "type": "link",
        "href": "https://www.bustle.com/p/the-last-jedi-makes-treating-women-as-equals-seem-easy-because-it-is-7592812",
        "external": true,
        "children": [
          "The Last Jedi Makes Treating Women As Equal Seem Easy – Because It Is"
        ]
      },
      ".” The Last Jedi is a great movie to introduce to all children (males and females) for the diversity alone."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Another great aspect of the film that I wasn’t expecting is the treatment of animals. I was blown away by some aspects, detailed better than I can in ",
      {
        "type": "link",
        "href": "https://www.peta2.com/news/animal-rights-messages-in-the-last-jedi/",
        "external": true,
        "children": [
          "this article from Peta2"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The Last Jedi is rated PG-13. ",
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/star-wars-episode-viii-the-last-jedi",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends it for ages 10 and over. We watched it with our 8-year-old. My wife watched the movie first and then told our daughter the story, including who dies, so that she would be prepared to handle it in the theatre, which was a very helpful tactic."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Now go see the film! And May the Force Be With You."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
