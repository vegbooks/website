import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Fancy Nancy and the Posh Puppy",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’ve got mixed feelings about the ",
      {
        "type": "link",
        "href": "/reviews/fancy-nancy-every-day-is-earth-day/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Fancy Nancy"
            ]
          }
        ]
      },
      " series by Jane O’Connor and Robin Preiss Glasser. On one hand, Nancy is a bright, confident girl who likes learning new words and being thoughtful to her friends. On the other, what she really loves — her whole raison d’etre — is to be fancy. And heaven knows there’s enough ",
      {
        "type": "link",
        "href": "http://www.commercialexploitation.org/news/2009/05/princessfever.html",
        "external": true,
        "children": [
          "princess lit"
        ]
      },
      " geared to little girls."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "So when kiddo received ",
      {
        "type": "emphasis",
        "children": [
          "Fancy Nancy and the Posh Puppy"
        ]
      },
      ", I had qualms. Would Nancy go for a purebred papillon, like her neighbor Mrs. Devine’s dog Jewel? Would she convince her parents they ",
      {
        "type": "emphasis",
        "children": [
          "absolutely"
        ]
      },
      " needed to go to a breeder, where they could find the fanciest dog?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Happily, the answer to both of those questions is NO. Nancy does dogsit Jewel for a day, but when her parents stop by the local animal shelter after an evening out (eating what I can only assume is pizza with ",
      {
        "type": "link",
        "href": "http://www.daiyafoods.com/",
        "external": true,
        "children": [
          "Daiya"
        ]
      },
      " “cheese” at King’s Crown), she falls in love with Frenchy. In the end, even Fancy Nancy finds her dream dog is a rescue."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "To O’Connor and Preiss Glasser’s credit, the ",
      {
        "type": "link",
        "href": "http://stoppuppymills.org/",
        "external": true,
        "children": [
          "shelter message"
        ]
      },
      " is crystal clear — but kids might need to be told that Frenchy is not only a shelter dog, but a mutt. (Nancy’s dad’s reference to a “La Salle spaniel,” a nod to the name of the animal shelter, might be too subtle for some.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ideal for kids ages 3-7. (",
      {
        "type": "link",
        "href": "http://www.harpercollinschildrens.com/kids/gamesandcontests/features/fancynancybooks/",
        "external": true,
        "children": [
          "Publisher"
        ]
      },
      " says 4-7 but kiddo loved this series when she was 3.)"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
