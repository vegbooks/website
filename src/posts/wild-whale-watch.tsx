import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9981",
  "slug": "wild-whale-watch",
  "url": "/reviews/wild-whale-watch/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/01/07/wild-whale-watch/",
  "title": "The Wild Whale Watch (The Magic School Bus Chapter Book #3)",
  "publishedAt": "2015-01-07",
  "publishedLabel": "January 7th, 2015",
  "excerpt": "My five-year-old loves all things Magic School Bus — the TV show, the picture books, the chapter books, the science kits — all of it. And I have to say that I’m right there with her. The Magic School Bus series…",
  "image": {
    "src": "/media/2015/01/wild-whale-watch-cover.jpg",
    "alt": "WildWhaleWatch_cover",
    "width": 436,
    "height": 634
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
      "name": "Chapter Books",
      "slug": "chapter-books",
      "url": "/topics/chapter-books/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eva Moore",
      "slug": "eva-moore",
      "url": "/topics/eva-moore/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Magic School Bus",
      "slug": "magic-school-bus",
      "url": "/topics/magic-school-bus/"
    },
    {
      "name": "Science Books",
      "slug": "science-books",
      "url": "/topics/science-books/"
    },
    {
      "name": "Series",
      "slug": "series",
      "url": "/topics/series/"
    },
    {
      "name": "Whale Watching",
      "slug": "whale-watching",
      "url": "/topics/whale-watching/"
    },
    {
      "name": "Whales",
      "slug": "whales",
      "url": "/topics/whales/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
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
    "description": "My five-year-old loves all things Magic School Bus — the TV show, the picture books, the chapter books, the science kits — all of it. And I have to say that I’m right there with her. The Magic School Bus series…",
    "image": "https://vegbooks.org/media/2015/01/wild-whale-watch-cover.jpg"
  },
  "previous": {
    "title": "Planet Kindergarten",
    "url": "/reviews/planet-kindergarten/"
  },
  "next": {
    "title": "Harry and the Hendersons (1987)",
    "url": "/reviews/harry-and-the-hendersons-1987/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"My five-year-old loves all things Magic School Bus — the TV show, the picture books, the chapter books, the science kits — all of it. And I have to say that I’m right there with her. The Magic School Bus series teaches science to five-year-olds in a fun and engaging way."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2015/01/wild-whale-watch-cover.jpg"} alt={"WildWhaleWatch_cover"} width={436} height={634} />
      </figure>
      <p>{"It’s a story about elementary kids whose teacher, voiced by Lily Tomlin, is a bit eccentric and loves science. She has a school bus that is magical that she uses to take the kids on amazing adventures to learn about science, such a trip into space to learn how stars form. There is usually a little peril to keep things interesting and to promote problem solving skills. The stories are funny, interesting, and informative. I myself learn things I didn’t know when I read these stories to my daughter. I also love the brilliant teacher as a female science role model for kids to emulate."}</p>
      <p><em>{"The Magic School Bus Chapter Book #3 The Wild Whale Watch"}</em>{" ("}<a href={"http://www.amazon.com/gp/product/0439109906/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0439109906&linkCode=as2&tag=vegbooks-20&linkId=32SD65VSFYCWC3KD"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") is my favorite in the series so far. Whales have always been my favorite animal and this book manages to even teach me things about whales that I didn’t know. But the best part is towards the end if the book when the class discusses dwindling whale populations and that some countries still hunt whales for food. The class decides to participate in an adopt-a-whale program. At the end of the book there is information on how we can adopt whales for ourselves which my daughter immediately wanted to do. It’s a great book for any animal lover or lover of science."}</p>
    </div>
  );
}
