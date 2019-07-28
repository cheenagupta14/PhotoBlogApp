# Photo Blog Application #

A Single Page Application made using React which fetches user info from https://jsonplaceholder.typicode.com 

For making  ajax call axios library is used 
Redux  is  used for state management
Thunk middleware is used for handling async calls

--Steps to run App:
npm install
npm run build
npm run start
launch app in browser at http://localhost:3000/

--Features
Post tab lists post of the user with posts body and related comments
Albums tab lists Albums of the user with pictures in each Album
Note : Intial load might take some time due to network.

--Testing
Testing library - mocha  chai
written test only for posts state because of time constraint , src/tests/posts.test.js
test script in package.json - mochatests 
Right now test script is failing , didn't have time to look into this