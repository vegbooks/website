import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3073",
  "slug": "hello-baby",
  "url": "/reviews/hello-baby/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/18/hello-baby/",
  "title": "Hello, Baby!",
  "publishedAt": "2010-09-18",
  "publishedLabel": "September 18th, 2010",
  "excerpt": "Mem Fox writes a simple and engaging tale relating animal characteristics to babies and toddlers. She uses rhyme to describe an animal on each page, but surprisingly focuses on some of the less obvious…",
  "image": {
    "src": "/media/2010/08/i-stock-000002866095-x-small.jpg",
    "alt": "Hello, Baby!",
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Body Parts",
      "slug": "body-parts",
      "url": "/topics/body-parts/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Mem Fox",
      "slug": "mem-fox",
      "url": "/topics/mem-fox/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Steve Jenkins",
      "slug": "steve-jenkins",
      "url": "/topics/steve-jenkins/"
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
    "description": "Mem Fox writes a simple and engaging tale relating animal characteristics to babies and toddlers. She uses rhyme to describe an animal on each page, but surprisingly focuses on some of the less obvious…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000002866095-x-small.jpg"
  },
  "previous": {
    "title": "EcoMazes: 12 Earth Adventures",
    "url": "/reviews/ecomazes-12-earth-adventures/"
  },
  "next": {
    "title": "Wave",
    "url": "/reviews/wave/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000002866095-x-small.jpg"}><img src={"/media/2010/08/i-stock-000002866095-x-small.jpg"} alt={"Hello, Baby!"} width={210} height={315} /></a>
      </figure>
      <p>{"Mem Fox writes a simple and engaging tale relating animal characteristics to babies and toddlers. She uses rhyme to describe an animal on each page, but surprisingly focuses on some of the less obvious characteristics such as a porcupine “twitching its nose.” The descriptions are not overly detailed but still names a fair amount of body-parts, which is age-appropriate for babies and toddlers. The illustrator, Steve Jenkins, enhances and perhaps even carries the story with his beautiful, detailed collage images of animal faces and small silhouettes of the animals."}</p>
      <p>{"The author’s/parent’s voice speaks directly to the child and is reminiscent of Eric Carle’s"}</p>
      <p>{"Brown Bear, Brown Bear What Do You See?"}</p>
      <p>{"by helping the audience relate to the animals. However Fox’s story differs in not focusing on color or a repeating refrain. The description of animal body parts gears the story a little more to the infant and baby set. Repetition could help the story become more memorable."}</p>
      <p>{"Used in an interactive way, this book could be very fun for little ones, even with the lack of repetition. My preschooler was finished after one read-through but she may desire a more complex storyline. I, however, was riveted by the illustrations and continue to be drawn to books with Jenkins’ artwork in them."}</p>
      <p>{"Ages infant- preschool."}</p>
    </div>
  );
}
