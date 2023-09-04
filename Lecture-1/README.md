# Notes:

- React file is the core react file. React can work anywhere, it can work on mobile etc.
- React-dom is the react library which we need to modify the dom.
- ReactElement is an object that the browser understands
- The order of the script tags in the html matters here. if the App.js is imported before the cdn links, it will throw an error.
- If there is something already in the root in html file, it will get replaced (not appended) by element in the react code.

# Homework questions

## CDN - Content delivery metworks:

hosting boxes close to the user
follow regulations
allow posting content in the boxes though UI

## what is cross origin attribute in the script tag

- used whenever we are trying to access resources from a different server.
- Can be crossorigin = "anonymous", use-credentials etc
- Anonymous: User is saying that I am requesting a resource from you and I am not providing any identifying info about the browser and the server can choose to provide or decline the info.
- Use-credentials: User has to send identifying info to the server.
