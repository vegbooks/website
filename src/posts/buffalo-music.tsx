import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5621",
  "slug": "buffalo-music",
  "url": "/reviews/buffalo-music/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/19/buffalo-music/",
  "title": "Buffalo Music",
  "publishedAt": "2011-07-19",
  "publishedLabel": "July 19th, 2011",
  "excerpt": "Buffalo Music, a fictionalized account the life of Mary Ann Goodnight, chronicles the deeply disturbing annihilation of the American buffalo from the perspective of the woman credited with helping save the species…",
  "image": {
    "src": "/media/2011/07/9780618723416-lres.jpg",
    "alt": "Buffalo Music",
    "width": 210,
    "height": 190
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
      "name": "Animal Exploitation",
      "slug": "animal-exploitation",
      "url": "/topics/animal-exploitation/"
    },
    {
      "name": "Buffalo",
      "slug": "buffalo",
      "url": "/topics/buffalo/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Mary Ann Goodnight",
      "slug": "mary-ann-goodnight",
      "url": "/topics/mary-ann-goodnight/"
    },
    {
      "name": "Wildlife Rehabilitation",
      "slug": "wildlife-rehabilitation",
      "url": "/topics/wildlife-rehabilitation/"
    },
    {
      "name": "Yellowstone",
      "slug": "yellowstone",
      "url": "/topics/yellowstone/"
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
    "description": "Buffalo Music, a fictionalized account the life of Mary Ann Goodnight, chronicles the deeply disturbing annihilation of the American buffalo from the perspective of the woman credited with helping save the species…",
    "image": "https://vegbooks.org/media/2011/07/9780618723416-lres.jpg"
  },
  "previous": {
    "title": "The Dancing Pig",
    "url": "/reviews/the-dancing-pig/"
  },
  "next": {
    "title": "Flying Free",
    "url": "/reviews/flying-free/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/9780618723416-lres.jpg"}><img src={"/media/2011/07/9780618723416-lres.jpg"} alt={"Buffalo Music"} width={210} height={190} /></a>
      </figure>
      <p><a href={"http://www.powells.com/biblio/62-9780618723416-0"} target="_blank" rel="noopener noreferrer"><em>{"Buffalo Music"}</em></a>{", a fictionalized account the life of "}<a href={"http://www.tshaonline.org/handbook/online/articles/fgo35"} target="_blank" rel="noopener noreferrer">{"Mary Ann Goodnight"}</a>{", chronicles the deeply disturbing annihilation of the "}<a href={"http://en.wikipedia.org/wiki/American_bison"} target="_blank" rel="noopener noreferrer">{"American buffalo"}</a>{" from the perspective of the woman credited with helping save the species from extinction."}</p>
      <p>{"When Molly settles into a new life in the Texas panhandle, she quickly becomes accustomed to the noises of the buffalo surrounding her. She performs her routines to the enjoyable sounds of the buffalo music. Soon enough, the animal harmonies are replaced by the sounds of rifles as hunters seek to make their fortune in hides. Within six seasons, Molly’s joy has faded and the buffalo music has disappeared, replaced by silent mountains of buffalo skulls and bones."}</p>
      <p>{"When a cowhand brings her a couple of orphaned buffalo calves, Mollie hand rears them. Word spreads of her ability to care for orphaned buffalo babies, and more and more are delivered to Mollie. She raises at least one hundred calves, and sends some of them via rail to Yellowstone National Park as part of the efforts to reestablish herds there. In her own territory, she lives out her days happily listening to the buffalo music once again."}</p>
      <p>{"While the book focuses on Mollie’s daily life on the ranch and the very good deeds she performs for the buffalo calves, there are necessarily some very bleak realities around "}<a href={"http://www1.american.edu/ted/ice/buffalo.htm"} target="_blank" rel="noopener noreferrer">{"the buffalo hunt"}</a>{" that are depicted. The story itself is well-written and age appropriate for young children who are ready to learn about the story of how we decimated a species due to commercial market hunting. Animal advocates will appreciate Mollie’s strong, true voice in her unapologetic disclosure that she has a soft spot for critters, even if others think that she is as tough as beef jerky. As one might imagine about life on a ranch, there are some mentions of use of animals as commodities and animal products in this story."}</p>
      <p>{"Ages 6 and up."}</p>
    </div>
  );
}
