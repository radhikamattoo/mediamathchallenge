@radhikamattoo
rm3485@nyu.edu
March, 2016


## Assumptions/ Information
*  Language: Javascript
*  'sample.txt' is in the same directory as mediaMath.js and is sent as a binary file (i.e. with the --data-binary flag from the prompt)
*  Port 5000 is the hardcoded default port
*  node_modules folder has been ignored via .gitignore
*  I have not set up anything to handle GET requests, so there's no need for browser interaction

## Node Modules Used
*  http
*  Express
*  body-parser

## Example Run
1. Open two terminals and navigate to the MediaMath-Challenge repo in both.

2. In one terminal:

  `node mediaMath.js`

   See "Hosting at port 5000"

3. In the other:

  `curl -X POST --data-binary @sample.txt http://localhost:5000/ `

   See output...

  `curl -X POST --data-binary @sample.txt http://localhost:5000/no_blue`
