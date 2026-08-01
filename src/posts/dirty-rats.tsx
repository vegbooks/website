import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10166",
  "slug": "dirty-rats",
  "url": "/reviews/dirty-rats/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/10/15/dirty-rats/",
  "title": "Dirty Rats?",
  "publishedAt": "2015-10-15",
  "publishedLabel": "October 15th, 2015",
  "excerpt": "Using what we’ve learned to hate about rats, DIRTY RATS?, leads us from familiar (disgusted!) territory to cute, helpful, furry territory with interesting facts and adorable images of many different kinds of rats.…",
  "image": {
    "src": "/media/2015/10/dirty-rats.jpg",
    "alt": "dirty-rats",
    "width": 484,
    "height": 387
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
      "name": "Adam Gustavson",
      "slug": "adam-gustavson",
      "url": "/topics/adam-gustavson/"
    },
    {
      "name": "Darrin Lunde",
      "slug": "darrin-lunde",
      "url": "/topics/darrin-lunde/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Issues Facing Wildlife",
      "slug": "issues-facing-wildlife",
      "url": "/topics/issues-facing-wildlife/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Rats",
      "slug": "rats",
      "url": "/topics/rats/"
    },
    {
      "name": "Urban Wildlife",
      "slug": "urban-wildlife",
      "url": "/topics/urban-wildlife/"
    },
    {
      "name": "Wild Animals",
      "slug": "wild-animals",
      "url": "/topics/wild-animals/"
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
    "description": "Using what we’ve learned to hate about rats, DIRTY RATS?, leads us from familiar (disgusted!) territory to cute, helpful, furry territory with interesting facts and adorable images of many different kinds of rats.…",
    "image": "https://vegbooks.org/media/2015/10/dirty-rats.jpg"
  },
  "previous": {
    "title": "Alice in Wonderland: Down the Rabbit Hole",
    "url": "/reviews/alice-in-wonderland-down-the-rabbit-hole/"
  },
  "next": {
    "title": "Bunnicula: A Rabbit Tale of Mystery",
    "url": "/reviews/bunnicula-a-rabbit-tale-of-mystery/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"Using what we’ve learned to hate about rats, "}<em>{"DIRTY RATS?"}</em>{", leads us from familiar (disgusted!) territory to cute, helpful, furry territory with interesting facts and adorable images of many different kinds of rats."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2015/10/dirty-rats.jpg"} alt={"dirty-rats"} width={484} height={387} />
      </figure>
      <p>{"Author Darrin Lunde is a mammalogist with the American Museum of Natural History, so he knows his rats. And illustrator Adam Gustavson has a beautiful drawing style which is surely heightened by his boyhood love of rats. This is a picture book that children will return to again and again for the images, facts, and even the elementary school aged favorite — the gross-out factor."}</p>
      <p>{"The book begins with examples of stereotypes we have about rats, and then spends the remainder of the pages debunking them with details about the bamboo-eating long-tailed marmoset rat, the banner-tailed kangaroo rat which hops, or the bushy-tailed cloud rat whose tale is furry. The author continues his crusade for rat love with examples of how rats help humans through research, spreading seeds, and playing their role in the circle of life."}</p>
      <p>{"Some sections of the book will encourage frank conversations with children about laboratory rats and predators. Facts like “most rats die before their first birthday” may also affect sensitive children deeply."}</p>
      <p>{"True to his background as a mammalogist, Darrin Lunde includes an extensive list of several more types of rats at the end of the book. He also includes additional resources to learn more about rats. "}<em>{"Dirty Rats?"}</em>{" is written in an accessible, entertaining way that children and adults will enjoy."}</p>
      <p><em><a href={"http://www.charlesbridge.com/collections/all-childrens-books"} target="_blank" rel="noopener noreferrer">{"The publisher"}</a>{" sent a copy of this book for review."}</em></p>
    </div>
  );
}
