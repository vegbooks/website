import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7235",
  "slug": "sweet-dreams",
  "url": "/reviews/sweet-dreams/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/04/09/sweet-dreams/",
  "title": "Sweet Dreams",
  "publishedAt": "2012-04-09",
  "publishedLabel": "April 9th, 2012",
  "excerpt": "Full of comforting rhyme and imagery, Sweet Dreams, written by Rose A. Lewis and illustrated by Jen Corace, tells the story of the nighttime to a young girl before going to bed. While the mother puts pajamas on her…",
  "image": {
    "src": "/media/2012/04/9781419701894.jpg",
    "alt": "Sweet Dreams",
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
      "name": "Andrea Zollman",
      "slug": "andrea-zollman",
      "url": "/topics/andrea-zollman/"
    },
    {
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Darkness",
      "slug": "darkness",
      "url": "/topics/darkness/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jen Corace",
      "slug": "jen-corace",
      "url": "/topics/jen-corace/"
    },
    {
      "name": "Nighttime",
      "slug": "nighttime",
      "url": "/topics/nighttime/"
    },
    {
      "name": "Nocturnal Animals",
      "slug": "nocturnal-animals",
      "url": "/topics/nocturnal-animals/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Rhyming Books",
      "slug": "rhyming-books",
      "url": "/topics/rhyming-books/"
    },
    {
      "name": "Rose A. Lewis",
      "slug": "rose-a-lewis",
      "url": "/topics/rose-a-lewis/"
    }
  ],
  "reviewer": {
    "name": "Andrea Zollman",
    "slug": "andrea-zollman",
    "url": "/contributors/andrea-zollman/",
    "aliases": [
      "ANDREA ZOLLMAN"
    ]
  },
  "seo": {
    "description": "Full of comforting rhyme and imagery, Sweet Dreams, written by Rose A. Lewis and illustrated by Jen Corace, tells the story of the nighttime to a young girl before going to bed. While the mother puts pajamas on her…",
    "image": "https://vegbooks.org/media/2012/04/9781419701894.jpg"
  },
  "previous": {
    "title": "Peregrine’s Sky",
    "url": "/reviews/peregrines-sky/"
  },
  "next": {
    "title": "Eye on the Wild: Cheetah and Gorilla",
    "url": "/reviews/eye-on-the-wild-cheetah-and-gorilla/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/04/9781419701894.jpg"}><img src={"/media/2012/04/9781419701894.jpg"} alt={"Sweet Dreams"} width={210} height={210} /></a>
      </figure>
      <p>{"Full of comforting rhyme and imagery, "}<em>{"Sweet Dreams"}</em>{", written by Rose A. Lewis and illustrated by Jen Corace, tells the story of the nighttime to a young girl before going to bed. While the mother puts pajamas on her daughter, she tells her “Good night, my precious child/May your dreams belong and sweet/and full of great adventures/with the friends you’re soon to meet.”"}</p>
      <p>{"The moon smiles in at the child through the bedroom window, a stuffed toy tiger lays on her bed, and a bunny lamp reminiscent of the bunny in "}<em><a href={"http://www.amazon.com/gp/product/0060775858/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0060775858"} target="_blank" rel="noopener noreferrer">{"Goodnight Moon"}</a></em>{" by Margaret Wise Brown glows warmly nearby while a cat curls around the night table. In fact, I started this book expecting a story in the same vein as "}<em>{"Goodnight Moon"}</em>{" and it is surprisingly not; instead it tells the story of nocturnal animals that eat and cuddle and sing while the little girl sleeps. There is nothing to fear in the night. These animals “come alive in darkness/They have no need of light.” And soon the night will end and the animals and flowers that sleep at night will wake with the sun."}</p>
      <p>{"The illustrations of the nighttime and daytime scenes, done in pen, ink and watercolor, will captivate children and adults who read this book, and the story is sweet and peaceful and a great bedtime tale. The verse is awkward in one or two places, but it is doubtful children will notice this, and overall it flows organically and gently, like water flowing in a babbling brook under the light of the full moon. All readers, vegetarians, vegans and omnivores, will appreciate this simple story that contrasts day with night."}</p>
      <p>{"Ages 3 to 6."}</p>
    </div>
  );
}
