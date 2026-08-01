import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9841",
  "slug": "the-dandelion-seeds-big-dream",
  "url": "/reviews/the-dandelion-seeds-big-dream/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/09/15/the-dandelion-seeds-big-dream/",
  "title": "The Dandelion Seed’s Big Dream",
  "publishedAt": "2014-09-15",
  "publishedLabel": "September 15th, 2014",
  "excerpt": "This tenacious little seed never gives up hope despite its bumpy path in life. The Dandelion Seed’s Big Dream (received as a review copy from the publisher) sends an inspiring message – with a little determination…",
  "image": {
    "src": "/media/2014/09/dandelion-seed2.jpg",
    "alt": "Dandelion Seed book cover depicting hot air balloons and a dandelion seed puff, to accompany Jane Cowles' review on Vegbooks, a site that reviews media from a vegan perspective",
    "width": 210,
    "height": 257
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
      "name": "Cris Arbo",
      "slug": "cris-arbo",
      "url": "/topics/cris-arbo/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Goals",
      "slug": "goals",
      "url": "/topics/goals/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Inspiration",
      "slug": "inspiration",
      "url": "/topics/inspiration/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
    },
    {
      "name": "Joseph Anthony",
      "slug": "joseph-anthony",
      "url": "/topics/joseph-anthony/"
    },
    {
      "name": "Nature",
      "slug": "nature",
      "url": "/topics/nature/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Jane Cowles",
    "slug": "jane-cowles",
    "url": "/contributors/jane-cowles/",
    "aliases": [
      "JANE COCO COWLES",
      "JANE COWLES"
    ]
  },
  "seo": {
    "description": "This tenacious little seed never gives up hope despite its bumpy path in life. The Dandelion Seed’s Big Dream (received as a review copy from the publisher) sends an inspiring message – with a little determination…",
    "image": "https://vegbooks.org/media/2014/09/dandelion-seed2.jpg"
  },
  "previous": {
    "title": "Lena of Vegitopia and the Mystery of the Missing Animals",
    "url": "/reviews/lena-of-vegitopia-and-the-mystery-of-the-missing-animals/"
  },
  "next": {
    "title": "The Prairie That Nature Built",
    "url": "/reviews/the-prairie-that-nature-built/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2014/09/dandelion-seed2.jpg"} alt={"Dandelion Seed book cover depicting hot air balloons and a dandelion seed puff, to accompany Jane Cowles' review on Vegbooks, a site that reviews media from a vegan perspective"} width={210} height={257} />
      </figure>
      <p>{"This tenacious little seed never gives up hope despite its bumpy path in life. "}<em>{"The Dandelion Seed’s Big Dream"}</em>{" (received as a review copy from "}<a href={"http://www.dawnpub.com/"} target="_blank" rel="noopener noreferrer">{"the publisher"}</a>{") sends an inspiring message – with a little determination dreams can come true. This dandelion seed is also accepting of all the challenges in life it faces."}</p>
      <p>{"Trapped in a spider web, getting hurt and nearly losing its parachute and traveling into a dark cave – yet anything still seemed possible in its eyes. The author teaches a great lesson to children about setting goals and working towards accomplishing them."}</p>
      <p>{"The illustrations are equally as beautiful as the message this book sends. An added bonus is the appendix at the back of the book. It teaches little known facts like the origin of the name dandelion, the dandelion life cycle and projects that can be used in the classroom to teach young students about dandelions."}</p>
      <p>{"I love the many possibilities this book offers – it has something for everyone."}</p>
    </div>
  );
}
