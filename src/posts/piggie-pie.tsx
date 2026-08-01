import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6954",
  "slug": "piggie-pie",
  "url": "/reviews/piggie-pie/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/02/14/piggie-pie/",
  "title": "Piggie Pie",
  "publishedAt": "2012-02-14",
  "publishedLabel": "February 14th, 2012",
  "excerpt": "A delectable, veg-friendly story about a wicked witch named Gritch who gets a craving for piggie pie. Of course the witch is not veg-friendly, but we can happily cheer on the clever piggies as they outsmart her. The…",
  "image": {
    "src": "/media/2012/02/0395716918-hres.jpg",
    "alt": "Piggie Pie",
    "width": 210,
    "height": 190
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Howard Fine",
      "slug": "howard-fine",
      "url": "/topics/howard-fine/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Illustrations",
      "slug": "illustrations",
      "url": "/topics/illustrations/"
    },
    {
      "name": "Margie Palatini",
      "slug": "margie-palatini",
      "url": "/topics/margie-palatini/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Witches",
      "slug": "witches",
      "url": "/topics/witches/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "A delectable, veg-friendly story about a wicked witch named Gritch who gets a craving for piggie pie. Of course the witch is not veg-friendly, but we can happily cheer on the clever piggies as they outsmart her. The…",
    "image": "https://vegbooks.org/media/2012/02/0395716918-hres.jpg"
  },
  "previous": {
    "title": "Who’s in a Family?",
    "url": "/reviews/whos-in-a-family/"
  },
  "next": {
    "title": "Babe: Pig in the City (1998)",
    "url": "/reviews/babe-pig-in-the-city/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/02/0395716918-hres.jpg"}><img src={"/media/2012/02/0395716918-hres.jpg"} alt={"Piggie Pie"} width={210} height={190} /></a>
      </figure>
      <p>{"A delectable, veg-friendly story about a wicked witch named Gritch who gets a craving for piggie pie. Of course the witch is not veg-friendly, but we can happily cheer on the clever piggies as they outsmart her. The tale was so edible the first helping that my daughter and I have gone back to gobble it up a second and third time!Although Gritch is clearly not a vegetarian, the dilemma she has in hunting down the main ingredient for a piggie pie is entertaining and humorously illustrated. Howard Fine does a spectacular job illustrating expressively unattractive witches, exciting perspective, and flavorful details. Even though my daughter and I were rooting for the piggies, we found there was something appealing about the omnivorous old hag that made us like her character despite her temper tantrums, green and warty appearance, and lack of empathy. We also enjoyed the drizzled references to children’s songs and piggie fairy tales."}</p>
      <p>{"The illustrations are so juicy and dripping with delicious details, that I couldn’t resist eating up Margie Palatini’s "}<em>{"Zoom Broom"}</em>{" and "}<em>{"Broom Mates"}</em>{", the follow-up stories about Gritch the Witch. Have yourself a taste of "}<em>{"Piggie Pie"}</em>{" to see if Gritch the Witch whets your appetite for more Palatini and Fine feasts."}</p>
      <p>{"Ages 5+."}</p>
    </div>
  );
}
