import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10851",
  "slug": "future-astronaut",
  "url": "/reviews/future-astronaut/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/06/25/future-astronaut/",
  "title": "Future Astronaut",
  "publishedAt": "2019-06-25",
  "publishedLabel": "June 25th, 2019",
  "excerpt": "A new board book in the Future Baby series is out today! FUTURE ASTRONAUT is adorable and informative and it even includes a lesson in languages. The big-headed babies in the book are compared to astronauts as they…",
  "image": {
    "src": "/media/2019/06/900.jpeg",
    "alt": "Future Astronaut",
    "width": 278,
    "height": 300
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
      "name": "baby reader",
      "slug": "baby-reader",
      "url": "/topics/baby-reader/"
    },
    {
      "name": "Board Books",
      "slug": "board-books",
      "url": "/topics/board-books/"
    },
    {
      "name": "Future Astronaut",
      "slug": "future-astronaut",
      "url": "/topics/future-astronaut/"
    },
    {
      "name": "Future Baby",
      "slug": "future-baby",
      "url": "/topics/future-baby/"
    },
    {
      "name": "Lori Alexander",
      "slug": "lori-alexander",
      "url": "/topics/lori-alexander/"
    },
    {
      "name": "stem",
      "slug": "stem",
      "url": "/topics/stem/"
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
    "description": "A new board book in the Future Baby series is out today! FUTURE ASTRONAUT is adorable and informative and it even includes a lesson in languages. The big-headed babies in the book are compared to astronauts as they…",
    "image": "https://vegbooks.org/media/2019/06/900.jpeg"
  },
  "previous": {
    "title": "The Pout-Pout Fish Cleans Up the Ocean",
    "url": "/reviews/the-pout-pout-fish-cleans-up-the-ocean/"
  },
  "next": {
    "title": "Even More Lesser Spotted Animals",
    "url": "/reviews/even-more-lesser-spotted-animals/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/"}><img src={"/media/2019/06/900.jpeg"} alt={"Future Astronaut"} width={278} height={300} /></a>
      </figure>
      <p>{"A new board book in the Future Baby series is out today! "}<a href={"https://kids.scholastic.com/kids/book/future-astronaut-by-lori-alexander/"} target="_blank" rel="noopener noreferrer">{"FUTURE ASTRONAUT"}</a>{" is adorable and informative and it even includes a lesson in languages. The big-headed babies in the book are compared to astronauts as they go to the doctor, eat their meals, and float in space. Suggested for infants through three-years-old, the book is a perfect way for children to imagine themselves traveling in a rocket ship, or just having an adventure."}</p>
      <p>{"The simple text and consistent comparison style in Lori Alexander’s story ensures that young readers will understand both what the astronauts are doing and how their own daily routines relate. Allison Black’s illustrations are joyful and colorful, and the faces share clear emotions that children will be able to identify and emulate. Together, the text and imagery create a wonderful book that will be read again and again."}</p>
      <p>{"The end of Future Astronaut has “fun facts” also chosen to relate to a young child’s day. Did you know that crackers and bread aren’t allowed in space because crumbs float into astronauts’ eyes and noses? No crackers?!"}</p>
      <p>{"Highly recommended for ages 0-3 years."}</p>
    </div>
  );
}
