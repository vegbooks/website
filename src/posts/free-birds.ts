import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Movie pic",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "With high hopes, kiddo and I went to the theater to see the new animated family flick “",
      {
        "type": "link",
        "href": "http://www.imdb.com/title/tt1621039/",
        "external": true,
        "children": [
          "Free Birds"
        ]
      },
      "” on opening day last Friday. We knew from the previews that it would be funny, and sure enough, that’s what attracted the family we befriended while waiting for the movie to begin. But I had questions: ",
      {
        "type": "emphasis",
        "children": [
          "Would the turkeys prevail in their quest to get turkey off the Thanksgiving menu? And if so, would their victory get turkey off the menus of the families who flocked to see the movie?"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The answers: Yes, and probably not."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In short, the plot revolves around two modern-day turkeys traveling back in time to the first Thanksgiving to prevent the Pilgrims from hunting their wild ancestors. After a couple plot twists, they succeed, and the first Thanksgiving is celebrated with pizza, not turkey."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Still, I don’t have much faith that this movie will convince kids and parents to skip the bird this holiday. On the plus side, the movie does offer criticism of both free-range and confined animal feeding operations (CAFOs, or “factory farms”), going so far as to depict turkeys piled on top of each other in a large industrial facility. Wild turkeys are also depicted as being smart and resourceful, albeit anthropomorphized."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "On the flip side, modern-day domesticated turkeys are characterized as just plain stupid — so stupid, in fact that they welcome being selected for slaughter because they think the farmer is bringing them to “turkey paradise.” This, in my mind, offers parents a convenient out if their kids ask why a bird continues to be part of the holiday tradition."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The truth is, vegetarian and vegan kids will probably love this movie, as my daughter did. For them, it provides a new story about Thanksgiving and a cool, fun dish to serve as the focus of the meal: pizza. But this is mainstream Hollywood, and while the movie is good, it’s not revolutionary."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6 to adult."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
