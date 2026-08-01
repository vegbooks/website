import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3771",
  "slug": "the-snow-bear",
  "url": "/reviews/the-snow-bear/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/12/24/the-snow-bear/",
  "title": "The Snow Bear",
  "publishedAt": "2010-12-24",
  "publishedLabel": "December 24th, 2010",
  "excerpt": "The Snow Bear is a beautiful wintry tale of a polar bear cub who awakens from hibernation with his mother nowhere in sight. So with the help of his forest friends—Ox, Goose, Moose, Fox, Wolf, and Rabbit—he decides to…",
  "image": {
    "src": "/media/2010/12/toddler-baby-reading.jpg",
    "alt": "The Snow Bear",
    "width": 210,
    "height": 300
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
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Foxes",
      "slug": "foxes",
      "url": "/topics/foxes/"
    },
    {
      "name": "Geese",
      "slug": "geese",
      "url": "/topics/geese/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Miriam Ross",
      "slug": "miriam-ross",
      "url": "/topics/miriam-ross/"
    },
    {
      "name": "Moose",
      "slug": "moose",
      "url": "/topics/moose/"
    },
    {
      "name": "Oxen",
      "slug": "oxen",
      "url": "/topics/oxen/"
    },
    {
      "name": "Polar Bears",
      "slug": "polar-bears",
      "url": "/topics/polar-bears/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Rabbits",
      "slug": "rabbits",
      "url": "/topics/rabbits/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    },
    {
      "name": "Snow",
      "slug": "snow",
      "url": "/topics/snow/"
    },
    {
      "name": "Touch and Feel",
      "slug": "touch-and-feel",
      "url": "/topics/touch-and-feel/"
    },
    {
      "name": "Winter",
      "slug": "winter",
      "url": "/topics/winter/"
    },
    {
      "name": "Wolves",
      "slug": "wolves",
      "url": "/topics/wolves/"
    }
  ],
  "reviewer": {
    "name": "Robyn Moore",
    "slug": "robyn-moore",
    "url": "/contributors/robyn-moore/",
    "aliases": [
      "ROBYN MOORE"
    ]
  },
  "seo": {
    "description": "The Snow Bear is a beautiful wintry tale of a polar bear cub who awakens from hibernation with his mother nowhere in sight. So with the help of his forest friends—Ox, Goose, Moose, Fox, Wolf, and Rabbit—he decides to…",
    "image": "https://vegbooks.org/media/2010/12/toddler-baby-reading.jpg"
  },
  "previous": {
    "title": "Onion Juice, Poop, and Other Surprising Sources of Alternative Energy",
    "url": "/reviews/onion-juice-poop-and-other-surprising-sources-of-alternative-energy/"
  },
  "next": {
    "title": "I Want to Be … An Environmentalist",
    "url": "/reviews/i-want-to-be-an-environmentalist/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/12/toddler-baby-reading.jpg"}><img src={"/media/2010/12/toddler-baby-reading.jpg"} alt={"The Snow Bear"} width={210} height={300} /></a>
      </figure>
      <p><em>{"The Snow Bear"}</em>{" is a beautiful wintry tale of a polar bear cub who awakens from hibernation with his mother nowhere in sight. So with the help of his forest friends—Ox, Goose, Moose, Fox, Wolf, and Rabbit—he decides to build a mother bear out of snow to keep him company. Together, they use their individual skills. For example, Goose helps pat down the snow with her webbed feet, and Wolf brushes in fur marks with his big, bushy tail. As dusk approaches, all the animals are called home by their mothers, and the little bear finds himself all alone in the middle of the snowy forest. So he curls up next to the snow bear and falls asleep. He awakens to a familiar scent at dawn and finds that the snow bear has been replaced by his real mother. You can almost feel the relief and comfort of the cub through the page!"}</p>
      <p>{"This is a "}<a href={"http://www.amazon.com/gp/product/0525466584?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0525466584"} target="_blank" rel="noopener noreferrer">{"touch-and-feel book"}</a>{" embossed with different textures on each page so that the snow feels soft and the animals’ fur feels rough, which makes it especially nice for younger children."}</p>
      <p>{"From the moment you open this book, you feel as if you’ve stepped into a winter wonderland. The illustrations and the snowflakes sprinkled throughout each page evoke a cold, arctic feel—a tranquil oasis where animals live peacefully."}</p>
      <p>{"Ages 0-8."}</p>
    </div>
  );
}
