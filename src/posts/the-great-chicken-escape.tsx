import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1229",
  "slug": "the-great-chicken-escape",
  "url": "/reviews/the-great-chicken-escape/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/07/the-great-chicken-escape/",
  "title": "The Great Chicken Escape",
  "publishedAt": "2010-03-07",
  "publishedLabel": "March 7th, 2010",
  "excerpt": "My love for Nikki McClure’s work is no secret, and I was thrilled to read this small volume. There are no words to the story of The Great Chicken Escape, only Ms. McClure’s expressive, charming papercut illustrations…",
  "image": {
    "src": "/media/2010/02/nikki-chicken-pict1.gif",
    "alt": "The Great Chicken Escape",
    "width": 222,
    "height": 109
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
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eggs",
      "slug": "eggs",
      "url": "/topics/eggs/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
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
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Wordless Books",
      "slug": "wordless-books",
      "url": "/topics/wordless-books/"
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
    "description": "My love for Nikki McClure’s work is no secret, and I was thrilled to read this small volume. There are no words to the story of The Great Chicken Escape, only Ms. McClure’s expressive, charming papercut illustrations…",
    "image": "https://vegbooks.org/media/2010/02/nikki-chicken-pict1.gif"
  },
  "previous": {
    "title": "Pooh: Just Be Nice… to your little friends",
    "url": "/reviews/pooh-just-be-nice/"
  },
  "next": {
    "title": "Pumpkins",
    "url": "/reviews/pumpkins/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/02/nikki-chicken-pict1.gif"}><img src={"/media/2010/02/nikki-chicken-pict1.gif"} alt={"The Great Chicken Escape"} width={222} height={109} /></a>
      </figure>
      <p>{"My love for Nikki McClure’s work is "}<a href={"/reviews/all-in-a-day/"}>{"no secret"}</a>{", and I was thrilled to read this small volume. There are no words to the story of "}<a href={"http://www.buyolympia.com/q/Item=NIKKI_CHICKEN"} target="_blank" rel="noopener noreferrer"><em>{"The Great Chicken Escape"}</em></a>{", only Ms. McClure’s expressive, charming papercut illustrations which treat us to a day of fun from the perspective of some chickens."}</p>
      <p>{"When their nun caretaker comes in to collect eggs, she forgets to close the door behind her and the chickens make a break for it. Some are quickly recaptured but the fleeter of claw have themselves an adventure in a stream, amidst the beauty of a northwest forest and…the beach? Yes, the chickens make their way through the forest path to the beach and have a lovely time as they explore starfish, shells and seaweed, meeting up with shorebirds and an eagle. As the day wanes, they head home, with one girl in particular amusing us as she carries back a souvenir of her day, trailing it behind her all the way to the coop—a piece of seaweed."}</p>
      <p>{"The author’s note at the end explains that the book is based on a true- as near as she can tell- story based on events she witnessed while on a retreat at a monastic community in Alaska. She goes on to briefly describe the rhythm of the community’s day through the seasons and it dovetails in a very sweet way with the story she has just told through her illustrations. I really appreciate that she wove a beautiful tale out of observing a potentially nondescript event (this is a reason I am so taken with her "}<a href={"http://www.buyolympia.com/q/Artist=Nikki%20McClure"} target="_blank" rel="noopener noreferrer">{"work"}</a>{" in general). Veg parents will take note that the hen’s eggs are collected, there are depictions of the community members using livestock and Ms. McClure’s description of community life includes catching and canning salmon for the winter. This book is perfect for any age of chicken friend or spirited adventurer."}</p>
      <p>{"https://vegbooks.org/index.php/contributors/"}</p>
    </div>
  );
}
