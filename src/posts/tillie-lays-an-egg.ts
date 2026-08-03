import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/03/tillie-cover.jpg",
    "alt": "Tillie Lays an Egg",
    "href": "/media/2010/03/tillie-cover.jpg",
    "width": 213,
    "height": 172,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "To say the very least, Easter-themed books are not animal-friendly (think: dyed eggs, ham-based feasts, and marshmallow “peeps”, although you can find these vegan from ",
      {
        "type": "link",
        "href": "http://www.sweetandsara.com/products.php",
        "external": true,
        "children": [
          "Sweet & Sara"
        ]
      },
      "). I scoured the library bookshelves in earnest, trying to find some redeeming publication for a timely blog review and to no avail. I tried. I really, really did."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "But in my search, I came across a rather Martha Stewartesque picture book that I think you’ll enjoy. Chicken enthusiast Terry Golson not only blogs and ",
      {
        "type": "link",
        "href": "http://www.hencam.com/",
        "external": true,
        "children": [
          "streams live video"
        ]
      },
      " of her backyard coop, but she recently published this quaint tale about Tillie, one of the seven gorgeous hens featured within, and all the unexpected places she decides to put down her eggs. Kids will find amusement in seeking out the eggs on each page. Adults, on the other hand, will marvel at Ben Fink’s rustic photography and Golson’s antique collection of chicken everything (toys, kitchenware, etc), which are used as props and backdrops in the “farmstead” photo shoots."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In “A Note from the Author,” Golson states she used positive reinforcement (e.g. – lots of treats) to get her hens to pose and that they are “eggs-tremely” well cared for. I don’t doubt it, for the most part. As mentioned on her website, many of her girls were rescued from other backyard chicken keepers who couldn’t maintain a healthy pecking order (one of the ",
      {
        "type": "link",
        "href": "http://www.farmsanctuary.org/pdf/Collective%20Position%20Statement%20on%20Backyard%20Poultry.pdf",
        "external": true,
        "children": [
          "many reasons"
        ]
      },
      " *not* to have or encourage backyard poultry). But like me, you may find some of the topics she discusses on her blog questionable, such as taking the hens to NYC to serve as “live props” for an educational talk. FYI, Golson is primarily a cookbook author … and not a vegan one at that. But overall, I love her first children’s book and hope she’ll come out with a plant-based collection of recipes in the near future."
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
