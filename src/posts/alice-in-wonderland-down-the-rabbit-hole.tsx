import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10154",
  "slug": "alice-in-wonderland-down-the-rabbit-hole",
  "url": "/reviews/alice-in-wonderland-down-the-rabbit-hole/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/10/01/alice-in-wonderland-down-the-rabbit-hole/",
  "title": "Alice in Wonderland: Down the Rabbit Hole",
  "publishedAt": "2015-10-01",
  "publishedLabel": "October 1st, 2015",
  "excerpt": "Eating ‘shrooms, swallowing pills, smoking a “hookah”, bizarre experiences and visions as well as several other odd references lead many to question whether the original children’s story Alice in Wonderland had…",
  "image": {
    "src": "/media/2015/10/alice-in-wonderland-hires.jpg",
    "alt": "alice-in-wonderland",
    "width": 210,
    "height": 189
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
      "name": "Charles Nurnburg",
      "slug": "charles-nurnburg",
      "url": "/topics/charles-nurnburg/"
    },
    {
      "name": "Classic Tales Retold",
      "slug": "classic-tales-retold",
      "url": "/topics/classic-tales-retold/"
    },
    {
      "name": "Eric Puybaret",
      "slug": "eric-puybaret",
      "url": "/topics/eric-puybaret/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Joe Rhatigan",
      "slug": "joe-rhatigan",
      "url": "/topics/joe-rhatigan/"
    },
    {
      "name": "Lewis Carroll",
      "slug": "lewis-carroll",
      "url": "/topics/lewis-carroll/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "Eating ‘shrooms, swallowing pills, smoking a “hookah”, bizarre experiences and visions as well as several other odd references lead many to question whether the original children’s story Alice in Wonderland had…",
    "image": "https://vegbooks.org/media/2015/10/alice-in-wonderland-hires.jpg"
  },
  "previous": {
    "title": "Little Robot",
    "url": "/reviews/little-robot/"
  },
  "next": {
    "title": "Dirty Rats?",
    "url": "/reviews/dirty-rats/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2015/10/alice-in-wonderland-hires.jpg"} alt={"alice-in-wonderland"} width={210} height={189} />
      </figure>
      <p>{"Eating ‘shrooms, swallowing pills, smoking a “hookah”, bizarre experiences and visions as well as several other odd references lead many to question whether the original children’s story "}<em>{"Alice in Wonderland"}</em>{" had references to drugs. 150 years later (yes, this year is the anniversary of "}<em>{"Alice in Wonderland"}</em>{"!), research suggests Lewis Carroll, a mathematician at Christ’s Church Oxford, was "}<a href={"http://www.bbc.com/news/magazine-19254839"} target="_blank" rel="noopener noreferrer">{"not making references to drugs"}</a>{"— he just had a very creative imagination and was entertaining a couple children during a boat ride down the Thames river when he told that story! An Oxford University professor of the classical tradition named Richard Jenkyns told Prospect magazine that "}<em>{"Alice in Wonderland"}</em>{" is “probably the most purely child-centred book ever written”."}</p>
      <p>{"Just like the original, this retelling by Joe Rhatigan and Charles Nurnburg preserves that child-centered focus with a little twist. I absolutely loved the illustrations on this story- they were cheerful, colorful, playful and very appealing to adults as well as children. The changing text size was playful and can help new readers focus on particular words. The retelling was done very creatively, taking Alice on a journey that places emphasis on her changes and transitions as she attempts to follow the white rabbit."}</p>
      <p>{"Notably missing in this modern version are the characters The Mad Hatter and March Hare, the Jaberwocky, the Queen of Hearts, and the Cheshire Cat. Perhaps they are saving it for the next installment since it appears that this brief retelling only covers chapters 1-5 of the original story. I look forward to a sequel that continues Alice’s journey and hope it is just as lovely and entertaining as this one."}</p>
      <p>{"My eight year old daughter said:"}</p>
      <blockquote>
        <p>{"It’s really good and very interesting. I think that it is a good make-believe story for younger kids."}</p>
      </blockquote>
      <p>{"A review copy was sent for an honest review."}</p>
    </div>
  );
}
