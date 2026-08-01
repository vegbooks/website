import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4843",
  "slug": "what-is-easter",
  "url": "/reviews/what-is-easter/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/04/16/what-is-easter/",
  "title": "What Is Easter?",
  "publishedAt": "2011-04-16",
  "publishedLabel": "April 16th, 2011",
  "excerpt": "What Is Easter? describes traditional Easter celebrations as the narrator attempts to determine the true meaning of Easter. Is it the bunnies, the eggs, the candy, the baby chicks, the gifts, the fancy dress, the…",
  "image": {
    "src": "/media/2011/04/9780824966392.jpg",
    "alt": "What Is Easter?",
    "width": 210,
    "height": 179
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
      "name": "Amy Wummer",
      "slug": "amy-wummer",
      "url": "/topics/amy-wummer/"
    },
    {
      "name": "Christian Vegetarians",
      "slug": "christian-vegetarians",
      "url": "/topics/christian-vegetarians/"
    },
    {
      "name": "Christianity",
      "slug": "christianity",
      "url": "/topics/christianity/"
    },
    {
      "name": "Easter",
      "slug": "easter",
      "url": "/topics/easter/"
    },
    {
      "name": "Holiday",
      "slug": "holiday",
      "url": "/topics/holiday/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Michelle Adams",
      "slug": "michelle-adams",
      "url": "/topics/michelle-adams/"
    },
    {
      "name": "Religion",
      "slug": "religion",
      "url": "/topics/religion/"
    },
    {
      "name": "Spring",
      "slug": "spring",
      "url": "/topics/spring/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "What Is Easter? describes traditional Easter celebrations as the narrator attempts to determine the true meaning of Easter. Is it the bunnies, the eggs, the candy, the baby chicks, the gifts, the fancy dress, the…",
    "image": "https://vegbooks.org/media/2011/04/9780824966392.jpg"
  },
  "previous": {
    "title": "The Secret of Saying Thanks",
    "url": "/reviews/the-secret-of-saying-thanks/"
  },
  "next": {
    "title": "Cloudy with a Chance of Meatballs (2009)",
    "url": "/reviews/cloudy-with-a-chance-of-meatballs/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/9780824966392.jpg"}><img src={"/media/2011/04/9780824966392.jpg"} alt={"What Is Easter?"} width={210} height={179} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=&l=as2&o=1&a=0824966910"} alt={""} width={1} height={1} />
      </figure>
      <p><em><a href={"http://www.amazon.com/gp/product/0824966910/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0824966910"} target="_blank" rel="noopener noreferrer">{"What Is Easter?"}</a></em>{" describes traditional Easter celebrations as the narrator attempts to determine the true meaning of Easter. Is it the bunnies, the eggs, the candy, the baby chicks, the gifts, the fancy dress, the parade, the choir? No, of course not! Though these things are fun, Easter is about Jesus. After describing meaning of the holiday, the book ends with “It’s all about God’s son” with a image of a family praying in church."}</p>
      <p>{"Religious families will appreciate a book that plainly and simply describes the meaning of Easter in a fun manner. Jesus’ death and resurrection are described in a happy tone which makes the spirit of the holiday joyful, unlike some other Easter stories. Families may be concerned that death is mentioned, which may spark difficult conversations."}</p>
      <p>{"Vegan families will appreciate that the eggs mentioned are plastic eggs filled with candy (though "}<a href={"http://www.veganstore.com/product/655/vegan-marshmallows-and-other-sweets"} target="_blank" rel="noopener noreferrer">{"jelly beans"}</a>{" are mentioned, which are likely not vegan). Families concerned about animal welfare will be concerned that buying chicks is described as part of the traditional Easter celebration."}</p>
      <p>{"Ages 2-6."}</p>
    </div>
  );
}
