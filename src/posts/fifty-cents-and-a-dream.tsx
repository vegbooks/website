import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9258",
  "slug": "fifty-cents-and-a-dream",
  "url": "/reviews/fifty-cents-and-a-dream/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/11/17/fifty-cents-and-a-dream/",
  "title": "Fifty Cents and a Dream",
  "publishedAt": "2013-11-17",
  "publishedLabel": "November 17th, 2013",
  "excerpt": "Fifty Cents and a Dream covers the humble beginnings of Booker T. Washington, from his early life as a slave through his emancipation, early school attendance, and eventual fulfillment of his goal of attending…",
  "image": {
    "src": "/media/2013/12/fifty.jpg",
    "alt": "Fifty",
    "width": 210,
    "height": 225
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
      "name": "Adversity",
      "slug": "adversity",
      "url": "/topics/adversity/"
    },
    {
      "name": "American",
      "slug": "american",
      "url": "/topics/american/"
    },
    {
      "name": "Biography",
      "slug": "biography",
      "url": "/topics/biography/"
    },
    {
      "name": "Booker T. Washington",
      "slug": "booker-t-washington",
      "url": "/topics/booker-t-washington/"
    },
    {
      "name": "Bryan Collier",
      "slug": "bryan-collier",
      "url": "/topics/bryan-collier/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Heather Clark",
      "slug": "heather-clark",
      "url": "/topics/heather-clark/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jabari Asim",
      "slug": "jabari-asim",
      "url": "/topics/jabari-asim/"
    },
    {
      "name": "Perseverence",
      "slug": "perseverence",
      "url": "/topics/perseverence/"
    },
    {
      "name": "Reading",
      "slug": "reading",
      "url": "/topics/reading/"
    },
    {
      "name": "Slavery",
      "slug": "slavery",
      "url": "/topics/slavery/"
    }
  ],
  "reviewer": {
    "name": "Heather Clark",
    "slug": "heather-clark",
    "url": "/contributors/heather-clark/",
    "aliases": [
      "HEATHER CLARK"
    ]
  },
  "seo": {
    "description": "Fifty Cents and a Dream covers the humble beginnings of Booker T. Washington, from his early life as a slave through his emancipation, early school attendance, and eventual fulfillment of his goal of attending…",
    "image": "https://vegbooks.org/media/2013/12/fifty.jpg"
  },
  "previous": {
    "title": "Jo MacDonald Hiked in the Woods",
    "url": "/reviews/jo-macdonald-hiked-in-the-woods/"
  },
  "next": {
    "title": "Feeding the Young Athlete",
    "url": "/reviews/feeding-the-young-athlete/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/12/fifty.jpg"}><img src={"/media/2013/12/fifty.jpg"} alt={"Fifty"} width={210} height={225} /></a>
      </figure>
      <p><em>{"Fifty Cents and a Dream"}</em>{" covers the humble beginnings of Booker T. Washington, from his early life as a slave through his emancipation, early school attendance, and eventual fulfillment of his goal of attending college.Despite being an owned slave, prohibited by law from attending school or possessing books, young Booker has a longing to learn and a dream to read. As the story progresses, we see him make sacrifices and put in the hard work necessary to meet and exceed every goal he sets for himself. Ultimately, it is a story of perseverance in the face of great adversity."}</p>
      <p>{"I will admit that I didn’t know much about Washington prior to receiving my review copy of this book, and felt the story did not go to great lengths to educate me on the topic. But this seems to be by design, as the book leans more towards inspiration than information. For those that do want more detail, the supplementary information in the back of the book , including a comprehensive timeline of Washington’s life and accomplishments, rectifies this issue."}</p>
      <p>{"The book’s illustrations are stunning and the collage style lends it a near 3-D feel in spots. The raised letters on the cover are a nice touch and the inside cover art is elegant. However, despite the uplifting story, the book overall has a subdued feel. Perhaps it’s meant to match the seriousness of the subject and the hardship that Booker endured throughout his journey, but I’m not sure I’d have picked up the book if browsing. Varying sources list the age range for this book as anywhere from age three to grade four. Due to the content covered in the piece, I’d suggest it is most appropriate for the elementary school reader. Given that slavery is a key theme and related vernacular is used, it would likely be best to have covered the topic first or be prepared for questions."}</p>
    </div>
  );
}
