# Tiny Link Saver by Braden Best

Looking back at my old code, I quite liked the [first version](http://github.com/bradenbest/link-saver/tree/1.0.0-master) of the link saver. While the code was horrible, the app was simple. 

So I started writing this. The tiny link saver.

The goal is simple: to create a link saver that is rock-solid in terms of stability, and well-organized in terms of code.

I threw the css together in about 20 minutes. If anyone wants to improve on it, I'm sure they could do a hell of a lot better job than I. So fork away!

## Data

Right now, the structure is this:

    storage: object {
      "links" : array [
        object {
          "url": string,
          "title": string
        },
        ...
      ]
    }

## Todo

* add delete link functionality (link.js)
  * with ability to specify range
* don't use prompt for input--use a proper form (input.js)
  * maybe create a `form()` function to amend that
* add edit link functionality (link.js)
* add a `paradigms` branch that adds paradigm functionality (paradigms:paradigm.js)
* come up with a better name than "paradigm"
* possible search functionality (link.js)

