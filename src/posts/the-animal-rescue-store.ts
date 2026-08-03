import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/02/97756-animalrescue-4cc.jpg",
    "alt": "The Animal Rescue Store",
    "href": "/media/2011/02/97756-animalrescue-4cc.jpg",
    "width": 210,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“Let me root, root, root for the home team. If they don’t win it’s a shame.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Let’s just say I was rooting for this book, but with more than three strikes ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.arthuralevinebooks.com/book.asp?bookid=85",
            "external": true,
            "children": [
              "The Animal Rescue Store"
            ]
          }
        ]
      },
      " is awash. Based on and inspired by a “vagabond zoo” in New York City (more of a pet storefront) run by Buddy Shapiro, the establishment takes in needy animals (llamas, tarantulas, ferrets, guinea pigs) and finds new homes for them. That seems like the making of a good tale, right?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Author and “slam poet” Elizabeth Swados writes from both the patron’s and animals’ perspectives, but the resulting text tends to be bipolar, jarred, and at times an incoherent presentation of their thoughts (a fun challenge for any orator).The more flowing poems can be outright damning of the sentience and intelligence of animals: “…But those big poppy eyes / Got no sad or glad. / A-duuuh / They’re cold as – well, fish / They don’t feel nothin’ / Empty inside.” And some critters who do find sanctuary are still in danger: After stating “You boil lobsters / You broil lobsters / You barbeque lobsters,” a girl rescues and informs the crustacean that, “I better close the tank / Because there’s a risk / Of mom boiling you.” The frog, who is also used for practical jokes, doesn’t seem to have a much better fate."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are some sweet spots in this publication, such as an elderly Mrs. Finklestein who eagerly wants to adopt a rat, or the young woman who overcomes her fright of snakes to the point where she exclaims, “Hey there sweet snake. / Gimme a kiss / Ssssss.” But overall, this book of poetry is a loose cannon that’s better left in the nosebleed section of the library. For a title that’s written in the same spirit, but with compassion, try Maya Gottfried’s ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/good-dog/",
            "children": [
              "Good Dog"
            ]
          }
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
