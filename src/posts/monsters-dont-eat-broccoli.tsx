import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9850",
  "slug": "monsters-dont-eat-broccoli",
  "url": "/reviews/monsters-dont-eat-broccoli/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/09/23/monsters-dont-eat-broccoli/",
  "title": "Monsters Don’t Eat Broccoli",
  "publishedAt": "2014-09-23",
  "publishedLabel": "September 23rd, 2014",
  "excerpt": "This book is by Barbara Jean Hicks, the same author as my 4-year old’s favorite book, The Secret Life of Walter Kitty. I love Hicks’ books because they are about encouraging children to use their imagination and see…",
  "image": {
    "src": "/media/2014/09/monsters-dont-eat-broccoli.jpeg",
    "alt": "MonstersDontEatBroccoli",
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
      "name": "Barbara Jean Hicks",
      "slug": "barbara-jean-hicks",
      "url": "/topics/barbara-jean-hicks/"
    },
    {
      "name": "Diane Vukovic",
      "slug": "diane-vukovic",
      "url": "/topics/diane-vukovic/"
    },
    {
      "name": "Imagination",
      "slug": "imagination",
      "url": "/topics/imagination/"
    },
    {
      "name": "Monsters",
      "slug": "monsters",
      "url": "/topics/monsters/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sue Hendra",
      "slug": "sue-hendra",
      "url": "/topics/sue-hendra/"
    },
    {
      "name": "Vegetable Books",
      "slug": "vegetable-books",
      "url": "/topics/vegetable-books/"
    },
    {
      "name": "Vegetables",
      "slug": "vegetables",
      "url": "/topics/vegetables/"
    }
  ],
  "reviewer": {
    "name": "Diane Vukovic",
    "slug": "diane-vukovic",
    "url": "/contributors/diane-vukovic/",
    "aliases": [
      "DIANE VUKOVIC"
    ]
  },
  "seo": {
    "description": "This book is by Barbara Jean Hicks, the same author as my 4-year old’s favorite book, The Secret Life of Walter Kitty. I love Hicks’ books because they are about encouraging children to use their imagination and see…",
    "image": "https://vegbooks.org/media/2014/09/monsters-dont-eat-broccoli.jpeg"
  },
  "previous": {
    "title": "The Prairie That Nature Built",
    "url": "/reviews/the-prairie-that-nature-built/"
  },
  "next": {
    "title": "Letters of the West: An ABC Book of the Many Plants, Animals, and Other Curious Features of the West",
    "url": "/reviews/letters-of-the-west-an-abc-book-of-the-many-plants-animals-and-other-curious-features-of-the-west/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2014/09/monsters-dont-eat-broccoli.jpeg"} alt={"MonstersDontEatBroccoli"} width={210} height={272} />
      </figure>
      <p>{"This book is by Barbara Jean Hicks, the same author as my 4-year old’s favorite book, "}<em>{"The Secret Life of Walter Kitty"}</em>{". I love Hicks’ books because they are about encouraging children to use their imagination and see the world in new, exciting ways. In "}<em>{"Monsters Don’t Eat Broccoli"}</em>{", Hicks uses imagination as a tool to get kids to eat their veggies."}</p>
      <p>{"The rhyming book is filled with great illustrations of monsters eating boulders, “fish and ships”, construction, tractors, and trailers. Throughout the book there is a fun little chant, “Fum, foe, fie, fee, monsters don’t eat broccoli!” which young kids will enjoy joining in on."}</p>
      <p>{"At the end of the book, you see that the “monsters” are really two little kids on a picnic. Wheels are really tomatoes, boulders are really grapes, ships are orange slices, and construction is really cheese (though vegans could tell their kids it is tofu). The “monsters” are caught snacking on “trees”, only to discover that it is broccoli. And that they like it!"}</p>
      <p>{"Admittedly, my daughter didn’t like this book nearly as much as "}<em>{"Walter Kitty"}</em>{". However, when little boys come over, they love the book and will often flip through the pages by themselves, fascinated by the fun drawings of monsters. So (not to reinforce any gender stereotypes here), this book is probably a better choice for young boys and not girls."}</p>
    </div>
  );
}
