import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3978",
  "slug": "sleepy-time",
  "url": "/reviews/sleepy-time/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/22/sleepy-time/",
  "title": "Sleepy Time",
  "publishedAt": "2011-01-22",
  "publishedLabel": "January 22nd, 2011",
  "excerpt": "Sleepy Time is a very short board book, full of simple rhymes. It showcases a handful of different animals and how they sleep—including baby Whale, who floats asleep in the ocean while her mom watches over her; baby…",
  "image": {
    "src": "/media/2011/01/toddler-boy-reading.jpg",
    "alt": "Sleepy Time",
    "width": 210,
    "height": 312
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
      "name": "Bats",
      "slug": "bats",
      "url": "/topics/bats/"
    },
    {
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Flamingos",
      "slug": "flamingos",
      "url": "/topics/flamingos/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Kathryn White",
      "slug": "kathryn-white",
      "url": "/topics/kathryn-white/"
    },
    {
      "name": "Pastel",
      "slug": "pastel",
      "url": "/topics/pastel/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    },
    {
      "name": "Whales",
      "slug": "whales",
      "url": "/topics/whales/"
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
    "description": "Sleepy Time is a very short board book, full of simple rhymes. It showcases a handful of different animals and how they sleep—including baby Whale, who floats asleep in the ocean while her mom watches over her; baby…",
    "image": "https://vegbooks.org/media/2011/01/toddler-boy-reading.jpg"
  },
  "previous": {
    "title": "I’m a Turkey",
    "url": "/reviews/i-am-a-turkey/"
  },
  "next": {
    "title": "Earth Heroes: Champions of the Wilderness",
    "url": "/reviews/earth-heroes/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/01/toddler-boy-reading.jpg"}><img src={"/media/2011/01/toddler-boy-reading.jpg"} alt={"Sleepy Time"} width={210} height={312} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1848570457"} alt={""} width={1} height={1} />
      </figure>
      <p><a href={"http://www.amazon.com/gp/product/1848570457?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1848570457"} target="_blank" rel="noopener noreferrer"><em>{"Sleepy Time"}</em></a>{" is a very short board book, full of simple rhymes. It showcases a handful of different animals and how they sleep—including baby Whale, who floats asleep in the ocean while her mom watches over her; baby Flamingo, who sleeps with his head tucked under his wing while standing on one leg; and baby Bat, who sleeps upside down under the stars. On the final page, a young girl sleeps snuggled in her cozy bed. Each rhyme is accompanied by a large pastel picture of a sleeping animal."}</p>
      <p>{"This is a very calming book that sets the tone for bedtime, and it helps reinforce the idea that animals are just like us, despite the different locations and positions that they sleep in. Kids will enjoy learning about the many different ways that animals sleep."}</p>
      <p>{"Ages 0-5."}</p>
    </div>
  );
}
