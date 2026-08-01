import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11127",
  "slug": "banana-fox-and-the-secret-sour-society",
  "url": "/reviews/banana-fox-and-the-secret-sour-society/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/08/05/banana-fox-and-the-secret-sour-society/",
  "title": "Banana Fox and the Secret Sour Society",
  "publishedAt": "2021-08-05",
  "publishedLabel": "August 5th, 2021",
  "excerpt": "BANANA FOX AND THE SECRET SOUR SOCIETY by James Kochalka is a wild, colorful, Super Sour Soda fueled ride. This is the kind of graphic novel that (sometimes) grates on caregivers, but delights its 6+ audience. The…",
  "image": {
    "src": "/media/2021/07/9781338660487.jpg",
    "alt": "Banana Fox and the Secret Sour Society",
    "width": 267,
    "height": 400
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
      "name": "Banana Fox and the Secret Sour Society",
      "slug": "banana-fox-and-the-secret-sour-society",
      "url": "/topics/banana-fox-and-the-secret-sour-society/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "graphic novel",
      "slug": "graphic-novel",
      "url": "/topics/graphic-novel/"
    },
    {
      "name": "James Kochalka",
      "slug": "james-kochalka",
      "url": "/topics/james-kochalka/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "BANANA FOX AND THE SECRET SOUR SOCIETY by James Kochalka is a wild, colorful, Super Sour Soda fueled ride. This is the kind of graphic novel that (sometimes) grates on caregivers, but delights its 6+ audience. The…",
    "image": "https://vegbooks.org/media/2021/07/9781338660487.jpg"
  },
  "previous": {
    "title": "Everything Awesome About Sharks",
    "url": "/reviews/everything-awesome-about-sharks/"
  },
  "next": {
    "title": "What if You Could Sniff Like a Shark?",
    "url": "/reviews/what-if-you-could-sniff-like-a-shark/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <img src={"/media/2021/07/9781338660487.jpg"} alt={"Banana Fox and the Secret Sour Society"} width={267} height={400} />
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781338660487"} target="_blank" rel="noopener noreferrer">{"BANANA FOX AND THE SECRET SOUR SOCIETY"}</a>{" by James Kochalka is a wild, colorful, Super Sour Soda fueled ride. This is the kind of graphic novel that (sometimes) grates on caregivers, but delights its 6+ audience. The heavy-inked lines and bright colors draw the eye to the action — and there is a lot of action! The great detective Banana Fox is taking time off to work in a banana smoothie shack where he slurps up most of the profits. When he meets an admirer he names Flashlight (because she carries a red one), they soon embark on crime solving that brings them to a Banana Fox fan club, sticky sewers, and face-to-face with Sour Grapes, Jr., the number one rival of Banana Fox. The action is non-stop, and so are the gross jokes and giant turtles. Of course, Banana Fox overcomes the trickery of his rivals in the end, and he even learns that his new friend’s name is not Flashlight, but Sharyanna."}</p>
      <p>{"Readers in the intended age group will love reading this very silly and sour book, and caregivers may come around to enjoying it as well. This is a very good thing because book #2 is coming in the fall. "}<em><a href={"https://www.indiebound.org/book/9781338660487"} target="_blank" rel="noopener noreferrer">{"Banana Fox and the Secret Sour Society"}</a></em>{" is the perfect book to finish off the summer."}</p>
    </div>
  );
}
