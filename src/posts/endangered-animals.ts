import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "This hardcover book from ",
      {
        "type": "link",
        "href": "http://www.flowerpotpress.com/site/page.php?obj=books_children",
        "external": true,
        "children": [
          "Flowerpot Press"
        ]
      },
      " talks about the natural history, conservation status, and threats to endangered animals all over the world. In addition to discussing environmental threats, such as toxic fertilizers that threaten endangered raptors and the effect of ",
      {
        "type": "link",
        "href": "http://www.biologicaldiversity.org/species/mammals/polar_bear/index.html",
        "external": true,
        "children": [
          "climate change on polar bears"
        ]
      },
      ", this book talks about ways that people harm animals, such as killing elephants for the ivory trade and taking parrots from the wild for the pet trade."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book provides great factual information to kids about the threats animals face in the wild, but it never spells out the next logical step about what ordinary people can do to protect animals. This can be a good starting place for discussions with your child. Since ",
      {
        "type": "link",
        "href": "http://www.worldwildlife.org/what/globalmarkets/wildlifetrade/faqs-parrot.html",
        "external": true,
        "children": [
          "the pet trade threatens parrots"
        ]
      },
      ", you might ask, then is it OK to buy these animals in pet stores? Or, why would anyone want to kill alligators for their hides?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
