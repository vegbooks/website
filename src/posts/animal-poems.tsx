import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2656",
  "slug": "animal-poems",
  "url": "/reviews/animal-poems/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/19/animal-poems/",
  "title": "Animal Poems",
  "publishedAt": "2010-07-19",
  "publishedLabel": "July 19th, 2010",
  "excerpt": "Animal Poems features thoughtful poems about a variety of animals and insects. The late Valerie Worth’s poems unfold from a welcome awareness of the creatures’ perspective. These are not silly childish rhymes but…",
  "image": {
    "src": "/media/2010/07/9780374380571.jpg",
    "alt": "Animal Poems",
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Elephants",
      "slug": "elephants",
      "url": "/topics/elephants/"
    },
    {
      "name": "Hummingbirds",
      "slug": "hummingbirds",
      "url": "/topics/hummingbirds/"
    },
    {
      "name": "Insects",
      "slug": "insects",
      "url": "/topics/insects/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Poetry",
      "slug": "poetry",
      "url": "/topics/poetry/"
    },
    {
      "name": "Steve Jenkins",
      "slug": "steve-jenkins",
      "url": "/topics/steve-jenkins/"
    },
    {
      "name": "Valerie Worth",
      "slug": "valerie-worth",
      "url": "/topics/valerie-worth/"
    },
    {
      "name": "Whales",
      "slug": "whales",
      "url": "/topics/whales/"
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
    "description": "Animal Poems features thoughtful poems about a variety of animals and insects. The late Valerie Worth’s poems unfold from a welcome awareness of the creatures’ perspective. These are not silly childish rhymes but…",
    "image": "https://vegbooks.org/media/2010/07/9780374380571.jpg"
  },
  "previous": {
    "title": "Princess Smartypants",
    "url": "/reviews/princess-smartypants/"
  },
  "next": {
    "title": "Happy Feet (2007)",
    "url": "/reviews/happy-feet/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/9780374380571.jpg"}><img src={"/media/2010/07/9780374380571.jpg"} alt={"Animal Poems"} width={210} height={210} /></a>
      </figure>
      <p><em><a href={"http://www.powells.com/biblio/1-9780374380571-0"} target="_blank" rel="noopener noreferrer">{"Animal Poems"}</a></em>{" features thoughtful poems about a variety of animals and insects. The late Valerie Worth’s poems unfold from a welcome awareness of the creatures’ perspective. These are not silly childish rhymes but rather more substantial, complex poems containing an abundance of food for thought and discussion. Whether it is about an elephant or whale, wasp or hummingbird, each short poem has been crafted to pack a punch and the words stay with us, as we linger and savor the poem’s focus – the animal’s experiences."}</p>
      <p>{"The papercut illustrations by Steve Jenkins (who also illustrated "}<em><a href={"/reviews/elephants-swim/"}>{"Elephants Swim"}</a></em>{") are a perfect match for the poems, balancing a simplicity of initial appearance with startling complexity upon deeper examination (my own favorite is the porcupine)."}</p>
      <p>{"Recommended for ages 7 and up."}</p>
    </div>
  );
}
