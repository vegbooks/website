import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5263",
  "slug": "i-am-the-dog",
  "url": "/reviews/i-am-the-dog/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/20/i-am-the-dog/",
  "title": "I Am the Dog",
  "publishedAt": "2011-05-20",
  "publishedLabel": "May 20th, 2011",
  "excerpt": "I Am the Dog is the silly story of Jacob (the boy) and Max (the dog). Penned by noted children’s author, commentator and critic Daniel Pinkwater, this book is a fun romp through a day in the lives of a kid and his…",
  "image": {
    "src": "/media/2011/05/iamdog-hc-c.jpg",
    "alt": "I Am the Dog",
    "width": 210,
    "height": 272
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Daniel Pinkwater",
      "slug": "daniel-pinkwater",
      "url": "/topics/daniel-pinkwater/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jack E. Davis",
      "slug": "jack-e-davis",
      "url": "/topics/jack-e-davis/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
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
    "description": "I Am the Dog is the silly story of Jacob (the boy) and Max (the dog). Penned by noted children’s author, commentator and critic Daniel Pinkwater, this book is a fun romp through a day in the lives of a kid and his…",
    "image": "https://vegbooks.org/media/2011/05/iamdog-hc-c.jpg"
  },
  "previous": {
    "title": "Crazy Hair",
    "url": "/reviews/crazy-hair/"
  },
  "next": {
    "title": "OK Go",
    "url": "/reviews/ok-go/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/05/iamdog-hc-c.jpg"}><img src={"/media/2011/05/iamdog-hc-c.jpg"} alt={"I Am the Dog"} width={210} height={272} /></a>
      </figure>
      <p><em><a href={"http://www.powells.com/biblio/1-9780060555054-0"} target="_blank" rel="noopener noreferrer">{"I Am the Dog"}</a></em>{" is the silly story of Jacob (the boy) and Max (the dog). Penned by noted children’s author, commentator and critic "}<a href={"http://www.powells.com/blog/?p=5884"} target="_blank" rel="noopener noreferrer">{"Daniel Pinkwater"}</a>{", this book is a fun romp through a day in the lives of a kid and his dog. The colorful and fun illustrations by "}<a href={"http://picture-book.com/imagelist/72"} target="_blank" rel="noopener noreferrer">{"Jack E. Davis"}</a>{" add the perfect amount of humor to this lively tale."}</p>
      <p>{"One night Max and Jacob decide to change places, agreeing that Max will do human boy things the next day, and Jacob will do the doggie things Max normally finds himself undertaking. Older preschool and young elementary kids will love seeing what Max and Jacob do throughout the next day as they switch roles. Adults will likely enjoy Pinkwater’s and Davis’s portrayal of Jacob’s completely nonplussed parents, who do not bat an eyelash when Jacob asks for his breakfast served to him in a bowl on the floor (though Jacob’s mom does scold him later for eating Max’s homework). Jacob has a great time when Max takes him to the park, his dad brings him home special kibble for dinner, and he enjoys dashing around the yard in circles while Max sits at the table dining on spaghetti and meatballs. (Note that these depictions are potentially non-veg, if you have a questioning child.)"}</p>
      <p>{"Max and Jacob end their story by coming to one of the more obvious conclusions: it is best to be a (well-cared for, loved) dog."}</p>
      <p>{"Recommended for ages 4 and up."}<strong><br /></strong></p>
    </div>
  );
}
