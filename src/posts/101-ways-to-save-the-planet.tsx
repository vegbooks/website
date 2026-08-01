import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6518",
  "slug": "101-ways-to-save-the-planet",
  "url": "/reviews/101-ways-to-save-the-planet/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/12/03/101-ways-to-save-the-planet/",
  "title": "101 Ways to Save the Planet",
  "publishedAt": "2011-12-03",
  "publishedLabel": "December 3rd, 2011",
  "excerpt": "A few weeks ago I got my hands on one of those 100-ways-to-help-earth type books. I usually just scan them to see if farm animals and dietary choices are mentioned at all. All too often these books pull an Al Gore…",
  "image": {
    "src": "/media/2011/12/9781410938985.jpg",
    "alt": "101 Ways to Save the Planet",
    "width": 206,
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
      "name": "Activism",
      "slug": "activism",
      "url": "/topics/activism/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Deborah Underwood",
      "slug": "deborah-underwood",
      "url": "/topics/deborah-underwood/"
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
      "name": "Food Choices",
      "slug": "food-choices",
      "url": "/topics/food-choices/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
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
    "description": "A few weeks ago I got my hands on one of those 100-ways-to-help-earth type books. I usually just scan them to see if farm animals and dietary choices are mentioned at all. All too often these books pull an Al Gore…",
    "image": "https://vegbooks.org/media/2011/12/9781410938985.jpg"
  },
  "previous": {
    "title": "The Vegetarian Lion",
    "url": "/reviews/the-vegetarian-lion/"
  },
  "next": {
    "title": "Pele’s Forever Home",
    "url": "/reviews/peles-forever-home/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/12/9781410938985.jpg"}><img src={"/media/2011/12/9781410938985.jpg"} alt={"101 Ways to Save the Planet"} width={206} height={300} /></a>
      </figure>
      <p>{"A few weeks ago I got my hands on one of those 100-ways-to-help-earth type books. I usually just scan them to see if farm animals and dietary choices are mentioned at all. All too often these books pull an Al Gore and ignore the biggest way to make a positive impact (eating veg, of course). But as I was trying to identify the author, which actually required digging into the book, I discovered that lo and behold it was the work of Deborah Underwood, our beloved author of "}<em><a href={"/reviews/granny-gomez-and-jigsaw/"}>{"Granny Gomez and Jigsaw"}</a></em>{"!"}</p>
      <p>{"Little did I know "}<a href={"http://www.deborahunderwoodbooks.com/"} target="_blank" rel="noopener noreferrer">{"how accomplished"}</a>{" Deborah is; the woman has co-written a series of books with Whoopi Goldberg and published more than 28 nonfiction titles, and many more early chapter readers and picture books. Now, I fully realize that this is supposed to be a review of a book and not a glowing profile piece on Deborah. On to the book…."}</p>
      <p><em><a href={"http://www.capstonepub.com/product/9781410938985"} target="_blank" rel="noopener noreferrer">{"101 Ways to Save the Planet"}</a></em>{" does set itself apart from others of a similar title and nature. For one, there are colorful photos aplenty helping to illustrate the giant to-do list (cute animals, trendy teens). Deborah Underwood doesn’t wait very long to introduce the eating green concept (making it to page 8 out of 56 ain’t bad) and addressing factory farming. She takes the "}<a href={"http://www.humanesociety.org/issues/eating/"} target="_blank" rel="noopener noreferrer">{"Humane Society of the United States approach"}</a>{" in encouraging readers to eat lower on the food chain (plants vs. animals) and, if they plan to eat animal products, to purchase from small, humane farms. But you’ll see her value system at work throughout the book. In the school section, she recommends serving veggie dogs instead of meat at events. Gotta love Deborah! She keeps the ideas mentioned within modern and applicable on a daily basis."}</p>
      <p>{"A great choice if you’re looking for more than 100 ways to inspire kids to make a difference."}</p>
      <p>{"Ages 9+."}</p>
    </div>
  );
}
