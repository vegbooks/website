import type { PostMetadata } from '../content/types';

export const article = {
  "id": "77",
  "slug": "hubert-the-pudge-a-vegetarian-tale",
  "url": "/reviews/hubert-the-pudge-a-vegetarian-tale/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/10/31/hubert-the-pudge-a-vegetarian-tale/",
  "title": "Hubert the Pudge: A Vegetarian Tale",
  "publishedAt": "2009-10-31",
  "publishedLabel": "October 31st, 2009",
  "excerpt": "This book by Henrik Drescher doesn’t beat around the bush. It’s the story of a horrible pudge processing farm where the animals are kept confined until it’s time for slaughter. Happily, one small pudge named Hubert…",
  "image": {
    "src": "/media/2009/11/hubert-the-pudge1.jpg",
    "alt": "Hubert the Pudge",
    "width": 216,
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
      "name": "animal rights",
      "slug": "animal-rights",
      "url": "/topics/animal-rights/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "factory farming",
      "slug": "factory-farming",
      "url": "/topics/factory-farming/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Henrik Drescher",
      "slug": "henrik-drescher",
      "url": "/topics/henrik-drescher/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Pig",
      "slug": "pig",
      "url": "/topics/pig/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
    },
    {
      "name": "Vegan Childrens Books",
      "slug": "vegan-childrens-books",
      "url": "/topics/vegan-childrens-books/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
    },
    {
      "name": "Vegetarian Children",
      "slug": "vegetarian-children",
      "url": "/topics/vegetarian-children/"
    },
    {
      "name": "Vegetarian Kids Books",
      "slug": "vegetarian-kids-books",
      "url": "/topics/vegetarian-kids-books/"
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
    "description": "This book by Henrik Drescher doesn’t beat around the bush. It’s the story of a horrible pudge processing farm where the animals are kept confined until it’s time for slaughter. Happily, one small pudge named Hubert…",
    "image": "https://vegbooks.org/media/2009/11/hubert-the-pudge1.jpg"
  },
  "previous": {
    "title": "Endangered Animals",
    "url": "/reviews/endangered-animals/"
  },
  "next": {
    "title": "Purplicious",
    "url": "/reviews/purplicious/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2009/11/hubert-the-pudge1.jpg"} alt={"Hubert the Pudge"} width={216} height={240} />
      </figure>
      <p>{"This book by "}<a href={"http://www.hdrescher.com/"} target="_blank" rel="noopener noreferrer">{"Henrik Drescher"}</a>{" doesn’t beat around the bush. It’s the story of a horrible pudge processing farm where the "}<a href={"http://farmsanctuary.org/issues/factoryfarming/pork/gestationcrates.html"} target="_blank" rel="noopener noreferrer">{"animals are kept confined"}</a>{" until it’s time for slaughter. Happily, one small pudge named Hubert escapes on the rare occasion that Farmer Jake lets the animals outside while he cleans the barn. Hubert grows large in the jungle then returns to free his friends and strong-arm Jake into doing something better with his life. In the end, Jake cleans up his act, finds love, and opens a "}<a href={"http://blog.peta.org/archives/tofu_pups/"} target="_blank" rel="noopener noreferrer">{"tofu hot dog"}</a>{" company."}</p>
      <p>{"I love that this book exposes the horrors of animal agriculture in a kid-friendly way (though parts might be scary for some), but I’m not nuts about the illustrations. That said, I’ll be the first to admit that the "}<a href={"http://www.book-by-its-cover.com/childrens/hubert-the-pudge-a-vegetarian-tale"} target="_blank" rel="noopener noreferrer">{"aesthetics of this quirky book"}</a>{"are definitely a matter of personal taste. You and your kid might go wild for Hubert, the pudges, and the wacky coifs of Jake and his bride Heidi. Or you might be like me, studiously sticking to the text so I don’t need to look at the pictures."}</p>
      <p>{"Ages 4 to 8. For more info, visit the "}<a href={"http://www.navs-online.org/webstore/books/for-children-youth/hubert-the-pudge.html"} target="_blank" rel="noopener noreferrer">{"North American Vegetarian Society"}</a>{" or "}<a href={"http://www.librarything.com/work/2013493"} target="_blank" rel="noopener noreferrer">{"Library Thing"}</a>{"."}</p>
    </div>
  );
}
