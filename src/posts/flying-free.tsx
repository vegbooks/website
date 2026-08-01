import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5629",
  "slug": "flying-free",
  "url": "/reviews/flying-free/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/20/flying-free/",
  "title": "Flying Free",
  "publishedAt": "2011-07-20",
  "publishedLabel": "July 20th, 2011",
  "excerpt": "I absolutely love this book, and so does my daughter. It’s told from the perspective of a firefly that is captured by a little girl. The girl wants to keep the firefly in a jar by her bedside to serve as a nightlight…",
  "image": {
    "src": "/media/2010/12/toddler-girl-reading.jpg",
    "alt": "Flying Free",
    "width": 210,
    "height": 315
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
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Fireflies",
      "slug": "fireflies",
      "url": "/topics/fireflies/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Insects",
      "slug": "insects",
      "url": "/topics/insects/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Two-Mom Families",
      "slug": "two-mom-families",
      "url": "/topics/two-mom-families/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "I absolutely love this book, and so does my daughter. It’s told from the perspective of a firefly that is captured by a little girl. The girl wants to keep the firefly in a jar by her bedside to serve as a nightlight…",
    "image": "https://vegbooks.org/media/2010/12/toddler-girl-reading.jpg"
  },
  "previous": {
    "title": "Buffalo Music",
    "url": "/reviews/buffalo-music/"
  },
  "next": {
    "title": "Gabby and Grandma Go Green",
    "url": "/reviews/gabby-and-grandma-go-green/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/12/toddler-girl-reading.jpg"}><img src={"/media/2010/12/toddler-girl-reading.jpg"} alt={"Flying Free"} width={210} height={315} /></a>
      </figure>
      <p>{"I absolutely love "}<a href={"http://www.amazon.com/gp/product/1594579725/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=1594579725"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{", and so does my daughter. It’s told from the perspective of a firefly that is captured by a little girl. The girl wants to keep the firefly in a jar by her bedside to serve as a nightlight so that she won’t be scared at night. Her two moms have reservations about the idea, pointing out that the firefly would be happier outside living in its own home. The little girl insists she can make the firefly happy, poking holes in the jar for air and filling the jar with grass and flowers. But the firefly keeps trying to escape. Finally, the firefly dims his light so that he won’t be useful for the little girl. The moms point out that the firefly looks sad and insists the firefly be set free. The little girl is sad but lets the firefly out into the summer night, and the firefly flies happily away."}</p>
      <p>{"My daughter received this book as a gift for her second birthday and wants to read it every night. I think she loves the depiction of the two mom family, which is just like hers. I love that too, but I also love the message. Animals, even bugs, want to be free. Telling the book from the firefly’s perspective allows us to feel the frantic urgency the firefly feels when trying to escape. The firefly doesn’t want to be in the jar. A great books for lovers of animals (even bugs)."}</p>
      <p>{"Ages 2-6."}</p>
    </div>
  );
}
