import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1419",
  "slug": "countdown-to-spring",
  "url": "/reviews/countdown-to-spring/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/31/countdown-to-spring/",
  "title": "Countdown to Spring!",
  "publishedAt": "2010-03-31",
  "publishedLabel": "March 31st, 2010",
  "excerpt": "This counting book opens with the pronouncement that it is spring and immediately queries whether the children have remembered their animal friends. I found that one question very powerful- how have we remembered our…",
  "image": {
    "src": "/media/2010/03/978-0-375-81364-1.jpg",
    "alt": "Countdown to Spring!",
    "width": 181,
    "height": 150
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
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Easter",
      "slug": "easter",
      "url": "/topics/easter/"
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
      "name": "Mouse",
      "slug": "mouse",
      "url": "/topics/mouse/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Spring",
      "slug": "spring",
      "url": "/topics/spring/"
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
    "description": "This counting book opens with the pronouncement that it is spring and immediately queries whether the children have remembered their animal friends. I found that one question very powerful- how have we remembered our…",
    "image": "https://vegbooks.org/media/2010/03/978-0-375-81364-1.jpg"
  },
  "previous": {
    "title": "Four Famished Foxes and Fosdyke",
    "url": "/reviews/four-famished-foxes/"
  },
  "next": {
    "title": "Chimpanzee Rescue",
    "url": "/reviews/chimpanzee-rescue/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/03/978-0-375-81364-1.jpg"}><img src={"/media/2010/03/978-0-375-81364-1.jpg"} alt={"Countdown to Spring!"} width={181} height={150} /></a>
      </figure>
      <p>{"This counting book opens with the pronouncement that it is spring and immediately queries whether the children have remembered their animal friends. I found that one question very powerful- how have we remembered our animal friends in not just periods of celebration but the quotidian rhythms of our lives? The book’s simple, uncluttered illustrations highlight the simplicity of its kind message. They depict humble creatures engaged in ordinary activities. At the end, there is a surprise– an Easter basket, bursting with fruits, veggies and flowers! Its filled with treats that the creatures will enjoy to help them celebrate the day and the season. It is definitely the kind of Easter basket that a veggie family would love to give or receive (though there is a wedge of cheese stuck in there, presumptively for the mouse)! The emphasis of this little book, aside from the counting, is on sharing the spirit of springtime with the creatures around us."}</p>
      <p>{"Though there are a couple of eggs and a wedge of cheese in endspapers’ illustrations, there are also pieces of flowers, berries, candy, leafy greens, carrots, apples, butterflies and wheat."}</p>
      <p>{"Suitable for 0-4 years."}</p>
    </div>
  );
}
