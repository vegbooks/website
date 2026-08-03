import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Eating Animals and Reading About Them",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 238,
    "height": 158,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In its May/June issue, ",
      {
        "type": "emphasis",
        "children": [
          "The Horn Book"
        ]
      },
      " (a leading journal about children’s literature) featured an article by vegetarian and children’s book author Jennifer Armstrong. Ms. Armstrong tackled the apparent inconsistency between feeding animals to children and teaching them to do the right thing by using animals as models for good behavior. Check out ",
      {
        "type": "link",
        "href": "http://www.hbook.com/magazine/articles/2010/may10_armstrong.asp",
        "external": true,
        "children": [
          "the full article"
        ]
      },
      ", and here’s an excerpt:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "[W]hat I am suggesting is that if you love children’s literature, you cannot kill animals just because they taste good on a bun. There’s more than a bit of hypocrisy involved in urging children to empathize with pandas and polar bears and bunnies and ducks in books and at a distance and then feeding them hamburgers and sliced deli meats. The United States kills approximately ten billion land animals every year for human consumption, which works out to over one million animals per hour. No number of books about runaway bunnies, or ducklings negotiating Boston traffic, or terrific and radiant pigs can compensate for that scale of violence, in my opinion. How does a child’s developing moral/ethical self resolve the jarring disconnect between the animal books she is given to read in the library and the animal meat she is given for lunch in the cafeteria? What is she to make of the trusted adult who holds in one hand a living baby chick to caress with tender care and a chicken nugget in the other hand to eat with special sauce?"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Not surprisingly, the article generated a couple of ",
      {
        "type": "link",
        "href": "http://www.hbook.com/magazine/letters/jul10.asp",
        "external": true,
        "children": [
          "letters to the editor"
        ]
      },
      " in the July/August issue. A self-professed “country girl” defended “the oldest and cruelest law: life feeds on life, and death shows no mercy.” Another letter praised the article for getting the message out there."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
