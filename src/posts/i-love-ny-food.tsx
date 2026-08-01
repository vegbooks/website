import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6433",
  "slug": "i-love-ny-food",
  "url": "/reviews/i-love-ny-food/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/11/26/i-love-ny-food/",
  "title": "I Love NY Food",
  "publishedAt": "2011-11-26",
  "publishedLabel": "November 26th, 2011",
  "excerpt": "I Love NY Food is a inviting coloring book full of pleasing, eye-catching drawings inspired by New York City’s abundant food options. Unlike Happy Thanksliving, this is not a strictly veg-friendly coloring book and…",
  "image": {
    "src": "/media/2011/11/0-cover-revised.jpg",
    "alt": "I Love NY Food",
    "width": 210,
    "height": 263
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
      "name": "Ashley Lucas",
      "slug": "ashley-lucas",
      "url": "/topics/ashley-lucas/"
    },
    {
      "name": "Coloring Pages",
      "slug": "coloring-pages",
      "url": "/topics/coloring-pages/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Ethnic Food",
      "slug": "ethnic-food",
      "url": "/topics/ethnic-food/"
    },
    {
      "name": "Food",
      "slug": "food",
      "url": "/topics/food/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "New York City",
      "slug": "new-york-city",
      "url": "/topics/new-york-city/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "I Love NY Food is a inviting coloring book full of pleasing, eye-catching drawings inspired by New York City’s abundant food options. Unlike Happy Thanksliving, this is not a strictly veg-friendly coloring book and…",
    "image": "https://vegbooks.org/media/2011/11/0-cover-revised.jpg"
  },
  "previous": {
    "title": "Kokeshi Kimonos Book",
    "url": "/reviews/kokeshi-kimonos-book/"
  },
  "next": {
    "title": "The Muppets (2011)",
    "url": "/reviews/the-muppets/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/11/0-cover-revised.jpg"}><img src={"/media/2011/11/0-cover-revised.jpg"} alt={"I Love NY Food"} width={210} height={263} /></a>
      </figure>
      <p><em><a href={"http://www.amazon.com/gp/product/1934597562/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=1934597562"} target="_blank" rel="noopener noreferrer">{"I Love NY Food"}</a></em>{" is a inviting coloring book full of pleasing, eye-catching drawings inspired by New York City’s abundant food options. Unlike "}<em><a href={"/reviews/happy-thanksliving/"}>{"Happy Thanksliving"}</a></em>{", this is not a strictly veg-friendly coloring book and there are depictions of meat, seafood and cheese."}</p>
      <p>{"In recent years, there has been a proliferation of cruelty-free meat and dairy alternatives which means that many veg kids are pretty familiar with options like vegan or vegetarian cheese, hot dogs, sausages, burgers, pepperoni, soft serve and cream cheese. Therefore, in my opinion, there are only a few pages that are verging on "}<a href={"http://suicidefood.blogspot.com/"} target="_blank" rel="noopener noreferrer">{"Suicide Food"}</a>{" — the Soul Food page’s drumstick and shrimp, for example, and pages depicting sushi. "}<em>{"I Love NY Food"}</em>{" includes bonus vegetarian pages, featuring selections that are typically considered vegetarian fare (though veg-friendly food choices like Chinese, pretzels, pierogi, pizza and falafel are featured in the main section). This book is very light on text."}</p>
      <p>{"Where this book really shines is with its simple, friendly pictures just waiting for a crayon or marker. Once colored in, each page is a bright treatment of that particular food choice. We enjoyed coloring the array of foods and discussing the bounty of choices that New York offers. Even if you don’t live in or near the city that never sleeps, your young family members and friends will probably enjoy coloring in this fun book, though those who do not wish to see depictions of any animal products may choose to remove or glue together some of its pages, or simply use them as a catalyst for discussion."}</p>
      <p>{"Ages 1 and up."}</p>
    </div>
  );
}
