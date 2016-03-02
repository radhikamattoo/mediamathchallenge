@author Radhika Mattoo
rm3485@nyu.edu


## Assumptions/ Information
*  sample.txt is in the same directory as mediaMath.js
*  Port 5000 is the hardcoded default port
*  node_modules folder has been ignored via .gitignore

## Node Modules Used
*  http
*  Express
*  body-parser

## Example Run
Open ** two ** terminals and navigate to the mediaMath repo in both.

In one terminal:

`node mediaMath.js`

In the other:

`curl -X POST --data-binary @sample.txt http://localhost:5000/ `

See output from mediaMath.js...

`curl -X POST --data-binary @sample.txt http://localhost:5000/no_blue`
