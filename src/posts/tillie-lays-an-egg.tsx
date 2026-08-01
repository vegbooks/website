import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1314",
  "slug": "tillie-lays-an-egg",
  "url": "/reviews/tillie-lays-an-egg/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/19/tillie-lays-an-egg/",
  "title": "Tillie Lays an Egg",
  "publishedAt": "2010-03-19",
  "publishedLabel": "March 19th, 2010",
  "excerpt": "To say the very least, Easter-themed books are not animal-friendly (think: dyed eggs, ham-based feasts, and marshmallow “peeps”, although you can find these vegan from Sweet & Sara). I scoured the library bookshelves…",
  "image": {
    "src": "/media/2010/03/tillie-cover.jpg",
    "alt": "Tillie Lays an Egg",
    "width": 213,
    "height": 172
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Easter",
      "slug": "easter",
      "url": "/topics/easter/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Terry Golson",
      "slug": "terry-golson",
      "url": "/topics/terry-golson/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "To say the very least, Easter-themed books are not animal-friendly (think: dyed eggs, ham-based feasts, and marshmallow “peeps”, although you can find these vegan from Sweet & Sara). I scoured the library bookshelves…",
    "image": "https://vegbooks.org/media/2010/03/tillie-cover.jpg"
  },
  "previous": {
    "title": "The Easter Chick",
    "url": "/reviews/the-easter-chick/"
  },
  "next": {
    "title": "Minerva Louise and the Colorful Eggs",
    "url": "/reviews/minerva/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/03/tillie-cover.jpg"}><img src={"/media/2010/03/tillie-cover.jpg"} alt={"Tillie Lays an Egg"} width={213} height={172} /></a>
      </figure>
      <p>{"To say the very least, Easter-themed books are not animal-friendly (think: dyed eggs, ham-based feasts, and marshmallow “peeps”, although you can find these vegan from "}<a href={"http://www.sweetandsara.com/products.php"} target="_blank" rel="noopener noreferrer">{"Sweet & Sara"}</a>{"). I scoured the library bookshelves in earnest, trying to find some redeeming publication for a timely blog review and to no avail. I tried. I really, really did."}</p>
      <p>{"But in my search, I came across a rather Martha Stewartesque picture book that I think you’ll enjoy. Chicken enthusiast Terry Golson not only blogs and "}<a href={"http://www.hencam.com/"} target="_blank" rel="noopener noreferrer">{"streams live video"}</a>{" of her backyard coop, but she recently published this quaint tale about Tillie, one of the seven gorgeous hens featured within, and all the unexpected places she decides to put down her eggs. Kids will find amusement in seeking out the eggs on each page. Adults, on the other hand, will marvel at Ben Fink’s rustic photography and Golson’s antique collection of chicken everything (toys, kitchenware, etc), which are used as props and backdrops in the “farmstead” photo shoots."}</p>
      <p>{"In “A Note from the Author,” Golson states she used positive reinforcement (e.g. – lots of treats) to get her hens to pose and that they are “eggs-tremely” well cared for. I don’t doubt it, for the most part. As mentioned on her website, many of her girls were rescued from other backyard chicken keepers who couldn’t maintain a healthy pecking order (one of the "}<a href={"http://www.farmsanctuary.org/pdf/Collective%20Position%20Statement%20on%20Backyard%20Poultry.pdf"} target="_blank" rel="noopener noreferrer">{"many reasons"}</a>{" *not* to have or encourage backyard poultry). But like me, you may find some of the topics she discusses on her blog questionable, such as taking the hens to NYC to serve as “live props” for an educational talk. FYI, Golson is primarily a cookbook author … and not a vegan one at that. But overall, I love her first children’s book and hope she’ll come out with a plant-based collection of recipes in the near future."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
