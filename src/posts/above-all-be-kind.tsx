import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1297",
  "slug": "above-all-be-kind",
  "url": "/reviews/above-all-be-kind/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/04/above-all-be-kind/",
  "title": "Above All, Be Kind",
  "publishedAt": "2010-04-04",
  "publishedLabel": "April 4th, 2010",
  "excerpt": "Zoe Weil has penned a list of books that aim to make the world a better place. With this one, she goes right to the heart by trying to reach the children through their parents. Those parents who want to raise the…",
  "image": {
    "src": "/media/2010/04/0-86571-493-2-aba.jpg",
    "alt": "Above All, Be Kind",
    "width": 219,
    "height": 329
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
      "name": "Compassion",
      "slug": "compassion",
      "url": "/topics/compassion/"
    },
    {
      "name": "Humane Education",
      "slug": "humane-education",
      "url": "/topics/humane-education/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Kindness to Animals",
      "slug": "kindness-to-animals",
      "url": "/topics/kindness-to-animals/"
    },
    {
      "name": "Parents",
      "slug": "parents",
      "url": "/topics/parents/"
    },
    {
      "name": "Reverence",
      "slug": "reverence",
      "url": "/topics/reverence/"
    },
    {
      "name": "Vegan Parenting",
      "slug": "vegan-parenting",
      "url": "/topics/vegan-parenting/"
    },
    {
      "name": "Vegan Parents",
      "slug": "vegan-parents",
      "url": "/topics/vegan-parents/"
    },
    {
      "name": "Zoe Weil",
      "slug": "zoe-weil",
      "url": "/topics/zoe-weil/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "Zoe Weil has penned a list of books that aim to make the world a better place. With this one, she goes right to the heart by trying to reach the children through their parents. Those parents who want to raise the…",
    "image": "https://vegbooks.org/media/2010/04/0-86571-493-2-aba.jpg"
  },
  "previous": {
    "title": "Chimpanzee Rescue",
    "url": "/reviews/chimpanzee-rescue/"
  },
  "next": {
    "title": "Some Dog!",
    "url": "/reviews/some-dog/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/0-86571-493-2-aba.jpg"}><img src={"/media/2010/04/0-86571-493-2-aba.jpg"} alt={"Above All, Be Kind"} width={219} height={329} /></a>
      </figure>
      <p><a href={"http://zoeweil.com/"} target="_blank" rel="noopener noreferrer">{"Zoe Weil"}</a>{" has penned a list of books that aim to make the world a better place. With this one, she goes right to the heart by trying to reach the children through their parents. Those parents who want to raise the next generation to be compassionate, caring individuals will want to read this book."}</p>
      <p><em>{"Above All, Be Kind"}</em>{" focuses on providing information, tips, advice, and real-world experiences to help parents raise a humane child in a world that is not always so kind. The information provided offers a method by which parents can instill respect and compassion for animals and nature in their children. There are sections that touch on each childhood stage, from birth through the teen years."}</p>
      <p>{"Weil’s four principals for raising a humane child include providing information, teaching critical thinking, instilling reverence, respect and responsibility, and offering positive choices. Each of these areas is fleshed out throughout the book, helping parents apply the principals to their own life, as well as demonstrate them to their children."}</p>
      <p>{"For adults."}</p>
    </div>
  );
}
