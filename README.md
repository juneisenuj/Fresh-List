
# Fresh-List

1-800-Flowers.com, Inc. code assessment

## Requirements

Create a multi-component React/Redux/Saga/Node Express app to process results from a REST service. 

Backend (Node.js)

Restful service providing API to manage the data pulled from:

http://jsonplaceholder.typicode.com/posts

[Preferred] Use typescript to complete it in nodejs

Frontend (React/Redux/Saga SPA):

Read data from created backend JSON rest API.

Provide the ability for users to search the JSON data by title.

Results of user search should be presented on the page.

Provide the ability for the user to select an entry from the results and have it populate an edit form.

Provide the ability for the user to type the title of an entry in the edit form and have it populate the form.

Provide the ability for users to edit the entry and have it saved in the local Redux store. (the edited entry should be presented on subsequent searches until page reload)

*Bonus*: incorporate auto-complete to predict what the user will type next for the title

Requirements:

Use React, Redux with Sagas and Node Express Server

Include Unit Tests for frontends and backends

All dependencies should be publicly available or properly included with the project and referenced within the package.json


## Preview

![image](https://user-images.githubusercontent.com/82249239/137771877-99aeb325-fd26-47c4-b39c-66223d8abec0.png)

![image](https://user-images.githubusercontent.com/82249239/137772607-d192e96d-0668-4bdd-9ea3-35d77f0f4df2.png)




## Tech Stack
 
**Client:** React, Sass, Axios, (Redux-Saga, TypeScript)
 
**Server:** Node.js, Express.js
 
  
## Installation
 
Install Fresh-List with npm
 
```bash
 https://github.com/juneisenuj/Fresh-List.git
 cd Fresh-List
 npm install 
 npm run start 
 npm run build
```

    
## API Reference

#### Get all list
 
```http
 GET /data
```

  
## Authors

- [@juneisenuj](https://www.github.com/juneisenuj)


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

  
