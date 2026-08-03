import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Babe (1995)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’d seen “",
      {
        "type": "link",
        "href": "http://www.rottentomatoes.com/m/1065598-babe/",
        "external": true,
        "children": [
          "Babe"
        ]
      },
      "” years ago, at a time when I was neither a child nor a parent, so it was fun to revisit the movie with my 4-year-old daughter. What I’d forgotten, or perhaps hadn’t noticed, about the 1995 live-action flick when I’d seen it the first time was that it has a certain darkness and wry humor that you don’t often see in kids movies. In fact, the voice-over, timelessness of the sets and costumes, and the very slight edginess reminded me of the more recent TV show “Pushing Daisies,” which was geared to an adult audience."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian parents probably already know that “Babe” deals with the issue of meat, but I was delighted to learn that the film actually makes kids grapple with why people eat some animals but not others. As the animal characters’ explanations are not very satisfactory — the cat, for example, explains that the cow is for milking, the dogs are for tending sheep, cats are for being beautiful, and ducks and pigs are for eating — viewers must answer the question for themselves. And just so the vegetarians don’t get too smug in their answer that no animal is meant for eating, the film pushes a little further, sparing Babe from becoming Christmas dinner while sacrificing a previously unseen duck instead. Watching Ferdinand the duck mourn over the loss of his friend, makes you feel just a little guilty that you felt a pang of relief when you saw duck, rather than pig, was for dinner."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is the kind of movie that the entire family can enjoy together, and vegetarians in particular will be delighted by ",
      {
        "type": "link",
        "href": "http://www.imdb.com/title/tt0112431/quotes",
        "external": true,
        "children": [
          "all the great lines"
        ]
      },
      " in this movie. (“Pork, they call it – or bacon. They only call them pigs when they’re alive.”) Even if you’ve seen it before, the writing, the scenery, and the thematic elements make this a film worth revisiting."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. Captivating for kids as little as ages 4 and 5 with a little adult explanation."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
