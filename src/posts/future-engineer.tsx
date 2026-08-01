import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10903",
  "slug": "future-engineer",
  "url": "/reviews/future-engineer/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/10/18/future-engineer/",
  "title": "Future Engineer",
  "publishedAt": "2019-10-18",
  "publishedLabel": "October 18th, 2019",
  "excerpt": "FUTURE ENGINEERby Lori Alexander and illustrated by Allison Black is the second in the Future BabySeries. Like Future Astronaut, the board book juxtaposes grown-up engineers with babies playing to compare their…",
  "image": {
    "src": "/media/2019/10/future-engineer.jpeg",
    "alt": "Future Engineer",
    "width": 307,
    "height": 331
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
      "name": "Allison Black",
      "slug": "allison-black",
      "url": "/topics/allison-black/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Future Baby",
      "slug": "future-baby",
      "url": "/topics/future-baby/"
    },
    {
      "name": "Future Engineer",
      "slug": "future-engineer",
      "url": "/topics/future-engineer/"
    },
    {
      "name": "Lori Alexander",
      "slug": "lori-alexander",
      "url": "/topics/lori-alexander/"
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
    "description": "FUTURE ENGINEERby Lori Alexander and illustrated by Allison Black is the second in the Future BabySeries. Like Future Astronaut, the board book juxtaposes grown-up engineers with babies playing to compare their…",
    "image": "https://vegbooks.org/media/2019/10/future-engineer.jpeg"
  },
  "previous": {
    "title": "Now You Know What You Eat",
    "url": "/reviews/now-you-know-what-you-eat/"
  },
  "next": {
    "title": "The Help Yourself Cookbook for Kids by Ruby Roth",
    "url": "/reviews/the-help-yourself-cookbook-for-kids-by-ruby-roth/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/"}><img src={"/media/2019/10/future-engineer.jpeg"} alt={"Future Engineer"} width={307} height={331} /></a>
      </figure>
      <p><strong><a href={"https://www.indiebound.org/book/9781338312232"} target="_blank" rel="noopener noreferrer">{"FUTURE ENGINEER"}</a></strong>{"by Lori Alexander and illustrated by Allison Black is the second in the "}<em>{"Future Baby"}</em>{"Series. Like "}<a href={"/reviews/future-astronaut/"} target="_blank" rel="noopener noreferrer">{"Future Astronaut"}</a>{", the board book juxtaposes grown-up engineers with babies playing to compare their similar traits. “Engineers as questions” is met with an adorable image of a baby asking “Why? Why? Why?” And then, “Engineers draw their ideas on paper and computers” is depicted opposite “Baby draws on paper. And other places, too.” The baby, by the way, is scribbling on the wall with a very happy smile on their face."}</p>
      <p>{"Allison Black’s deceptively simple illustrations are expressive, engaging, and utterly adorable. The multi-ethnic characters are shown in full baby play mode, and even the shock of blocks falling is shown in bright colors and with surprise rather than sadness. In addition, the adult engineer, whose project has also fallen down, mirrors the baby’s expression wonderfully."}</p>
      <p>{"The last two pages of the book have facts about what different kinds of engineers do. The examples of what engineers make are familiar and relatable to a young child: rockets, televisions, toothpaste, and bridges. Overall, a colorful and fun introduction to engineering and how children really are future engineers."}</p>
    </div>
  );
}
