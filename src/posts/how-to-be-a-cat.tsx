import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9463",
  "slug": "how-to-be-a-cat",
  "url": "/reviews/how-to-be-a-cat/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/01/14/how-to-be-a-cat/",
  "title": "How to Be a Cat",
  "publishedAt": "2014-01-14",
  "publishedLabel": "January 14th, 2014",
  "excerpt": "Small Kitten learns the tricks of the cat trade and we are along for the ride in Nikki McClure’s How to Be a Cat (Amazon affiliate link). Spare in its prose but unskimping on detailed illustrations, this story is a…",
  "image": {
    "src": "/media/2014/01/howtobeacat.jpg",
    "alt": "Image of the children's book How to Be a Cat by Nikki McClure, reviewed by Jennifer Gannett for Vegbooks",
    "width": 210,
    "height": 165
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
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
      "name": "Nikki McClure",
      "slug": "nikki-mcclure",
      "url": "/topics/nikki-mcclure/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
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
    "description": "Small Kitten learns the tricks of the cat trade and we are along for the ride in Nikki McClure’s How to Be a Cat (Amazon affiliate link). Spare in its prose but unskimping on detailed illustrations, this story is a…",
    "image": "https://vegbooks.org/media/2014/01/howtobeacat.jpg"
  },
  "previous": {
    "title": "Brown Bear & Friends",
    "url": "/reviews/brown-bear-friends/"
  },
  "next": {
    "title": "In a Heartbeat",
    "url": "/reviews/in-a-heartbeat/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/how-to-be-a-cat/"}><img src={"/media/2014/01/howtobeacat.jpg"} alt={"Image of the children's book How to Be a Cat by Nikki McClure, reviewed by Jennifer Gannett for Vegbooks"} width={210} height={165} /></a>
      </figure>
      <p>{"Small Kitten learns the tricks of the cat trade and we are along for the ride in Nikki McClure’s "}<em>{"How to Be a Cat"}</em>{" "}<a href={"http://www.amazon.com/gp/product/B00CC92ICA/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00CC92ICA&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"(Amazon affiliate link)"}</a>{". Spare in its prose but unskimping on detailed illustrations, this story is a delight for young cat friends as we see Small Kitten (and Big Cat) exploring and learning about the world."}</p>
      <p>{"One of the many special things about this book is the way each illustration captures the activities of a young kitty. The depictions are in black and white with blue typography and accents. This spare design serves to focus the reader’s attention on the beautifully executed woodcuts. Caregivers of sensitive youngsters will note that there is a page dedicated to hunting, though in keeping with the gentle spirit of the book, there is nothing upsetting or gory depicted. There is a warmth and humor in the book that comes from knowing cats well and in fact a small note at the end describes how the author/illustrator came to have a cat in her household. Nikki McClure is a favorite of mine, and this book is a sweet and lovely addition to her body of work."}</p>
      <p>{"Excellent for ages 1 and up."}</p>
    </div>
  );
}
