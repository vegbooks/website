import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/three-little-pigs.jpg",
    "alt": "The Three Little Pigs: An Architectural Tale",
    "href": "/media/2010/06/three-little-pigs.jpg",
    "width": 244,
    "height": 345,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Steven Guarnaccia’s fresh take on the three little pigs will delight parents with an eye to design or architecture. Basing the pigs on Frank Gehry, ",
      {
        "type": "link",
        "href": "http://www.pbs.org/wnet/americanmasters/episodes/philip-johnson/about-philip-johnson/635/",
        "external": true,
        "children": [
          "Phillip Johnson"
        ]
      },
      ", and Frank Lloyd Wright, Mr. Guarnaccia’s work also features early and mid-century furnishings by the likes of Mart Stam, Thonet, and ",
      {
        "type": "link",
        "href": "http://moma.org/collection/artist.php?artist_id=5103",
        "external": true,
        "children": [
          "Eero Saarinen"
        ]
      },
      ". (I know this thanks to the wonderfully informative endpapers.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There’s not much that speaks to vegetarianism in this book, except of course for the fact that the wolf is out to get (and presumably eat) the little pigs. Happily, they foil his efforts and he ends up with a scorched tail and a bruised ego as a result. (His injury is due to his own efforts, nothing that the pigs did.) The book ends with the three pig brothers enjoying tomato soup and ",
      {
        "type": "link",
        "href": "http://www.vegfamily.com/vegan-recipes/desserts/vegan-apple-pie.htm",
        "external": true,
        "children": [
          "apple pie"
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
