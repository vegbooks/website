import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9657",
  "slug": "little-turtles-big-adventure",
  "url": "/reviews/little-turtles-big-adventure/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/04/26/little-turtles-big-adventure/",
  "title": "Little Turtle’s Big Adventure",
  "publishedAt": "2014-04-26",
  "publishedLabel": "April 26th, 2014",
  "excerpt": "Even though this book was was first published in 1969, it is still highly relevant today. It begins with a little turtle enjoying his life by a pond. All the animals at the pond are happy until one day there is a…",
  "image": {
    "src": "/media/2010/12/toddler-girl-reading.jpg",
    "alt": "Toddler girl reading",
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
      "name": "1960s Childrens Literature",
      "slug": "1960s-childrens-literature",
      "url": "/topics/1960s-childrens-literature/"
    },
    {
      "name": "David Lee Harrison",
      "slug": "david-lee-harrison",
      "url": "/topics/david-lee-harrison/"
    },
    {
      "name": "Diane Vukovic",
      "slug": "diane-vukovic",
      "url": "/topics/diane-vukovic/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Habitat Destruction",
      "slug": "habitat-destruction",
      "url": "/topics/habitat-destruction/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Turtles",
      "slug": "turtles",
      "url": "/topics/turtles/"
    }
  ],
  "reviewer": {
    "name": "Diane Vukovic",
    "slug": "diane-vukovic",
    "url": "/contributors/diane-vukovic/",
    "aliases": [
      "DIANE VUKOVIC"
    ]
  },
  "seo": {
    "description": "Even though this book was was first published in 1969, it is still highly relevant today. It begins with a little turtle enjoying his life by a pond. All the animals at the pond are happy until one day there is a…",
    "image": "https://vegbooks.org/media/2010/12/toddler-girl-reading.jpg"
  },
  "previous": {
    "title": "Feathers: Not Just for Flying",
    "url": "/reviews/feathers-not-just-for-flying/"
  },
  "next": {
    "title": "On Kiki’s Reef",
    "url": "/reviews/on-kikis-reef/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/i-love-dogs/"}><img src={"/media/2010/12/toddler-girl-reading.jpg"} alt={"Toddler girl reading"} width={210} height={315} /></a>
      </figure>
      <p>{"Even though this book was was first published in 1969, it is still highly relevant today. It begins with a little turtle enjoying his life by a pond. All the animals at the pond are happy until one day there is a rumble like thunder. Men with bulldozers and machines come and push over trees, tear down hills and fill in the pond. When they are done, the pond is gone and in its place is a loud, busy road."}</p>
      <p>{"The little turtle realizes he needs to find a new home. He tries living in a field, on a hill, and in a forest but none of them are right for a little turtle. The weather changes so the little turtle goes underground for winter, which is a great way to introduce young children to the concept of hibernation. When he wakes up, he again must go search for a new home. Finally, a boy finds the turtle and carries him to a new pond where he can live happily."}</p>
      <p>{"This book ("}<a href={"http://www.amazon.com/gp/product/0394834429/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0394834429&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") gives parents a lot of great opportunities to talk to their kids about big concepts in simple ways. After the pond is replaced by a road, I asked my 3-year old which she liked better: the pond or road. I also asked if she thought it was nice for the people to destroy the turtle’s home. With older children, you can ask them questions about why the turtle didn’t like living in other places and what made the pond just right for him."}</p>
      <p>{"Ages 2-5."}</p>
    </div>
  );
}
