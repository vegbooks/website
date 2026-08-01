import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11130",
  "slug": "everything-awesome-about-sharks",
  "url": "/reviews/everything-awesome-about-sharks/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/08/02/everything-awesome-about-sharks/",
  "title": "Everything Awesome About Sharks",
  "publishedAt": "2021-08-02",
  "publishedLabel": "August 2nd, 2021",
  "excerpt": "The full title of this fantastic non-fiction book by Mike Lowery is EVERYTHING AWESOME ABOUT SHARKS AND OTHER UNDERWATER CREATURES. The cover promises “totally shocking facts!” and the book certainly delivers. The…",
  "image": {
    "src": "/media/2021/07/everything-awesome-sharks-1.jpg",
    "alt": "Everything Awesome About Sharks",
    "width": 341,
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
      "name": "elementary readers",
      "slug": "elementary-readers",
      "url": "/topics/elementary-readers/"
    },
    {
      "name": "Everything Awesome About Sharks",
      "slug": "everything-awesome-about-sharks",
      "url": "/topics/everything-awesome-about-sharks/"
    },
    {
      "name": "Mike Lowery",
      "slug": "mike-lowery",
      "url": "/topics/mike-lowery/"
    },
    {
      "name": "non-fiction",
      "slug": "non-fiction",
      "url": "/topics/non-fiction/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "sea creatures",
      "slug": "sea-creatures",
      "url": "/topics/sea-creatures/"
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
    "description": "The full title of this fantastic non-fiction book by Mike Lowery is EVERYTHING AWESOME ABOUT SHARKS AND OTHER UNDERWATER CREATURES. The cover promises “totally shocking facts!” and the book certainly delivers. The…",
    "image": "https://vegbooks.org/media/2021/07/everything-awesome-sharks-1.jpg"
  },
  "previous": {
    "title": "Allergic",
    "url": "/reviews/allergic/"
  },
  "next": {
    "title": "Banana Fox and the Secret Sour Society",
    "url": "/reviews/banana-fox-and-the-secret-sour-society/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <img src={"/media/2021/07/everything-awesome-sharks-1.jpg"} alt={"Everything Awesome About Sharks"} width={341} height={400} />
      </figure>
      <p>{"The full title of this fantastic non-fiction book by Mike Lowery is "}<a href={"https://www.indiebound.org/book/9781338359732"} target="_blank" rel="noopener noreferrer">{"EVERYTHING AWESOME ABOUT SHARKS AND OTHER UNDERWATER CREATURES"}</a>{". The cover promises “totally shocking facts!” and the book certainly delivers. The colorful book is broken up into parts like “Out Amazing Oceans!” “SHARKS!” and “Extreme Marine Habitats.” Each section is stuffed with really amazing information (Do you know what Point Nemo is? How about what The Bloop! actually was?) and delightful illustrations that accentuate facts and entertain readers."}</p>
      <p>{"Lowery’s pacing is excellent for the intended audience of 7-10 year olds; he doesn’t give away prime nuggets right away. He uses interest in sharks to educate about fish in general. And he touches on various shark facts to juxtapose characteristics and preferences to highlight unique attributes. Then POW! Lowery inserts a “fun fact” about what has been found inside sharks’ stomachs. It’s the perfect balance between real-life horror and cartoonish glee for its readers."}</p>
      <p>{"The book also spotlights the coral reefs and some of the thousands of species that live in them, the glowing creatures of the Deep Sea and the Dark Zone (hello, Vampire Squid!), and even narwhals make an appearance. Part Five is short, but in its “Save the Sharks” theme it points out that plastic has been found in 100% of sea turtles and that by 2050 the ocean will contain more plastic than fish. Ugh! The section concludes with some tangible actions young readers can take to help stem the flow of plastic into the oceans."}</p>
      <p>{"The drawing style and comic-like captions are aimed at the older elementary crowd, but more mature readers will definitely learn a lot and find the style hilarious as well. The information is digestible and fun, and it doesn’t talk down to readers or waste time with the obvious. "}<a href={"https://www.indiebound.org/book/9781338359732"} target="_blank" rel="noopener noreferrer">{"Everything Awesome About Sharks and Other Underwater Creatures"}</a>{" is highly recommended!"}</p>
    </div>
  );
}
