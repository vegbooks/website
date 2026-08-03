import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Princess and the Frog (2009)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I have to admit that a good part of my enchantment with Disney’s 2009 flick “The Princess and the Frog” has to do with its toe-tapping soundtrack, and the role that jazz plays in the New Orleans-based storyline. This ",
      {
        "type": "link",
        "href": "http://www.imdb.com/title/tt0780521/",
        "external": true,
        "children": [
          "retelling of the Frog Prince"
        ]
      },
      ", now available on DVD, also features beautiful animation and a spunky princess who is notably less passive, and harder working, than some of the older Disney princesses."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Families interested in animal rights will likely cringe when the lead character Tiana first encounters the prince-turned-frog: she shrieks and tries to flatten him with a book. In her defense, he ",
      {
        "type": "emphasis",
        "children": [
          "was talking"
        ]
      },
      " to her. And it would be an understatement to say that when Tiana herself becomes a frog, she begins to appreciate the amphibians a little bit more. Your kids probably will too. Add on that two of the most likable characters in the entire movie are a crocodile and a lightning bug, and all in all, you’ve got a pretty animal-friendly movie."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While this movie doesn’t have the same kind of witty one-liners that have delighted me in other Disney flicks (take, for example, ",
      {
        "type": "link",
        "href": "/reviews/the-little-mermaid/",
        "children": [
          "“The Little Mermaid”"
        ]
      },
      "), I did appreciate the running joke that frogs are not covered in slime, but in mucus."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. Ages 5-12. For activities related to the movie, visit ",
      {
        "type": "link",
        "href": "http://family.go.com/disney/pkg-disney-character-fun/pkg-disney-princess-and-the-frog/",
        "external": true,
        "children": [
          "Disney Family"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
