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
      "After watching “The Goonies” recently, my 9-year-old daughter has developed a taste for movies from my childhood. (Side note: did you know the actors who played ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Sean_Astin",
        "external": true,
        "children": [
          "Mikey"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Corey_Feldman",
        "external": true,
        "children": [
          "Mouth"
        ]
      },
      " in “The Goonies” are now vegetarians?)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "So, on family movie night, we gave “Harry and the Hendersons” a whirl."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I had forgotten that the opening scene depicts the father and son hunting down and killing a rabbit, and so I was not prepared when my wide-eyed daughter turned to me and asked, “Are you sure about this one?” My husband assured us to hang on because things would get better. And he was right."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Although aspects of this movie feel dated or confused, its positive message about animals and its silly humor make it worth watching in 2015."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan parents should know that, while the film does open with a hunting scene, the overall gist is anti-hunting. In fact, a big part of the plot revolves around the gun-toting, hunter-dad’s transformation from stereotypical man’s man to a more compassionate and self-accepting person. It’s his relationship with Harry, a Bigfoot who confuses the boundary between us (humans) and them (nonhuman animals), that causes him to rethink his relationship with other animals, whom he’d previously labeled as trophy, dinner, or pet."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The tone of the movie is not serious. Still, those of us who were not raised vegetarian or vegan ourselves may recognize aspects of our journey in the father’s transformation. Harboring Harry and taking the side of a Bigfoot, in a community seized with fear and bloodlust, sets this dad and his family apart from their neighbors and even extended family members. And once they begin thinking of animals differently, another issue arises: what to do with their hunting trophies and Grandma’s fur stole (which also offend Harry)?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s Harry’s solution to this dilemma–to bury the dead animals in the backyard–which leads to the only explicit mention of vegetarianism in the movie. The Hendersons are seated at dinner, with their guest Dr. Wrightwood:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "Sarah Henderson: Where’s the roast?",
          {
            "type": "lineBreak"
          },
          " George Henderson: I’ll go get it.",
          {
            "type": "lineBreak"
          },
          " Nancy Henderson: The roast is resting in a shallow unmarked grave in the backyard.",
          {
            "type": "lineBreak"
          },
          " George Henderson: Oh. Well, there’s plenty of other stuff.",
          {
            "type": "lineBreak"
          },
          " Dr. Wallace Wrightwood: Are you vegetarians?",
          {
            "type": "lineBreak"
          },
          " George Henderson: Sometimes. It depends on the guest."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Despite all of these high points, I should note that the treatment of vegetarianism and animal rights is incomplete and may be confusing to younger children. Although Harry himself does not eat hamburgers and bristles at the view of hunting trophies, he is seen in one scene scooping up fish from an aquarium and happily gulping them down as a snack. Additionally, some parents (like me) may not be comfortable with the outdated gender roles in the movie."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/harry-and-the-hendersons",
        "external": true,
        "children": [
          "Commonsense Media"
        ]
      },
      " recommends this movie for ages 7 and up–but if you live with a vegetarian or vegan kid who is sensitive to animal suffering, I’d recommend holding off for another year or two."
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
