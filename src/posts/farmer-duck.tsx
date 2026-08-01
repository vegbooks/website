import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1589",
  "slug": "farmer-duck",
  "url": "/reviews/farmer-duck/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/30/farmer-duck/",
  "title": "Farmer Duck",
  "publishedAt": "2010-04-30",
  "publishedLabel": "April 30th, 2010",
  "excerpt": "Poor, poor Farmer Duck! He irons. He gardens. He even does the dishes. Duck has been picking up the “real” farmer’s slack while the sloth lies in bed, munching on chocolates. Bleary eyed and exhausted from all his…",
  "image": {
    "src": "/media/2010/04/9781564025968.jpg",
    "alt": "Farmer Duck",
    "width": 225,
    "height": 240
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
      "name": "Animal Liberation",
      "slug": "animal-liberation",
      "url": "/topics/animal-liberation/"
    },
    {
      "name": "Animal Rights Books for Kids",
      "slug": "animal-rights-books-for-kids",
      "url": "/topics/animal-rights-books-for-kids/"
    },
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
      "name": "Cows",
      "slug": "cows",
      "url": "/topics/cows/"
    },
    {
      "name": "Ducks",
      "slug": "ducks",
      "url": "/topics/ducks/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Farming",
      "slug": "farming",
      "url": "/topics/farming/"
    },
    {
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "Hard Work",
      "slug": "hard-work",
      "url": "/topics/hard-work/"
    },
    {
      "name": "Martin Waddell",
      "slug": "martin-waddell",
      "url": "/topics/martin-waddell/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
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
    "description": "Poor, poor Farmer Duck! He irons. He gardens. He even does the dishes. Duck has been picking up the “real” farmer’s slack while the sloth lies in bed, munching on chocolates. Bleary eyed and exhausted from all his…",
    "image": "https://vegbooks.org/media/2010/04/9781564025968.jpg"
  },
  "previous": {
    "title": "Granny Gomez and Jigsaw",
    "url": "/reviews/granny-gomez-and-jigsaw/"
  },
  "next": {
    "title": "Let’s Save the Animals",
    "url": "/reviews/save-the-animals/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/9781564025968.jpg"}><img src={"/media/2010/04/9781564025968.jpg"} alt={"Farmer Duck"} width={225} height={240} /></a>
      </figure>
      <p>{"Poor, poor Farmer Duck! He irons. He gardens. He even does the dishes. Duck has been picking up the “real” farmer’s slack while the sloth lies in bed, munching on chocolates. Bleary eyed and exhausted from all his (or her… gender really isn’t used for the animals) multitasking, Farmer Duck elicits the empathy of his friends on the farm who plot a coup (a tad Orwellian here) under the light of the moon."}</p>
      <p>{"Come morning, both farmers are in for a big surprise as the animals jolt the human farmer out of bed and run him off the property, never to be seen again. None the wiser, Farmer Duck awakes and calls out, “How goes the work?” and instead of a simple answer, receives a “Moo!,” “Baa!,” and “Cluck!” from the barnyard gang, explaining all that had transpired. The tale ends with a picturesque look at the animals working on their farm."}</p>
      <p><em><a href={"http://www.librarything.com/work/17887"} target="_blank" rel="noopener noreferrer">{"Farmer Duck"}</a></em>{"’s not just a classic because of its animal liberation theme. It sends a strong message to kids about subscribing to a hard work ethic and what it means to be a true comrade … and sometimes that requires staging an uprising to help a fellow feathered friend."}</p>
      <p>{"Ages 3-8."}</p>
    </div>
  );
}
