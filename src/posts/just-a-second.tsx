import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6718",
  "slug": "just-a-second",
  "url": "/reviews/just-a-second/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/12/31/just-a-second/",
  "title": "Just a Second",
  "publishedAt": "2011-12-31",
  "publishedLabel": "December 31st, 2011",
  "excerpt": "I remember the long stretch of days when I was a kid, how summer seemed endless, and that we settled into games quickly enough to (nearly) finish them in twenty minutes of recess. Looking back, I think that time…",
  "image": {
    "src": "/media/2011/12/just-a-second-hres-1.jpg",
    "alt": "Just a Second",
    "width": 210,
    "height": 169
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
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
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
      "name": "Human Body",
      "slug": "human-body",
      "url": "/topics/human-body/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
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
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "I remember the long stretch of days when I was a kid, how summer seemed endless, and that we settled into games quickly enough to (nearly) finish them in twenty minutes of recess. Looking back, I think that time…",
    "image": "https://vegbooks.org/media/2011/12/just-a-second-hres-1.jpg"
  },
  "previous": {
    "title": "Tyrannosaurus Drip",
    "url": "/reviews/tyrannosaurus-drip/"
  },
  "next": {
    "title": "Vegan Pregnancy Survival Guide",
    "url": "/reviews/vegan-pregnancy-survival-guide/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/12/just-a-second-hres-1.jpg"}><img src={"/media/2011/12/just-a-second-hres-1.jpg"} alt={"Just a Second"} width={210} height={169} /></a>
      </figure>
      <p>{"I remember the long stretch of days when I was a kid, how summer seemed endless, and that we settled into games quickly enough to (nearly) finish them in twenty minutes of recess. Looking back, I think that time seemed different then, possibly because of my point of reference — only a few years of memories, only a few more years than that spent alive. So then, I wonder, how do hummingbirds and tortoises experience the world and the passage of time?"}</p>
      <p>{"In what may be the best children’s book of 2011, Steve Jenkins explores just this question, and many others too. Not only does "}<em><a href={"http://www.nytimes.com/2011/11/23/books/just-a-second-steve-jenkins-review.html?_r=1"} target="_blank" rel="noopener noreferrer">{"Just a Second"}</a></em>{"simulataneously dive into the conventions of time — which increments are related to the workings of the universe (the year) and which are artificial constructs (the second) — and the natural histories of many animals (including humans), but does so in a way that’s completely accessible to children. With intriguing nuggets of information, such as the fact that a baby blue whale feeding on mother’s milk may gain ten pounds in an hour, Jenkins’ is the kind of book that may inspire a child to become a marine mammologist, or a naturalist, or a physicist. Facts aren’t presented for information’s sake, or even for mere interest, but because they may inspire further inquiry — an approach I absolutely love."}</p>
      <p>{"Bright, eye-catching illustrations round out this wonderful children’s book, which would readily do double-duty as a coffee table book."}</p>
      <p>{"Families who care about the environment will delight to learn that this book, like many of Jenkins’ other works, has a strong but subtle conservation theme. Readers will discover, for example, that each minute, 59,000 barrels of oil are used (almost 15,000 of them in the United States), and each hour, an average of 19 gallons of fresh water is used for every person on earth."}</p>
      <p>{"Oh, and did I mention that Jenkins presents a stunning one-page visual history of the universe, and a compelling graphic about the growth of the human population?"}</p>
      <p>{"This "}<a href={"http://www.amazon.com/gp/product/0618708960/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0618708960"} target="_blank" rel="noopener noreferrer">{"masterpiece of a book"}</a>{" is a great pick for kids ages 4 to 8 (and adults like me)."}</p>
    </div>
  );
}
