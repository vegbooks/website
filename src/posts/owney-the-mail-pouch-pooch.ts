import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/02/9780374356859.jpg",
    "alt": "Owney: The Mail-Pouch Pooch",
    "href": "/media/2011/02/9780374356859.jpg",
    "width": 189,
    "height": 258,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If you’re anything of a history buff like me, *especially* when it comes down to touching human and animal interactions, then you’ll love this made-for-children’s tale researched and written by Mona Kerby and illustrated by former librarian Lynne Barasch. “In the year 1888, on a cold rainy October night in Albany, New York, a straggly terrier mutt wandered through the empty streets looking for a place to get out of the rain” …and so begins ",
      {
        "type": "link",
        "href": "http://owneythemailpouchpooch.wordpress.com/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Owney: The Mail-Pouch Pooch"
            ]
          }
        ]
      },
      ", a tender rendition of the adventures of the United States Postal Service’s official canine employee."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Owney finds refuge and warmth among the burlap mail bags in the local post office, where he becomes forever attached to the scents and sights of this agency’s work. He patrols the mail room, keeps rats and cats at bay, and is a superior supervisor and protector of the men-in-blue. The pooch comes into his own when he boards his first mail train, thus heralding in his lifelong quest for travel with the U.S. mail. The Albany postal workers were happy to reunite with Owney after that initial excursion, but knew it wouldn’t be his last outing – “After that, the men tied a note to his collar, ‘Dear Railway Postmen: Owney guards the U.S. mail. Will you let us know where he has been? Please attach your depot tag to his collar.’” Owney collected so many depot tags, the Postal Service had to retrofit a vest in order for him to showcase them all."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I won’t reveal the rest of the story as it such a sweet, historical, worthwhile read. I highly recommend visiting the ",
      {
        "type": "link",
        "href": "http://www.postalmuseum.si.edu/owney/",
        "external": true,
        "children": [
          "Smithsonian National Postal Museum’s website"
        ]
      },
      " for more on this loveable dog that captured the hearts of millions. And look for the 2011 Owney stamp coming to your local post office on July 27!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
