# Fox Challenge: Image Combiner

Author: [Max IMBERT](mailto:maximber@gmail.com)

Date: August 2nd, 2018

### Frameworks and libraries

To build this quick image combiner, I used:

* [ExpressJS](https://expressjs.com/) for the backend
* [express-fileupload](https://www.npmjs.com/package/express-fileupload):
  Express middleware for uploading files
* [merge-img](https://www.npmjs.com/package/merge-img): NPM package to merge
  multiple images into one (as recommended)
* [DropZone](https://www.dropzonejs.com/) for drag'n'drop file uploads with
  image previews

### Pre-requisites and installation

This build assumes you already have both `node`, `bower`, `npm` installed on
your machine.

To load dependencies, from within this repo:

```sh
npm install && bower install
```

### Usage

```sh
npm start
open http://localhost:3000
```

### Files of interest

- `server.js`: the Express server (on port 3000) that handles both loading HTML
  files from `www/`, and an `/upload` endpoint for submitting a
  `multipart/form-data` form containing one or more images, responding with a
  base64-encoded dataURI (the combined PNG image).
- `www/index.html`: a simple page with a drag'n'drop zone, which shows upload
  progress and a resulting combined image (using a dataURI), with a download
  link.

### Ideas for improvements

- separate JS and CSS into their own respective files (unnecessary here as code
  is concise)
- `reactjs` or other component framework to organize front-end code (especially
  toggling visibility of results/progress)
- server-side security: enforce max payload size to avoid malicious curls
  (bypassing client-side checking)

---

_Thank you for reviewing this._
