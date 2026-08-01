import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8944",
  "slug": "the-dark",
  "url": "/reviews/the-dark/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/06/09/the-dark/",
  "title": "The Dark",
  "publishedAt": "2013-06-09",
  "publishedLabel": "June 9th, 2013",
  "excerpt": "When I was a kid, I refused to go to bed at night without my trusty night light. For years, I thought I was the only child who feared the dark because I never read any children’s books that featured it as a theme or…",
  "image": {
    "src": "/media/2013/06/e30ad71609ec3aa6f2d575167ac32aff.jpg",
    "alt": "e30ad71609ec3aa6f2d575167ac32aff",
    "width": 211,
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
      "name": "Andrea Zollman",
      "slug": "andrea-zollman",
      "url": "/topics/andrea-zollman/"
    },
    {
      "name": "Fear",
      "slug": "fear",
      "url": "/topics/fear/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jon Klassen",
      "slug": "jon-klassen",
      "url": "/topics/jon-klassen/"
    },
    {
      "name": "Lemony Snicket",
      "slug": "lemony-snicket",
      "url": "/topics/lemony-snicket/"
    },
    {
      "name": "Overcoming Fear",
      "slug": "overcoming-fear",
      "url": "/topics/overcoming-fear/"
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
    "name": "Andrea Zollman",
    "slug": "andrea-zollman",
    "url": "/contributors/andrea-zollman/",
    "aliases": [
      "ANDREA ZOLLMAN"
    ]
  },
  "seo": {
    "description": "When I was a kid, I refused to go to bed at night without my trusty night light. For years, I thought I was the only child who feared the dark because I never read any children’s books that featured it as a theme or…",
    "image": "https://vegbooks.org/media/2013/06/e30ad71609ec3aa6f2d575167ac32aff.jpg"
  },
  "previous": {
    "title": "Say Daddy",
    "url": "/reviews/say-daddy/"
  },
  "next": {
    "title": "Where to Sleep",
    "url": "/reviews/where-to-sleep/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/06/e30ad71609ec3aa6f2d575167ac32aff.jpg"}><img src={"/media/2013/06/e30ad71609ec3aa6f2d575167ac32aff.jpg"} alt={"e30ad71609ec3aa6f2d575167ac32aff"} width={211} height={270} /></a>
      </figure>
      <p>{"When I was a kid, I refused to go to bed at night without my trusty night light. For years, I thought I was the only child who feared the dark because I never read any children’s books that featured it as a theme or that didn’t make children ashamed of their fear of it."}</p>
      <p>{"Lemony Snicket, author of "}<em>{"A Series of Unfortunate Events"}</em>{"plus several picture books, highlights this common childhood fear in his new book, "}<em>{"The Dark"}</em>{", which I received as a review copy from "}<a href={"http://www.hachettebookgroup.com/kids/"} target="_blank" rel="noopener noreferrer">{"the publisher"}</a>{"."}</p>
      <p>{"We meet Laszlo, a boy who fears the dark. Even while playing in his house during the day, he thinks about the dark and where it lurks: in a closet, behind the shower curtain, in the basement. At night, the dark leaves its hiding places and permeates the house."}</p>
      <p>{"Laszlo tries to conquer his fear by visiting “the dark in the dark’s room” during the day. He thinks maybe it won’t bother him at night if he does this, but one night the dark overpowers his bright night light and plunges his room into darkness. And it calls him by name."}</p>
      <p>{"At this point, very young readers might quake a bit in their pajamas (if reading this at bedtime). Luckily, Laszlo has a flashlight. He turns it on and follows the dark through the pitch black hallway, down the stairs to the living room, and into the basement, where the dark lives day and night. Laszlo meets the dark and finds something he needs and conquers his fear of the dark, too. Illustrations by Jon Klassen add a warm glow to this timeless story."}</p>
      <p>{"This gentle, humorous book is for readers of all ages and will bring a smile to all, especially to those of us who used to be afraid of the dark but fear it no more."}</p>
      <p>{"Recommended for readers ages 3 – 6."}</p>
    </div>
  );
}
