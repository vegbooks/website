import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1307",
  "slug": "so-you-love-animals",
  "url": "/reviews/so-you-love-animals/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/26/so-you-love-animals/",
  "title": "So, You Love Animals",
  "publishedAt": "2010-04-26",
  "publishedLabel": "April 26th, 2010",
  "excerpt": "For a parent who is raising vegetarian children, this book can come in quite handy. It’s a good resource for finding things to do with your children that can help them get involved with learning more about animals…",
  "image": {
    "src": "/media/2010/04/1-88169-901-3-soy.jpg",
    "alt": "So, You Love Animals",
    "width": 209,
    "height": 270
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
      "name": "Books for Vegetarian Kids",
      "slug": "books-for-vegetarian-kids",
      "url": "/topics/books-for-vegetarian-kids/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dissection",
      "slug": "dissection",
      "url": "/topics/dissection/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Lab Animals",
      "slug": "lab-animals",
      "url": "/topics/lab-animals/"
    },
    {
      "name": "Meat-eating",
      "slug": "meat-eating",
      "url": "/topics/meat-eating/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Vegan Childrens Books",
      "slug": "vegan-childrens-books",
      "url": "/topics/vegan-childrens-books/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Zoe Weil",
      "slug": "zoe-weil",
      "url": "/topics/zoe-weil/"
    },
    {
      "name": "Zoo",
      "slug": "zoo",
      "url": "/topics/zoo/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "For a parent who is raising vegetarian children, this book can come in quite handy. It’s a good resource for finding things to do with your children that can help them get involved with learning more about animals…",
    "image": "https://vegbooks.org/media/2010/04/1-88169-901-3-soy.jpg"
  },
  "previous": {
    "title": "Green Guide for Artists",
    "url": "/reviews/green-guide-for-artists/"
  },
  "next": {
    "title": "Granny Gomez and Jigsaw",
    "url": "/reviews/granny-gomez-and-jigsaw/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/1-88169-901-3-soy.jpg"}><img src={"/media/2010/04/1-88169-901-3-soy.jpg"} alt={"So, You Love Animals"} width={209} height={270} /></a>
      </figure>
      <p>{"For a parent who is raising vegetarian children, this book can come in quite handy. It’s a good resource for finding things to do with your children that can help them get involved with learning more about animals and their habitats, and helping to care for them."}</p>
      <p>{"The book covers such topics as meat, companion animals, animals in entertainment, "}<a href={"http://www.peta2.com/college/c-dissection.asp"} target="_blank" rel="noopener noreferrer">{"dissection"}</a>{", animal laboratories, and "}<a href={"http://www.hsus.org/wildlife/"} target="_blank" rel="noopener noreferrer">{"animals in the wild"}</a>{", offering pertinent facts about each. There are also projects the kids can undertake to help them learn more about the issues."}</p>
      <p>{"Some of the projects in the book that parents can help their children do include making a bird feeder and bath, keeping the beach clean, making wind chimes using natural materials like seashells, and ways to get active in helping to protect wildlife."}</p>
      <p>{"Depending on personal preferences, some parents may not care for the “be a zoo reporter” project because it involves visiting the zoo. However, it does lay out the "}<a href={"http://www.savezooelephants.com/inside_zoos.html"} target="_blank" rel="noopener noreferrer">{"facts and concerns with zoos"}</a>{", and provides a list of questions aimed at getting kids to take inventory of what they see wrong with zoos, and then to take steps to try and make things better."}</p>
      <p>{"Ages 9-12."}</p>
    </div>
  );
}
