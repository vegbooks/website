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
      "I was so happy to hear that the American Film Institute movie theatre near my home was running a Muppet retrospective. The Muppets were a huge part of my childhood, but haven’t been much a part of my kids’ lives. But with this retrospective, I set out to fix that shortcoming."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The first movie we attended was the original, “The Muppet Movie,” which came out in 1979. I was wondering how well this movie, now 37 years old, would hold up in modern society. I was happy to find that it holds up quite well. When we first meet the Electric Mayhem band, they are in the midst of turning an old country church into an organic coffee shop/night club, a scene that feels plucked from a movie today. In a very modern twist, gender roles are subverted when Miss Piggy saves her and Kermit’s life with her famous “Hiya!” chops and kicks. When Miss Piggy starts fighting, my 7-year-old daughter exclaimed, “Wow, she’s strong!” Later she said this was her favorite scene in the movie."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What I had forgotten about this movie was its source of conflict. The movie follows Kermit and Fozzie on their way to Hollywood to try to become famous. Along the way they are discovered by Doc Hopper, the owner of restaurant famous for its deep fried frog legs. Doc Hopper spends the entire movie trying to convince Kermit to star in commercials for his restaurant, something that Kermit describes as morally repugnant. My daughter talked about this storyline for days. I don’t think she was previously aware that people eat frog legs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/the-muppet-movie",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends this movie to ages 6+, but I think 3+ is more appropriate. Both of my kids loved this movie. My daughter loved Miss Piggy. My 3-year-old son loved “that singing frog.” There are many jokes that 3-year-olds will not understand, but they will love the crazy characters and the singing and dancing. Older kids will understand the plot more and get more of the jokes. There is really not a wrong age to watch the Muppets."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
