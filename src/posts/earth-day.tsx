import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7291",
  "slug": "earth-day",
  "url": "/reviews/earth-day/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/04/15/earth-day/",
  "title": "Earth Day",
  "publishedAt": "2012-04-15",
  "publishedLabel": "April 15th, 2012",
  "excerpt": "In honor of Environmental Education week and to highlight Earth Day, Vegbooks is featuring books with environmental themes. More on EE Week here. “Save the Earth” reads a banner in Emily’s classroom, cultivating…",
  "image": {
    "src": "/media/2012/04/earth-day-cover.jpg",
    "alt": "Earth Day",
    "width": 210,
    "height": 315
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
      "name": "Bicycles",
      "slug": "bicycles",
      "url": "/topics/bicycles/"
    },
    {
      "name": "Conservation",
      "slug": "conservation",
      "url": "/topics/conservation/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Earth Day",
      "slug": "earth-day",
      "url": "/topics/earth-day/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Farmers Markets",
      "slug": "farmers-markets",
      "url": "/topics/farmers-markets/"
    },
    {
      "name": "Fathers",
      "slug": "fathers",
      "url": "/topics/fathers/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Recycling",
      "slug": "recycling",
      "url": "/topics/recycling/"
    },
    {
      "name": "Robin Hill School",
      "slug": "robin-hill-school",
      "url": "/topics/robin-hill-school/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "In honor of Environmental Education week and to highlight Earth Day, Vegbooks is featuring books with environmental themes. More on EE Week here. “Save the Earth” reads a banner in Emily’s classroom, cultivating…",
    "image": "https://vegbooks.org/media/2012/04/earth-day-cover.jpg"
  },
  "previous": {
    "title": "The Vegetable Alphabet Book",
    "url": "/reviews/the-vegetable-alphabet-book/"
  },
  "next": {
    "title": "Endangered Animals",
    "url": "/reviews/endangered-animals-2/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/04/earth-day-cover.jpg"}><img src={"/media/2012/04/earth-day-cover.jpg"} alt={"Earth Day"} width={210} height={315} /></a>
      </figure>
      <p><em>{"In honor of Environmental Education week and to highlight Earth Day, Vegbooks is featuring books with environmental themes. More on EE Week "}<a href={"http://www.eeweek.org/"} target="_blank" rel="noopener noreferrer">{"here"}</a>{"."}</em></p>
      <p>{"“Save the Earth” reads a banner in Emily’s classroom, cultivating awareness about "}<a href={"http://en.wikipedia.org/wiki/Earth_Day"} target="_blank" rel="noopener noreferrer">{"Earth Day"}</a>{" among the students. During a discussion, her classmates come up with pretty big ideas about saving dolphins, polar bears and forests, but Emily is a little disheartened when she talks about these concepts with her dad. She is even less enthusiastic about his idea to start saving the planet with smaller, more manageable steps. "}<em><a href={"http://www.amazon.com/gp/product/1416955356/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1416955356"} target="_blank" rel="noopener noreferrer">{"Earth Day"}</a></em>{" delves a little deeper into the small steps Emily and her dad take."}</p>
      <p>{"It turns out that in this case, the small things are what made the biggest impact! While Emily’s classmates were drawing pictures, talking, and, in one case, making dolphin noises, Emily and her dad took concrete steps to immediately improve the world: recycling, biking instead of driving, visiting the farmers’ market for local produce, and conserving water and energy by turning off the tap and electronics."}</p>
      <p>{"Although adults know that we need a combination of smaller collective actions and implementation of very big ideas to preserve our planet, this is story is a nice illustration for kids about how small things really can add up to make a difference — an empowering message."}</p>
      <p>{"This book is part of the "}<a href={"http://series.simonandschuster.net/Robin-Hill-School"} target="_blank" rel="noopener noreferrer">{"Robin Hill School"}</a>{" series focusing on an early elementary class and is a short, easy read."}</p>
      <p>{"Ages 3 to 7."}</p>
    </div>
  );
}
