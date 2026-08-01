import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4454",
  "slug": "abe-lincoln-loved-animals",
  "url": "/reviews/abe-lincoln-loved-animals/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/03/11/abe-lincoln-loved-animals/",
  "title": "Abe Lincoln Loved Animals",
  "publishedAt": "2011-03-11",
  "publishedLabel": "March 11th, 2011",
  "excerpt": "Down the historical rabbit hole, it can be hard to determine whether or not there is truth to an anecdote, especially when it pertains to the legendary American icon and President Abraham Lincoln. Within the animal…",
  "image": {
    "src": "/media/2011/03/9780807501238.jpg",
    "alt": "Abe Lincoln Loved Animals",
    "width": 210,
    "height": 164
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
      "name": "Abraham Lincoln",
      "slug": "abraham-lincoln",
      "url": "/topics/abraham-lincoln/"
    },
    {
      "name": "Animal Welfare",
      "slug": "animal-welfare",
      "url": "/topics/animal-welfare/"
    },
    {
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Ellen Jackson",
      "slug": "ellen-jackson",
      "url": "/topics/ellen-jackson/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "President",
      "slug": "president",
      "url": "/topics/president/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "Down the historical rabbit hole, it can be hard to determine whether or not there is truth to an anecdote, especially when it pertains to the legendary American icon and President Abraham Lincoln. Within the animal…",
    "image": "https://vegbooks.org/media/2011/03/9780807501238.jpg"
  },
  "previous": {
    "title": "Mardy Murie Did!: Grandmother of Conservation",
    "url": "/reviews/mardy-murie-did-grandmother-of-conservation/"
  },
  "next": {
    "title": "I Didn’t Do It",
    "url": "/reviews/i-didnt-do-it/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/03/9780807501238.jpg"}><img src={"/media/2011/03/9780807501238.jpg"} alt={"Abe Lincoln Loved Animals"} width={210} height={164} /></a>
      </figure>
      <p>{"Down the historical rabbit hole, it can be hard to determine whether or not there is truth to an anecdote, especially when it pertains to the legendary American icon and President Abraham Lincoln. Within the animal rights community, he’s famously associated with saying: “I am in favor of animal rights as well as human rights. That is the way of a whole human being.” But through research we’ve found no credible validation for this salient statement, other than through a frail third party source."}</p>
      <p>{"When I saw "}<em><a href={"http://www.albertwhitman.com/content.cfm/bookdetails/Abe-Lincoln-Loved-Animals"} target="_blank" rel="noopener noreferrer">{"Abe Lincoln Loved Animals"}</a></em>{", I was dubious of the accuracy, but Ellen Jackson has done a remarkable job pinning down authoritative and credible stories and sources for this work. Her references are explained and provided at the end. Lincoln rescued fledglings, advocated for ants’ right to live, welcomed many a dog, cat, rabbit, and goat into the White House family, regretted killing a turkey (vowing never to hunt large game again), and initiated the "}<a href={"/reviews/thanksgiving-in-the-white-house/"}>{"presidential turkey pardoning"}</a>{" ritual. For his era, Lincoln was a pioneer for animal welfare and activists are glad to have him in our ranks."}</p>
      <p>{"However, Abe did live in a time when horses were a means of transportation. His sons used the goats for at least one White House prank, and his father is seen carrying a dead rabbit for supper – all of which are depicted in the book. Jackson does not try to hide these facts, but remarks upon their widespread practice and necessity in Lincoln’s day. Overall, I find this text invaluable for a number of reasons: 1) kids will appreciate a different, humanizing side of Lincoln than what may be taught in school, 2) the text provides a great starting point for discussing the progress of animal welfare, and 3) its historical content (civil war, presidential pardon) and accompanying illustrations are unique and interesting. Teachers can find related lesson plans, articles and other items of interest "}<a href={"http://www.abrahamlincolnsclassroom.org/Library/newsletter.asp?ID=126&CRLI=174"} target="_blank" rel="noopener noreferrer">{"through the Lincoln Institute"}</a>{"."}</p>
      <p>{"Ages 7-9."}</p>
    </div>
  );
}
