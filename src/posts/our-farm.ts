import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/978-0-375-86118-5.jpg",
    "alt": "Our Farm",
    "href": "/media/2010/06/978-0-375-86118-5.jpg",
    "width": 209,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Farm animals are nothing short of magnificent. Seemingly, they’re more esoteric than our household companion animals, but friendlier and more approachable than say wildlife from the African savannah. Perhaps that’s why we are so enchanted with them. They’re a bit foreign to us city-dwellers, yet at the same time we grew up with them- their faces dotting our picture books, plush toys and favorite TV shows."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Enlightening ",
      {
        "type": "link",
        "href": "http://www.farmsanctuary.org/",
        "external": true,
        "children": [
          "Farm Sanctuary"
        ]
      },
      " visitors to the dynamic personalities of these loveable animals was my absolute favorite thing to do while I was working at the California Shelter. (I still blab about their fascinating lives to anyone who will listen, in hopes of making them think twice about eating my farm animal friends). Goats relish a good scratch between the horns. Perky porcines will flop over in an instant for a satisfying belly rub. But beyond these traits you’ll find in most well-treated farm animals, Maya Gottfried has captured the exceptional natures of a handful of sanctuary residents. You’ll meet Maya, also known as “Grandmama Moo,” who ensures that newly arrived bovine orphans find their way in the herd and pastures. Mayfly rooster, in his very protective poem about his hens, declares “A true rooster knows: it is always ladies first,” when it comes to dust baths and feeding. The Turkey Girl flock likens themselves to a ballet class, with such fluid, graceful moves in the green grasslands."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This publication is a must have in every animal lover’s library. And like Ms. Gottfried’s other work, ",
      {
        "type": "link",
        "href": "/reviews/good-dog/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Good Dog"
            ]
          }
        ]
      },
      ", this one also makes a fine coffee table addition!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages: All!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
