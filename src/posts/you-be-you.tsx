import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6479",
  "slug": "you-be-you",
  "url": "/reviews/you-be-you/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/11/23/you-be-you/",
  "title": "You Be You",
  "publishedAt": "2011-11-23",
  "publishedLabel": "November 23rd, 2011",
  "excerpt": "Playful and colorful, this sequel to Only One You stars Linda Kranz’s bright, vivid “rockfish,” and cleverly incorporates photographs of the ocean into the background. As little rockfish Adri swims home after…",
  "image": {
    "src": "/media/2011/11/kranz-you-be-you-cover.jpg",
    "alt": "You Be You",
    "width": 210,
    "height": 185
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
      "name": "Differences",
      "slug": "differences",
      "url": "/topics/differences/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Encouragement",
      "slug": "encouragement",
      "url": "/topics/encouragement/"
    },
    {
      "name": "Fish",
      "slug": "fish",
      "url": "/topics/fish/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Linda Kranz",
      "slug": "linda-kranz",
      "url": "/topics/linda-kranz/"
    },
    {
      "name": "Ocean",
      "slug": "ocean",
      "url": "/topics/ocean/"
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
    "description": "Playful and colorful, this sequel to Only One You stars Linda Kranz’s bright, vivid “rockfish,” and cleverly incorporates photographs of the ocean into the background. As little rockfish Adri swims home after…",
    "image": "https://vegbooks.org/media/2011/11/kranz-you-be-you-cover.jpg"
  },
  "previous": {
    "title": "Suryia and Roscoe",
    "url": "/reviews/suryia-and-roscoe/"
  },
  "next": {
    "title": "All About Turkeys",
    "url": "/reviews/all-about-turkeys/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/11/kranz-you-be-you-cover.jpg"}><img src={"/media/2011/11/kranz-you-be-you-cover.jpg"} alt={"You Be You"} width={210} height={185} /></a>
      </figure>
      <p>{"Playful and colorful, this sequel to "}<em>{"Only One You"}</em>{" stars "}<a href={"http://lindakranz.com/"}>{"Linda Kranz’s"}</a>{" bright, vivid “rockfish,” and cleverly incorporates photographs of the ocean into the background. As little rockfish Adri swims home after exploring the ocean, he notices that, “Some fish swim left/some fish swim right/some fish swim in a circle/some fish swim in a line,” and observes colorful fish and playful fish as well as quiet fish and loud fish."}</p>
      <p>{"When Adri returns home, he tells his parents what he has learned. They welcome his enthusiasm and confirm his uniqueness in the world with his mother providing the title line, “You be you.”"}</p>
      <p>{"With its universal theme that life is the greatest journey of all as well as its celebration of the differences between all creatures, "}<em>{"You Be You"}</em>{" offers a positive message to readers of all ages. In addition, parents can share with their children the homilies featured on the endpapers and children can search for Adri swimming among the other fish. These features, plus Kranz’s whimsical illustrations, ensure that "}<em>{"You Be You"}</em>{"will be an instant favorite of young and emergent readers or anyone looking for a little encouragement during trying times."}</p>
      <p>{"Ages 4 and up."}</p>
    </div>
  );
}
