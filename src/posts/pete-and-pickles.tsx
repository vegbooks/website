import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1764",
  "slug": "pete-and-pickles",
  "url": "/reviews/pete-and-pickles/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/22/pete-and-pickles/",
  "title": "Pete and Pickles",
  "publishedAt": "2010-05-22",
  "publishedLabel": "May 22nd, 2010",
  "excerpt": "Pete is a “perfectly predictable… perfectly practical… and a perfectly uncomplicated pig.” A sad little widower, Pete’s life gets turned upside down by Pickles, an imaginative and adventuresome circus-escapee…",
  "image": {
    "src": "/media/2010/05/pete-pickles.jpg",
    "alt": "Pete and Pickles",
    "width": 216,
    "height": 216
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
      "name": "Berkeley Breathed",
      "slug": "berkeley-breathed",
      "url": "/topics/berkeley-breathed/"
    },
    {
      "name": "Circus",
      "slug": "circus",
      "url": "/topics/circus/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Elephants",
      "slug": "elephants",
      "url": "/topics/elephants/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
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
      "name": "Interspecies Friendship",
      "slug": "interspecies-friendship",
      "url": "/topics/interspecies-friendship/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Pete is a “perfectly predictable… perfectly practical… and a perfectly uncomplicated pig.” A sad little widower, Pete’s life gets turned upside down by Pickles, an imaginative and adventuresome circus-escapee…",
    "image": "https://vegbooks.org/media/2010/05/pete-pickles.jpg"
  },
  "previous": {
    "title": "Duck at the Door",
    "url": "/reviews/duck-at-the-door/"
  },
  "next": {
    "title": "The Curious Garden",
    "url": "/reviews/the-curious-garden/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/pete-pickles.jpg"}><img src={"/media/2010/05/pete-pickles.jpg"} alt={"Pete and Pickles"} width={216} height={216} /></a>
      </figure>
      <p>{"Pete is a “perfectly predictable… perfectly practical… and a perfectly uncomplicated pig.” A sad little widower, Pete’s life gets turned upside down by Pickles, an imaginative and adventuresome "}<a href={"http://www.circuses.com/"} target="_blank" rel="noopener noreferrer">{"circus"}</a>{"-escapee elephant. The two are so different in every way creating the age-old “opposites attract” conflict that makes for an exciting relationship and love story."}</p>
      <p>{"Every page is filled with dramatic and fantastic imagery and the story moves along at a fast clip. Emotions flow across the pages faster than the flood that traps the two characters but all of them tinted with humor. Told by a master storyteller with words and images, "}<a href={"http://www.berkeleybreathed.com/"} target="_blank" rel="noopener noreferrer">{"Berkeley Breathed"}</a>{" (creator of Opus and the comic "}<em>{"Bloom County"}</em>{") easily pulls the strings on our emotions like a master puppeteer. The characters are so well described and lovable that we could probably relate them to people we know in our own lives."}</p>
      <p>{"Mr. Breathed wrote an absolutely touching yet hilariously illustrated romance between a staid pig and a lively elephant. This is one exciting backyard adventure/love story not to be missed!"}</p>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0399250824"} alt={""} width={1} height={1} />
      </figure>
      <p>{"Grade 2-4 according to "}<a href={"http://www.schoollibraryjournal.com/article/CA6625221.html"} target="_blank" rel="noopener noreferrer">{"School Library Journal"}</a>{" but ages 4-8 on "}<a href={"http://www.amazon.com/gp/product/0399250824?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0399250824"} target="_blank" rel="noopener noreferrer">{"Amazon"}</a>{". (Personally, I think all ages would enjoy it as my 3 year old loves it and I find it brilliant!)"}</p>
    </div>
  );
}
