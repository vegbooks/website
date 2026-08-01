import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10212",
  "slug": "not-a-nugget",
  "url": "/reviews/not-a-nugget/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/11/18/not-a-nugget/",
  "title": "Not a Nugget",
  "publishedAt": "2015-11-18",
  "publishedLabel": "November 18th, 2015",
  "excerpt": "Not a Nugget by Stephanie Dreyer (aka VeegMama) is a really sweet book that combines a dose of fun facts with a strong vegan message. Vegan books that are gentle, fun-spirited, informational, and toddler…",
  "image": {
    "src": "/media/2015/11/not-a-nugget-cover.jpg",
    "alt": "Not A Nugget Cover",
    "width": 210,
    "height": 210
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
      "name": "Animals as Food",
      "slug": "animals-as-food",
      "url": "/topics/animals-as-food/"
    },
    {
      "name": "Best Books for Vegetarian Kids",
      "slug": "best-books-for-vegetarian-kids",
      "url": "/topics/best-books-for-vegetarian-kids/"
    },
    {
      "name": "Compassion",
      "slug": "compassion",
      "url": "/topics/compassion/"
    },
    {
      "name": "Consumption of Animals",
      "slug": "consumption-of-animals",
      "url": "/topics/consumption-of-animals/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jack Veda",
      "slug": "jack-veda",
      "url": "/topics/jack-veda/"
    },
    {
      "name": "Kindness",
      "slug": "kindness",
      "url": "/topics/kindness/"
    },
    {
      "name": "Kindness to Animals",
      "slug": "kindness-to-animals",
      "url": "/topics/kindness-to-animals/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Raising Vegan Kids",
      "slug": "raising-vegan-kids",
      "url": "/topics/raising-vegan-kids/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    },
    {
      "name": "Stephanie Dreyer",
      "slug": "stephanie-dreyer",
      "url": "/topics/stephanie-dreyer/"
    },
    {
      "name": "Veegmama",
      "slug": "veegmama",
      "url": "/topics/veegmama/"
    },
    {
      "name": "Vegan Childrens Books",
      "slug": "vegan-childrens-books",
      "url": "/topics/vegan-childrens-books/"
    },
    {
      "name": "Vegan Parenting",
      "slug": "vegan-parenting",
      "url": "/topics/vegan-parenting/"
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
    "description": "Not a Nugget by Stephanie Dreyer (aka VeegMama) is a really sweet book that combines a dose of fun facts with a strong vegan message. Vegan books that are gentle, fun-spirited, informational, and toddler…",
    "image": "https://vegbooks.org/media/2015/11/not-a-nugget-cover.jpg"
  },
  "previous": {
    "title": "I Am Yoga",
    "url": "/reviews/i-am-yoga/"
  },
  "next": {
    "title": "Turkey Trouble",
    "url": "/reviews/turkey-trouble/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2015/11/not-a-nugget-cover.jpg"} alt={"Not A Nugget Cover"} width={210} height={210} />
      </figure>
      <p><em>{"Not a Nugget"}</em>{" by Stephanie Dreyer (aka "}<a href={"http://veegmama.com/"} target="_blank" rel="noopener noreferrer">{"VeegMama"}</a>{") is a really sweet book that combines a dose of fun facts with a strong vegan message."}</p>
      <p>{"Vegan books that are gentle, fun-spirited, informational, and toddler age-appropriate are hard to come by, but the author really accomplishes all this in her book. This book connects each animal (including sea creatures) with the food they typically get turned into, so for example a cow becomes a hamburger and an egg becomes an omelet. I think this is an important connection for kids to understand, especially for the young ones who are just learning about where their food comes from."}</p>
      <p>{"On the first page spread, there’s a cute chicken with the words, “not a nugget” followed by a question about chickens and then a fun fact that relates to the question. I like this combination of statement, question and fact, and the way the book sticks to this same pattern throughout its entirety. It’s simple and predictable in a good way that makes sense to kids. The facts themselves are interesting, especially because so most of them connect to our own human behaviors and relationships. This association is important for kids in developing empathy, which leads to compassion."}</p>
      <p>{"The images were sweet and really effective at keeping the focus on the animals, without having the distraction of a busy background. I thought the illustrator’s portrayal of the animals’ eyes was remarkable; they were animated and warm and seemed to pop out of the page! I really liked "}<a href={"http://veegmama.com/not-a-nugget/"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{", and it was a perfect read for my two kids under 5 years old! Highly recommend."}</p>
      <p>{"Ages 2 to 6."}</p>
      <p><em>{"Note: Vegbooks contributor Diane Vukovic also "}<a href={"http://plenteousveg.com/not-a-nugget-review/"} target="_blank" rel="noopener noreferrer">{"reviewed this book on her blog Plenteous Veg"}</a>{". Let us know what you think in the comments!"}</em></p>
    </div>
  );
}
