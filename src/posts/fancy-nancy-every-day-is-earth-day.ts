import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/04/fn-earth-c.jpg",
    "alt": "Fancy Nancy: Every Day is Earth Day",
    "href": "/media/2012/04/fn-earth-c.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Those familiar with the ",
      {
        "type": "emphasis",
        "children": [
          "Fancy Nancy"
        ]
      },
      " series know that Fancy Nancy is a girl with flair and enthusiasm. Although green is not her favorite color, she takes being green very seriously in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/62-9780606122948-0",
            "external": true,
            "children": [
              "Fancy Nancy: Every Day is Earth Day"
            ]
          }
        ]
      },
      ". When her class discusses some basics about living green and taking the health of the planet into considation when making daily decisions, she is activated to help her family implement some of these strategies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It doesn’t go well. Fancy Nancy manages to really, REALLY annoy her parents with her (seemingly) overzealous attitude. From disrupting the household in the middle of the night because she’s turned her sister’s nightlight off to saving energy by turning her mom’s laptop off which causes her mom to lose her work (gulp!), her enthusiasm for greening her family’s everyday life is irritating (fancy for mad) her parents."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Lessons are learned on both sides of the equation. I had mixed feelings about Fancy Nancy’s parents telling her that she had to be more flexible, but the portrayal of an overenthusiastic girl who is trying to get others to implement solutions to the problems that she sees hit close to home. Vegetarians, vegans and environmentalists know that in order to have reasoned discussions about the many issues that these subjects engender, it is important to meet people where they are. Preferably over a candlelight dinner using cloth napkins and lots of veggies– just like Fancy Nancy’s family ends up doing."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "You can preview portions of this book ",
      {
        "type": "link",
        "href": "http://browseinside.harpercollinschildrens.com/index.aspx?isbn13=9780061873263",
        "external": true,
        "children": [
          "here"
        ]
      },
      "; I especially like Fancy Nancy’s bike, complete with her doll tied on to her banana seat."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A beginning reading book suitable for ages 4 and up."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "strong",
            "children": [
              "A Note from Us at Vegbooks:"
            ]
          },
          "We hope you’ve enjoyed our reviews focusing on environmental issues in celebration of ",
          {
            "type": "link",
            "href": "http://www.eeweek.org/",
            "external": true,
            "children": [
              "EE Week"
            ]
          },
          ". We’d like to thank all of you for supporting us and send you our best wishes on Earth Day, and every day. We are grateful for all *you* do to help the planet and all of the animals on it."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
