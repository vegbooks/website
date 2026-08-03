import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "The Chicken Gave It to Me",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 320,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This post is in honor of ",
      {
        "type": "link",
        "href": "http://www.upc-online.org/respect/2010/",
        "children": [
          "International Respect for Chickens Day"
        ]
      },
      " (May 4)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In a genre of hard-to-find vegetarian and vegan children’s books (more specifically, chapter books), Anne Fine’s ",
      {
        "type": "emphasis",
        "children": [
          "The Chicken Gave it to Me"
        ]
      },
      " is a score. Released in 1992, the novel features two classmates, Andrew and Gemma, who happen upon a hen who urges them – with a bit of desperation – to read her own book, “The True Story of Harrowing Farm.” Her “chicken scratch” writings describe the horrid conditions she lived in and how one evening, a spaceship lands nearby, carrying green aliens that immediately free the birds of the smelly sheds and comment on their “twisted feet. Bare patches all over.” While the sheds air out, the green folk prepare the wire cages for the next occupants … humans. Yes, people are the aliens’ favorite fare and get a little taste of their own medicine, in terms of animal treatment on factory farms."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Apparently it isn’t in a chicken’s nature to be vengeful. The avian author-heroine hitches a ride to the aliens’ home planet to spread her message of mercy, that humans deserve to be treated well and preferably not as dinner since grains and vegetables are suitable substitutes. She makes it onto talk shows and other media outlets. After her television debut, a viewer poll is taken and finds that,"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“Almost all of you think we ought to treat them better. Most of you said you were very shocked indeed by some of the things the chicken told you. Over half of you would be willing to pay a little more for your peopleburgers if you thought they’d be happier before they ended up on your little green plates. And quite a few of you said you were definitely going to try and eat less people and more grains and vegetables.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is definitely a great introduction to the issues involved in eating sentient beings. Gemma refuses to eat chicken and Andrew stops as well until he knows exactly where and how the chicken was raised. But for the vegan in me, the endorsement of the welfare argument was a sore point. Fine even has the chicken offering up one of her eggs to the aliens to eat. She also occasionally portrays the chicken as a self-deprecating animal (calling herself feather-brained and chicken-dippy), which really irked me since ",
      {
        "type": "link",
        "href": "http://www.upc-online.org/thinking/social_life_of_chickens.html",
        "children": [
          "I know they are far from it"
        ]
      },
      ". But I will say that this book will prepare your little vegan for all the lame arguments he or she will undoubtedly hear from meat eaters on justifying their dietary choices (“I know they squawk and fuss and rattle the cage bars, trying to get out. But, honestly, they don’t mind, really. You see, they’re not nearly as sensitive as we are!”)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
