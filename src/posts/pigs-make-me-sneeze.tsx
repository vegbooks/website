import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6002",
  "slug": "pigs-make-me-sneeze",
  "url": "/reviews/pigs-make-me-sneeze/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/09/08/pigs-make-me-sneeze/",
  "title": "Pigs Make Me Sneeze",
  "publishedAt": "2011-09-08",
  "publishedLabel": "September 8th, 2011",
  "excerpt": "Mo Willems is a favorite children’s author in our house. We have most of the books in his “Elephant and Piggie” series, and they always make for a fun read. In Pigs Make Me Sneeze, when Gerald the elephant is…",
  "image": {
    "src": "/media/2011/09/willems-ep-pigs-make-me-sneeze.jpg",
    "alt": "Pigs Make Me Sneeze",
    "width": 210,
    "height": 290
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Elephants",
      "slug": "elephants",
      "url": "/topics/elephants/"
    },
    {
      "name": "Mo Willems",
      "slug": "mo-willems",
      "url": "/topics/mo-willems/"
    },
    {
      "name": "Piggie and Elephant",
      "slug": "piggie-and-elephant",
      "url": "/topics/piggie-and-elephant/"
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
    },
    {
      "name": "Sandi Lancaster",
      "slug": "sandi-lancaster",
      "url": "/topics/sandi-lancaster/"
    }
  ],
  "reviewer": {
    "name": "Sandi Lancaster",
    "slug": "sandi-lancaster",
    "url": "/contributors/sandi-lancaster/",
    "aliases": [
      "SANDI LANCASTER"
    ]
  },
  "seo": {
    "description": "Mo Willems is a favorite children’s author in our house. We have most of the books in his “Elephant and Piggie” series, and they always make for a fun read. In Pigs Make Me Sneeze, when Gerald the elephant is…",
    "image": "https://vegbooks.org/media/2011/09/willems-ep-pigs-make-me-sneeze.jpg"
  },
  "previous": {
    "title": "Grin and Bear It",
    "url": "/reviews/grin-and-bear-it/"
  },
  "next": {
    "title": "Sato and the Elephants",
    "url": "/reviews/sato-and-the-elephants/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/09/willems-ep-pigs-make-me-sneeze.jpg"}><img src={"/media/2011/09/willems-ep-pigs-make-me-sneeze.jpg"} alt={"Pigs Make Me Sneeze"} width={210} height={290} /></a>
      </figure>
      <p><a href={"http://www.pigeonpresents.com/books.aspx"} target="_blank" rel="noopener noreferrer">{"Mo Willems"}</a>{" is a favorite children’s author in our house. We have most of the books in his “Elephant and Piggie” series, and they always make for a fun read. In "}<em>{"Pigs Make Me Sneeze"}</em>{", when Gerald the elephant is approached by his best friend, Piggie, he finds that he cannot stop sneezing. He becomes worried that he may be allergic to pigs, and that he will not be able to be friends with Piggie anymore. He goes to see his doctor, Doctor Cat, who assures Gerald that he is not allergic to pigs at all. Doctor Cat diagnoses Gerald with a cold. Gerald returns to Piggie to tell "}<a href={"http://annieandaunt.blogspot.com/2011/05/piggie-is-girl.html"} target="_blank" rel="noopener noreferrer">{"her"}</a>{" the good news, only to discover that he has passed his cold onto her."}</p>
      <p>{"Like all the “Elephant and Piggie” books, "}<em>{"Pigs Make Me Sneeze"}</em>{" is written with gentle charm, and the friendship between Gerald and Piggie is very sweet. The drawings and words are simple, yet they manage to convey a lot of emotion and humor. "}<em>{"Pigs Make Me Sneeze"}</em>{", along with the other books in the series, are considered “early reader” books, and the repetition of the words somehow add to the charm of the story."}</p>
      <p>{"The story illustrates the animals in a positive and charming way. There are not any direct pro-vegetarian messages in the book (or the series) but neither have we encountered any anti-vegetarian themes either. I highly recommend this book and others in the series for an enjoyable read for kids and parents alike."}</p>
      <p>{"Ages 4 and up."}</p>
    </div>
  );
}
