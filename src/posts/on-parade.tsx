import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6187",
  "slug": "on-parade",
  "url": "/reviews/on-parade/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/10/16/on-parade/",
  "title": "On Parade",
  "publishedAt": "2011-10-16",
  "publishedLabel": "October 16th, 2011",
  "excerpt": "It’s about time for an honest, open, factual, and focused discussion with older children about how animals suffer in our society. Rob Laidlaw, author of Wild Animals in Captivity and founder of Zoocheck Canada,…",
  "image": {
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "On Parade",
    "width": 210,
    "height": 280
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
      "name": "Animals in Entertainment",
      "slug": "animals-in-entertainment",
      "url": "/topics/animals-in-entertainment/"
    },
    {
      "name": "Captive Wildlife",
      "slug": "captive-wildlife",
      "url": "/topics/captive-wildlife/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Circus",
      "slug": "circus",
      "url": "/topics/circus/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Rob Laidlaw",
      "slug": "rob-laidlaw",
      "url": "/topics/rob-laidlaw/"
    },
    {
      "name": "Wild Animals in Captivity",
      "slug": "wild-animals-in-captivity",
      "url": "/topics/wild-animals-in-captivity/"
    },
    {
      "name": "Zoo",
      "slug": "zoo",
      "url": "/topics/zoo/"
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
    "description": "It’s about time for an honest, open, factual, and focused discussion with older children about how animals suffer in our society. Rob Laidlaw, author of Wild Animals in Captivity and founder of Zoocheck Canada,…",
    "image": "https://vegbooks.org/media/2010/10/girl-reading.jpg"
  },
  "previous": {
    "title": "No Plain Hair!",
    "url": "/reviews/no-plain-hair/"
  },
  "next": {
    "title": "Out of Breath",
    "url": "/reviews/6210/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/girl-reading.jpg"}><img src={"/media/2010/10/girl-reading.jpg"} alt={"On Parade"} width={210} height={280} /></a>
      </figure>
      <p>{"It’s about time for an honest, open, factual, and focused discussion with older children about how animals suffer in our society."}</p>
      <p>{"Rob Laidlaw, author of "}<em><a href={"/reviews/animals-in-captivity/"}>{"Wild Animals in Captivity"}</a></em>{" and founder of "}<a href={"http://www.zoocheck.com/"} target="_blank" rel="noopener noreferrer">{"Zoocheck Canada"}</a>{", recognized that and addresses his latest work, "}<em><a href={"http://www.zoocheck.com/wildanimalsincaptivity.html"} target="_blank" rel="noopener noreferrer">{"On Parade"}</a></em>{", on the subject of animals in entertainment. In reading this book, tweens and their older peers will come to acknowledge the pervasive exploitation of animals: from those eaten on reality TV shows like Fear Factor, to “novelty animals” used for tourist photos, to the “edutainment” shows held at zoo and wildlife parks where animals perform tricks as a means of generating laughter. But the buck doesn’t stop there. Rodeos, traveling shows, magic shows, swim-with-dolphin programs, horse and greyhound racing, and of course bloodsports are all well covered in "}<em>{"On Parade"}</em>{"."}</p>
      <p>{"What stands this book apart from an animal rights soapbox is that he’s included countless pieces of evidence to support the general statement that the entertainment industry does not meet the needs of wild animals in captivity: citings of animal welfare violations, mentions of undercover investigations, and testimony from whistleblowers. "}<em>{"On Parade"}</em>{" turns out to be an ideal resource for students writing a paper on the subject matter."}</p>
      <p>{"I will say that the statistics and incidences are depressing and can become mind-numbing. It’s hard to soak in the widespread abuse, neglect and outright cruelty these animals face. But it’s not something compassionate kids will want to ignore. They will want to be in the know. And it’s about time."}</p>
      <p>{"Ages 9+."}</p>
    </div>
  );
}
