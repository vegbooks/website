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
      "We were excited to see this movie as a family. We’re dog people and happen to have a pug a lot like the character Mel (voiced by Bobby Moynihan) in the movie. We saw it on vacation at an awesome ",
      {
        "type": "link",
        "href": "http://www.sunsetdrivein.com/",
        "external": true,
        "children": [
          "drive-in theater"
        ]
      },
      " in Burlington, VT, which just enhanced our movie watching experience."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The movie follows Max, a terrier mix (voiced by Louis C.K.) who lives with Katie (voiced by Ellie Kemper) in New York City. Katie and Max’s relationship is so cute it makes you want to snuggle with you dog. The premise of the movie is that during the day while the owners are at work, pets hang out together. When we meet Max, he is asked by his neighbor friends what he would like to do that day. He just sits by the door and says, “I’m just going to wait here for Katie. I miss her so much.” And so Max is really thrown for a loop when Katie rescues Dude (voiced by Eric Stonestreet), a massive mutt, from the shelter. Katie tells Max that she knows Dude is overwhelming, but she couldn’t stand the though of him in the shelter with no one to love him. The main action of the story begins when Max and Dude, fighting with each other, get lost on the streets of New York one day while Katie is at work. The story follows Max and Dude through a series of adventures throughout New York trying to find their way back to Katie, and in the mean time, learning to be brothers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story is cute. It’s jumpy and active, much like a hyper dog. It’s a bit much for me, but the rest of my family loved it. The thing that makes it interesting for a review on Vegbooks is that it offers a well-rounded look at the way pets are treated. The main characters are beloved pets but there is a group of outcast pets that Max and Dude encounter on the streets. These are pets that were mistreated by their owners and now roam the streets as a rough gang. They all share their stories, and your heart goes out to them. The one story that I remember is that of Tattoo (voiced by Michael Beattie), a pig that lived in a tattoo parlor and was used by the owner to practice tattoo techniques. This street gang represents the dark side of pet ownership."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Anyone with pets, especially dogs, will enjoy this movie. ",
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends it for ages 6+. Both my 7-year-old and 3-year-old loved it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
