import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6194",
  "slug": "animal-aha",
  "url": "/reviews/animal-aha/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/10/12/animal-aha/",
  "title": "Animal Aha!",
  "publishedAt": "2011-10-12",
  "publishedLabel": "October 12th, 2011",
  "excerpt": "In order to prove to the masses that animals are intelligent, scientists have spent countless hours – decades even (think: Jane Goodall) – observing their behavior or carrying out experiments. On a personal level,…",
  "image": {
    "src": "/media/2011/10/animalaha.jpg",
    "alt": "Animal Aha!",
    "width": 210,
    "height": 274
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
      "name": "animal intelligence",
      "slug": "animal-intelligence",
      "url": "/topics/animal-intelligence/"
    },
    {
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Cockroaches",
      "slug": "cockroaches",
      "url": "/topics/cockroaches/"
    },
    {
      "name": "Diane Swanson",
      "slug": "diane-swanson",
      "url": "/topics/diane-swanson/"
    },
    {
      "name": "Dolphins",
      "slug": "dolphins",
      "url": "/topics/dolphins/"
    },
    {
      "name": "Elephants",
      "slug": "elephants",
      "url": "/topics/elephants/"
    },
    {
      "name": "Gorillas",
      "slug": "gorillas",
      "url": "/topics/gorillas/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Parrots",
      "slug": "parrots",
      "url": "/topics/parrots/"
    },
    {
      "name": "Pythons",
      "slug": "pythons",
      "url": "/topics/pythons/"
    },
    {
      "name": "Science",
      "slug": "science",
      "url": "/topics/science/"
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
    "description": "In order to prove to the masses that animals are intelligent, scientists have spent countless hours – decades even (think: Jane Goodall) – observing their behavior or carrying out experiments. On a personal level,…",
    "image": "https://vegbooks.org/media/2011/10/animalaha.jpg"
  },
  "previous": {
    "title": "Miss Spider’s Tea Party",
    "url": "/reviews/miss-spiders-tea-party/"
  },
  "next": {
    "title": "No Plain Hair!",
    "url": "/reviews/no-plain-hair/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/10/animalaha.jpg"}><img src={"/media/2011/10/animalaha.jpg"} alt={"Animal Aha!"} width={210} height={274} /></a>
      </figure>
      <p>{"In order to prove to the masses that animals are intelligent, scientists have spent countless hours – decades even (think: "}<a href={"/reviews/me-jane/"}>{"Jane Goodall"}</a>{") – observing their behavior or carrying out experiments. On a personal level, that irks me; it should be a given that animals (at the very least mammals since people generally find them easier to relate to) are critical thinkers and social, emotional, sentient beings. I take one look at my sleeping canine companion, Sophia, and easily see that she’s processing a dream sequence – her legs moving, small barks making their way outside of her reverie. I gather she’s chasing a worthy squirrel. What animal would do that if they weren’t cognizant, soulful even?"}</p>
      <p>{"Tirade over. For the “I need to science to back it up” camp, "}<em><a href={"http://site.annickpress.com/catalog/catalog.aspx?Title=Animal+Aha!"}>{"Animal Aha!"}</a></em>{"is a great choice in showing a wide range of animals, from cockroaches to pythons to gorillas, and the new discoveries made in light of their behavior. These findings, readers will discover, not only fascinate us, but will help demonstrate that there’s so much we don’t know about the natural world. So let us not judge too quickly and dismiss the intelligence of our animal brethren."}</p>
      <p>{"Elephants recognize themselves in mirrors. Dolphins can do math. Parrots can understand and say they’re sorry. Author Diane Swanson does a wonderful job compiling the most intriguing of studies and accompanying images for this very colorful, quick nonfiction read."}</p>
      <p>{"Ages 7-9."}</p>
    </div>
  );
}
