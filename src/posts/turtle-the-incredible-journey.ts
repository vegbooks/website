import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Turtle: The Incredible Journey (2009)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Following a loggerhead turtle from her hatching on a Florida beach until she returns 25 years later to lay eggs of her own, “",
      {
        "type": "link",
        "href": "http://www.turtle-film.com/",
        "external": true,
        "children": [
          "Turtle: The Incredible Journey"
        ]
      },
      "” is a visual feast, with beautiful images of life underwater and in far-flung places along the Atlantic."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The film also has a strong conservation theme. On her journey, the turtle encounters plastic bags floating in the ocean that resemble jellyfish (her favorite food) and is nearly hit by a massive cargo ship. She survives both encounters, but the danger is palpable, and the ship breaks up the seaweed mass that she used for resting and feeding as a newly-hatched turtle, leaving other sea creatures without habitat, certain to die."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "And there’s more than that. There’s sex. Violence. Even death. It’s a testament to our ability to separate ourselves from other species that this movie is rated G. I was able to sit next to my 6-year-old daughter without squirming as two turtles coupled in an extended 30- or 60-second scene. We winced a bit as predators ate other turtles, but chalked it up to the intricate food web, secure in our knowledge that the filmmakers would not depict “our” turtle, the protagonist, being eaten alive. But all this reflects far more on us than it does on the film, which is nothing short of wonderful."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Available on DVD/Blu-ray, on cable, and streaming on Netflix, this movie is appropriate for all ages."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
