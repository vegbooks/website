import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8912",
  "slug": "roly-poly-pangolin",
  "url": "/reviews/roly-poly-pangolin/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/05/31/roly-poly-pangolin/",
  "title": "Roly Poly Pangolin",
  "publishedAt": "2013-05-31",
  "publishedLabel": "May 31st, 2013",
  "excerpt": "Pango…what? Pangolins are adorable scaly mammals (author/illustrator Anna Dewdney clearly has a soft spot for them) and Roly Poly Pangolin(Amazon affiliate link) is an equally adorable book about a very shy baby…",
  "image": {
    "src": "/media/2011/07/toddler-baby-reading.jpg",
    "alt": "Toddler-baby reading",
    "width": 210,
    "height": 300
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
      "name": "Anna Dewdney",
      "slug": "anna-dewdney",
      "url": "/topics/anna-dewdney/"
    },
    {
      "name": "Endangered Species",
      "slug": "endangered-species",
      "url": "/topics/endangered-species/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Pangolins",
      "slug": "pangolins",
      "url": "/topics/pangolins/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "Pango…what? Pangolins are adorable scaly mammals (author/illustrator Anna Dewdney clearly has a soft spot for them) and Roly Poly Pangolin(Amazon affiliate link) is an equally adorable book about a very shy baby…",
    "image": "https://vegbooks.org/media/2011/07/toddler-baby-reading.jpg"
  },
  "previous": {
    "title": "Mind of My Own",
    "url": "/reviews/mind-of-my-own/"
  },
  "next": {
    "title": "Kidlicious: Fun & Healthy Recipes That Kids Love!",
    "url": "/reviews/kidlicious-fun-healthy-recipes-that-kids-love/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/toddler-baby-reading.jpg"}><img src={"/media/2011/07/toddler-baby-reading.jpg"} alt={"Toddler-baby reading"} width={210} height={300} /></a>
      </figure>
      <p>{"Pango…what? Pangolins are adorable scaly mammals (author/illustrator Anna Dewdney "}<a href={"http://annadewdney.com/Annas_website/Pangolins%21.html"} target="_blank" rel="noopener noreferrer">{"clearly has a soft spot for them"}</a>{") and "}<em>{"Roly Poly Pangolin"}</em>{"("}<a href={"http://www.amazon.com/gp/product/0670011606/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0670011606&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") is an equally adorable book about a very shy baby pangolin."}</p>
      <p>{"Poor Roly Poly is very small and doesn’t like new things at all. Toddlers and pre-schoolers will relate to and enjoy reading about Roly Poly’s apprehension when it comes to exploring the world around him and his feelings of happiness when he meets a new friend with whom he can have adventures. The illustrations round out the story as children are introduced to this lesser-known species and some of its habitat and behaviors, like rolling into a ball when threatened."}</p>
      <p>{"This is simple, cute book that young children will request again and again."}</p>
      <p>{"There is a well placed note after the story discussing the pangolins’ endangered status. Caregivers can choose whether or not they want to discuss this with their children or just leave the story as it stands."}</p>
      <p>{"Ages 2-5."}</p>
    </div>
  );
}
