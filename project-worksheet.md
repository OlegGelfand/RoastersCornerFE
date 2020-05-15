# Project Overview
This will be a place for coffee lovers to unite with roasters from their hometown, as well as a place for roasters to market their product nationally.
## Project Links
 

- [add your github repo link]() 

https://github.com/OlegGelfand/RoastersCornerFE, https://github.com/OlegGelfand/RoastersCornerBE

- [add your deployment link]()


## Project Description
Full stack App. Designed to be a quiet site, linking roasters from all across the U.S to coffee lovers. Resulting in a nice place to reconnect to your home towns' roaster, try something new, and for my drop-ship business to expand.


## Wireframes
Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()
Both:
https://www.figma.com/file/fVlxI5E5mdDVArsbx1GJ0r/Project-4?node-id=5%3A0


### MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP
- Full Crud functionality for at least Roasters or coffee data
- Create API which will provide Roaster/Coffee data to the frontend
- Form for Roasters to fill out -create data
- Form for customers to fill out - doesn't go to back end, rather an email or site that will allow owner to get feedback
- Responsive Design
- clean design
- render some roasters on the load page
- React hooks (useState, useEffect, potentially others)
#### PostMVP EXAMPLE
- Add a google api. Will be used for rendering a photo of the closest roaster to  user location, potentially render all local roasters on load page.
- incorporate more CSS libraries, to improve the front end
- create a fully functional login page in order that data can only be created by roasters.
## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

|Component|	Description|
| --- | :---: |  
|App	|This will ideally not do anything except for be the source for a useContext hook|
|Main    |This will contain the router and render some of the roasters|
|RightNav |This will have the links to roaster info, list of roasts, roast types|
|LeftNav |This will have the links for roasters to sign in, roaster blogs, and a place order page|
|Header	|This will render the link to the load page|
|Login	|This will ideally provide an option for the Roaster to sign up and allow them to create |
|Footer	|This will render the nav which will link to our about us page, and a contact us page|
|Roasters |This will render all of the roasters|
|Coffees| This will render all of the coffees


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

All times below are listed in hours:
|MVP|
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Research | H | 4 | 5 | 5 |
| Create back end file structure | H | .5 | .5 | .5 |
| Create models for Roasters, and coffees | H | .5 | .5 | .5 |
| Seed data  | H | 1 | 1 | 1 |
| Set up GET route & controller to return all Coffees | H | .5 | .5 | 0 |
| Set up connections for local testing, test with Postman | H | 1 | 2 | 0 |
| Set up & test additional GET/POST/DELETE routes & controllers for Roaster | H | 2 | 3 | 3 |
| Set up & test GET/POST/DELETE routes & controllers for Coffee | H | 2 | 3 | 3 |
| Set up MongoDB Atlas server & and deploy db on Heroku | H | 1 | 3 | 3 |
| Create helper file for front end | H | 1 | 1 | 1 |
| Address Errors between BE/FE| H | 4 | 2 |2 |
| React Components Organization | H | 4 | 5 | 5 |
| implement googleform |H|2|1|1|
| Logic for Roasters page Component | H | 3 |  4|  4|
| Create Navbar and Route Components | H | 3 |  3| 3 |
| Basic Styling | H | 3 | 4 | 4 |
| Deployment of Frontend | H | 1 | .5 | .5 |
| Debugging Deployed Frontend | H | 1 | 0 | 0 |
| Make Site Responsive | H | 3 | 3 | 3 |
| additional styling  | M | 4 | 4 | 4 |
| Total | H | 45.5 | 45 | 45 |

|PostMVP|
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Add additional functionality on front end for postMVP goals | M | 4 | 0 | 0 |
|Login for Roasters so that only Roasters can create and modify their info and Comment Components | H | 4 | 3 | 3 |
|Add an additional css library | H | 2 | 0 | 2 |
|Add a google api on the front end to show photos of the roasters building or city| H | 4 | 0 | 0 |
| Total | H | 14 | 3 | 5s |
 
## Additional Libraries
Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

Axios,
W3cshools- used for some buttons
google forms- the feedback form

## Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

Hard to choose a portion, I was able to do everything to connect the front and back end on my own and understood what the parts were doing. Choosing one though, i guess would be incorporating react socks. My goal is to have a process down for CSS/component design, so coupling react-socks with media query taught me alot about planning a project, when to use each for of responsive design.

  return (
    <div className="roaster-boxes">
      <div className="roasters-main-page">
        <Header />
        <Breakpoint medium up>
          <SideBars />
        </Breakpoint>

        {renderRoasters}
      </div>
    </div>


