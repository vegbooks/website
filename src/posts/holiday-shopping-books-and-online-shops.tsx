import type { PostMetadata } from '../content/types';

export const article = {
  "id": "251",
  "slug": "holiday-shopping-books-and-online-shops",
  "url": "/reviews/holiday-shopping-books-and-online-shops/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/19/holiday-shopping-books-and-online-shops/",
  "title": "Holiday Shopping: Books and Online Stores",
  "publishedAt": "2009-11-19",
  "publishedLabel": "November 19th, 2009",
  "excerpt": "This year, Santa is bringing kiddo books! In celebration of the winter holidays, I’ve compiled two lists for you: one of the books that have gotten top reviews on Vegbooks and the other of online storefronts that…",
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "ASPCA",
      "slug": "aspca",
      "url": "/topics/aspca/"
    },
    {
      "name": "Best Books for Vegetarian Kids",
      "slug": "best-books-for-vegetarian-kids",
      "url": "/topics/best-books-for-vegetarian-kids/"
    },
    {
      "name": "Farm Sanctuary",
      "slug": "farm-sanctuary",
      "url": "/topics/farm-sanctuary/"
    },
    {
      "name": "Holiday Shopping",
      "slug": "holiday-shopping",
      "url": "/topics/holiday-shopping/"
    },
    {
      "name": "Horton",
      "slug": "horton",
      "url": "/topics/horton/"
    },
    {
      "name": "Humane Society",
      "slug": "humane-society",
      "url": "/topics/humane-society/"
    },
    {
      "name": "NRDC",
      "slug": "nrdc",
      "url": "/topics/nrdc/"
    },
    {
      "name": "Vegan Action",
      "slug": "vegan-action",
      "url": "/topics/vegan-action/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "This year, Santa is bringing kiddo books! In celebration of the winter holidays, I’ve compiled two lists for you: one of the books that have gotten top reviews on Vegbooks and the other of online storefronts that…"
  },
  "previous": {
    "title": "The Dog Who Belonged to No One",
    "url": "/reviews/the-dog-who-belonged-to-no-one-guest-post-by-jennifer-gannett/"
  },
  "next": {
    "title": "Do Animals Have Feelings Too?",
    "url": "/reviews/do-animals-have-feelings-too-2/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"This year, Santa is bringing kiddo books! In celebration of the winter holidays, I’ve compiled two lists for you: one of the books that have gotten top reviews on Vegbooks and the other of online storefronts that benefit veg-related charities."}</p>
      <p><strong>{"Vegbooks Favorite Reads"}</strong></p>
      <ol>
        <li><em><a href={"http://vegbooks.wordpress.com/2009/11/06/busy-kitties/"} target="_blank" rel="noopener noreferrer">{"Busy Kitties"}</a></em>{"by John Schindel and Sean Franzen – ages 0-3"}</li>
        <li><a href={"http://vegbooks.wordpress.com/2009/10/27/who-is-the-beast/"} target="_blank" rel="noopener noreferrer"><em>{"Who Is the Beast?"}</em></a>{" by Keith Baker – ages 0-8"}</li>
        <li><em><a href={"http://vegbooks.wordpress.com/2009/11/04/horton-hears-a-who-the-book/"} target="_blank" rel="noopener noreferrer">{"Horton Hears a Who"}</a></em>{"by Dr. Seuss – ages 3-8"}</li>
        <li><a href={"http://vegbooks.wordpress.com/2009/11/17/make-way-for-ducklings/"} target="_blank" rel="noopener noreferrer"><em>{"Make Way for Ducklings"}</em></a>{" by Robert McCloskey – ages 3-8"}</li>
        <li><em><a href={"http://vegbooks.wordpress.com/2009/11/16/the-lady-and-the-spider-guest-review-by-sharon-young/"} target="_blank" rel="noopener noreferrer">{"The Lady and Spider"}</a></em>{"by Faith McNulty and Bob Marstall – ages 4-8*"}</li>
        <li><a href={"http://vegbooks.wordpress.com/2009/11/14/all-in-a-day/"} target="_blank" rel="noopener noreferrer"><em>{"All In A Day"}</em></a>{" by Cynthia Rylant and Nikki McClure – ages 4-8"}</li>
        <li><a href={"http://vegbooks.wordpress.com/2009/11/15/the-magic-finger/"} target="_blank" rel="noopener noreferrer"><em>{"The Magic Finger"}</em></a>{" by Roald Dahl and Quentin Blake – ages 8-12"}</li>
      </ol>
      <p>{"* This book is out of print; look for secondhand copies."}</p>
      <p><strong>{"Fabulous Book Storefronts That Support Charity"}</strong></p>
      <ol>
        <li><a href={"https://secure2.vegsource.com/farmsanc/item.cgi?rm=view_list&category_id=41"} target="_blank" rel="noopener noreferrer">{"Shop at Farm Sanctuary"}</a></li>
        <li><a href={"http://www.nrdc.org/joinGive/shop/bookkids.asp"} target="_blank" rel="noopener noreferrer">{"Natural Resources Defense Council: Shop for Books"}</a></li>
        <li><a href={"http://www.hsus.org/press_and_publications/humane_society_press/"} target="_blank" rel="noopener noreferrer">{"Humane Society Press"}</a></li>
        <li><a href={"http://www.vegan.org/resources/reading/index.html"} target="_blank" rel="noopener noreferrer">{"Vegan Action"}</a></li>
      </ol>
    </div>
  );
}
