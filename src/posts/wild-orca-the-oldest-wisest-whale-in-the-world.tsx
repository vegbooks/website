import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10662",
  "slug": "wild-orca-the-oldest-wisest-whale-in-the-world",
  "url": "/reviews/wild-orca-the-oldest-wisest-whale-in-the-world/",
  "legacyUrl": "https://vegbooks.org/index.php/2018/11/18/wild-orca-the-oldest-wisest-whale-in-the-world/",
  "title": "Wild Orca: The Oldest, Wisest Whale in the World",
  "publishedAt": "2018-11-18",
  "publishedLabel": "November 18th, 2018",
  "excerpt": "WILD ORCA is a beautiful picture book filled with anticipation, drama, and a surprising amount of orca information. Told through the perspective of Mia, a young girl who awaits a familiar pod’s arrival. The pod, led…",
  "image": {
    "src": "/media/2018/11/wild-orca.jpg",
    "alt": "Wild Orca: The Oldest, Wisest Whale in the World",
    "width": 300,
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
      "name": "Brenda Peterson",
      "slug": "brenda-peterson",
      "url": "/topics/brenda-peterson/"
    },
    {
      "name": "Orca",
      "slug": "orca",
      "url": "/topics/orca/"
    },
    {
      "name": "Wendell Minor",
      "slug": "wendell-minor",
      "url": "/topics/wendell-minor/"
    },
    {
      "name": "Whale",
      "slug": "whale",
      "url": "/topics/whale/"
    },
    {
      "name": "Wild Orca",
      "slug": "wild-orca",
      "url": "/topics/wild-orca/"
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
    "description": "WILD ORCA is a beautiful picture book filled with anticipation, drama, and a surprising amount of orca information. Told through the perspective of Mia, a young girl who awaits a familiar pod’s arrival. The pod, led…",
    "image": "https://vegbooks.org/media/2018/11/wild-orca.jpg"
  },
  "previous": {
    "title": "An American Tail (1986)",
    "url": "/reviews/an-american-tail-1986/"
  },
  "next": {
    "title": "Little Otter Learns to Swim",
    "url": "/reviews/little-otter-learns-to-swim/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2018/11/wild-orca.jpg"} alt={"Wild Orca: The Oldest, Wisest Whale in the World"} width={300} height={300} />
      </figure>
      <p><a href={"https://us.macmillan.com/books/9781250110695"} target="_blank" rel="noopener noreferrer">{"WILD ORCA"}</a>{" is a beautiful picture book filled with anticipation, drama, and a surprising amount of orca information. Told through the perspective of Mia, a young girl who awaits a familiar pod’s arrival. The pod, led by an ancient orca called Granny, hasn’t been seen for many seasons, and Mia is concerned that something is wrong. This trepidation sets up the tension in the story even as the bustle of preparation for the pod’s arrival builds."}</p>
      <p>{"Author Brenda Peterson has skillfully intertwined the touching story of Mia’s love for the pod and hope to see them with scientific methods of researching orcas. It feels natural when details about Mia and the San Juan islands drift into information about human-made dangers orcas face and dropping hydrophones into the oceans to listen to orca songs. Peterson tells the story while maintaining the voice of a young girl with emphasis on sounds, inner thoughts, and child-like wonder."}</p>
      <blockquote>
        <p>{"On Lime Kiln Point, Mia wonders: "}<em>{"Is another orca stranded? Is Granny dead?"}</em>{"No whale whistles. Just the "}<em>{"shoosh"}</em>{"of waves and the "}<em>{"clank-clank"}</em>{"of a ferryboat."}</p>
      </blockquote>
      <p>{"The paintings for Wild Orca are stunning. Illustrator Wendell Minor captures both the orca world and the human world with beauty and movement. The underwater and diving orca scenes are especially impressive. And the detail and storytelling images on land help readers picture the setting. I especially appreciated the image of Mia and the community singing and drumming as they await the orca pod. The joyful scenes of orcas splashing in the ocean are contrasted with the anxious work of islanders protecting a stranded whale until high tide. Minor ensures the emotion comes through while maintaining a realistic lens on the events."}</p>
      <p>{"Wild Orca is a children’s book that adults will also both enjoy and learn from. Its ability to be entertaining, informative, beautiful and inspiring ensures it will be read again and again. Billed as a tribute to Granny, a beloved orca who lived to be 105 years old, the book includes an endnote that adds detail about Granny, her pod and descendants, and a call to action for those moved by the story."}</p>
      <p>{"Highly recommended for ages 4-8 and beyond."}</p>
    </div>
  );
}
