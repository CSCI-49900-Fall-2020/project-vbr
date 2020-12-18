# Open reSource Final Written Report

## Abstract
In an era where information is readily available, we are greeted with the issue of information overload and choice paralysis. End users are privy to brute forcing a web page of links, with no intention of looking on the next page of results. There lacks a platform where tech learners can filter out the billions of results after a search query on Google. Hence, Open reSource is a web app that intends to provide auxiliary learning materials when traditional resources are inadequate. The app presents users with the most general disciplines of Computer Science until they funnel their way down to a repository, thread, and the particular resource. Furthermore, the demand for this platform is evident in our testing where 92.8% of participants found the web app helpful in their endeavors, with over half stating that the list of topics and resources are more beginner-friendly and useful compared to ordinary searching. In brief, Open reSource’s main goal is to optimize one’s time to learn over the time it takes to research decent material on popular search engines.

## Introduction

Whether it be contributing to an academic discussion or simply learning something new, everyone begins with a resource that supplies them with necessary background information. Finding that resource, however, is an arduous feat. Imagine navigating the maze of the Dewey Decimal System or tediously flip through thousands of pages in an encyclopedia without a guarantee that useful information will ever be found. Thankfully, the advent of the internet has revolutionized the way material is organized and shared, especially in academia.

Computer Science proves to be one of the most challenging majors offered by universities due to its abstract foundations and breadth/depth. But on the other side of the coin, it is also revered as the most open source discipline of study because of the tech community’s active collaboration and willingness to exchange knowledge. Just perform a tech-related search request on Google and your webpage is teeming with relevant links, videos, articles, and images. Yet, the aforementioned tedious page flipping is still evident in how one must perform a trial and error to find what they're actually looking for on the webpage. The first search result is sometimes a dense resource bogged down by jargon and complex phrasing that intimidates beginners. This issue worsens in the tech community where merely learning a new framework can be overwhelming due to extraneous tutorials that all teach the same thing. There lacks a platform that stores and moderates effective Computer Science resources and appeals to all experience levels.

Open reSource is a web app that would streamline how a techie moderates their self-learning by only presenting the best learning materials that other techie’s have found tremendously helpful.  The app’s name is a play on words with the open source community, but instead of collaborating on code, the tech community unites to approve the resources. We hypothesize that Open reSource can drastically reduce the research time of finding useful material, thus prioritizing one’s time to start learning instead of playing with process of elimination.


## Main Content Section

### Problem Recap

Open reSource draws inspiration from discussion sites such as Reddit and Stack Overflow. Both platforms have undoubtedly pioneered the mechanisms behind virtual collaborative discussion and online communities. Nonetheless, there exists some shortcomings in how each platform accomodates tech circles. For instance, the tech community’s voice on Reddit may be silenced by other popular subreddits. Overtime, a once popular tech thread may be abandoned by a lack of community engagement. By the same token, Stack Overflow is mostly a question and answer site for debugging and inquiries. The two knowledge markets support how a programmer learns and debugs, but neither really address how a programmer begins to learn and embark in CS in the first place. To worsen matters, an awkward learning gap perists in the tech space that intimidates beginners to pursue Computer Science. In a study conducted during the 2016-2017 school year in the UK, the Higher Education Statistics Agency (HESA) revealed that 9.8% of Computer Science majors drop out or switch majors because of the alarming difficulty levels and abstract concepts.

Open reSource aims to bridge the learning gap by providing the tech community a means to share and post effective CS resources they’ve stumbled upon during their research. Instead of allowing another programmer to excavate the depths of the Internet to find that hidden gem, a user can easily log onto Open reSource and post material they found extremely helpful to help reduce the research time for other programmers. A user can also explore the newest resources the tech community has collected and quickly begin their learning. Thus, a community is fostered and there is higher accountability for resources to be top tier, digestible, and easily accessible.

### General Idea

Upon using Open reSource, the web app first presents Computer Science domains ranging from languages, mathematics, databases, architecture, algorithms and data structures, and artificial intelligence. Within each domain exists 1-9 repositor(ies) and a repository is defined as a subset of a chosen domain. For instance, in the language domain, Open reSource supports the following repositories: Python, JavaScript, C++, Java, HTML/CSS, Swift (as these are all programming languages). After choosing the Python repository, threads are displayed and a thread is equivalent to a specific topic in Python such as "variables". We conveniently index threads by experience level, allowing users to determine their comfort in the repository and wisely deciding which resources to start with first. Upon choosing a thread, we start to funnel down to the actual resources and users can identify which resources the community approves by exploring like count, the comment section, etc. It's worth noting that our UI mimics the interface of Hackerrank, so users can find resources in a matter of 3-5 clicks, thus eliminating the need for a search bar and cognitive overhead.

A common misconception around Open reSource is whether it replaces one's own primary study method. Open reSource is not a tutorial marketplace, it is not a Khan Academy clone, and it is not a place with a structured curriculum to learn new topics in the same vein of Udemy or Coursera. It is a web app with a means to ***supplement*** one’s learning by crowdsourcing the opinions/submissions of the online community. So, a user exploring our site would require previous knowledge of tech concepts and define which domain of CS they’re studying. To clarify, an individual's single source of truth is usually from a textbook in university or a YouTube tutorial series. If the explanations in textbooks do not suffice (which is usually the case), they can explore Open reSource to find user approve learning materials.

We want to emphasize that there is power in auxiliary learning materials, even if it's a mere article or image/diagram. No one has strictly learned from one source. Instead, they usually digest 5-10 different interpretations until they can finally gauge an understanding of the topic, thus encouraging them to revisit their textbook's explanation and make connections.

### Technical Details

#### Kareem Hussein
***Choosing a Tech Stack:*** With an array of technologies roaming in the wild, it’s difficult to choose which frameworks and libraries will constitute as the working components of one’s project. Another layer of complexity is added when considering how to configure those components to actually interact and  exchange data with each other. Taking such factors into account, it’s important to choose a tech stack that will simplify and streamline the development process by minimizing the amount of languages a team may have to learn. That’s where Kareem suggested the MERN stack, a notable combination of technologies with an emphasis on one language: JavaScript. On a high level, the MERN stack was appealing because only JavaScript was needed to create server-side and client-side code, thus allowing the team to focus on the implementation instead of juggling several languages and their nuanced syntax. On a lower level, the MERN stack is an acronym for MongoDB, Express.js, React.js, and Node.js. At the database tier, the team wasn’t set on a certain schema for our data, so MongoDB’s flexibility to alter data fields helped to accommodate our ever-changing data format as the project grew in complexity. At the backend tier, Node.js served as our application server that set up the runtime execution environment and liberated JavaScript outside of the browser. Express.js was utilized on top of Node.js to organize our project’s APIs, middleware, routing, and managed HTTPS requests. At the front end tier, we knew we wanted repeated, modular UI components that can be easily reused and incorporated into larger components. Thus, React.js served as our “view” in MVC, while providing minimal local state management for updating our UI when needed. And the interactions between each layer of technology was as simple as setting up a proxy server, utilizing Mongoose connect middleware, or configuring environment variables. In short, the MERN stack proved to be a helpful end-to-end framework for the creation of a functional full stack web application.

***Redux and Global State Management:*** Our web app is designed to only be accessed through users, meaning that sign up/registering is mandatory and the majority of the web pages must be encapsulated in protected routes. Authentication and authorization features were implemented both on the frontend and backend. In the realm of general security, sessions and cookies were the de facto standard to sanction an end user. However, React places an emphasis on dynamically updating new state changes and sessions/cookies were not efficient enough to update all UI components of a state change due to its dependency of constantly reading to and writing from session storage. An alternative to cookies/session was Redux, a JavaScript library for managing application state with an infamous downside of excess boilerplate code. Particularly, Redux was utilized to manage the state of whether a user’s authorization status. When a user first signs up, an action creator (a function that passes along state data to create an action) is called from the React file. Actions are JavaScript objects with a type property (used to switch between conditionals in the reducer files) and a payload property (the actual data being sent along to the backend). Upon creation of the action/JS object, it gets dispatched to the global store and the store relays that action to the appropriate reducer. It’s worth noting that Redux action creators require a function to be within a function. This is because in a synchronous web app, when we call an action creator, we immediately return an action which instantly flows into the middleware and reducers. However, the vast majority of web apps need to fetch data through asynchronous channels (because when we call an action creator, we probably need to fetch some amount of data from an external source as the payload to dispatch). On the backend, standard authentication was implemented including encryption/decryption, JSON Web Tokens, and sanitization/validation code for error handling user input. Back to the frontend, only when that asynchronous request resolves can we actually create the action. Vanilla Redux is not capable of this, so we use the extended Redux Thunk functionality for asynchronous action creators. When using Redux Thunk, all the aforementioned rules for action creators are disregarded. In vanilla Redux, action creators are required to return an action/JS object. However, Redux Thunk requires we return a plain javascript function (a function that returns a function). The first parameter to the inner thunk function is the dispatch method (the same dispatch method tied to the global redux store object). This is where Redux’s infamous boilerplate code tends to grow the project’s complexity. Nonetheless, Redux allowed all of our UI components to subscribe to the global store and conditionally render different web pages based on a user’s login status, thus creating a dynamic full-stack experience.

#### Olenka Quispe Huanca
***UI Choices:*** React and Semantic UI were used for the creation of the user interface of the application. In the early stages, we used Material UI for its reusable components and compatibility with React. However, it required a lot of boilerplate code. After coming across Semantic UI and experimenting with it for a few days, it was decided that semantic UI was a better fit for the application. The transition from Semantic UI to Material UI was fairly simple. We downloaded the npm package for Semantic UI and added the Semantic UI CDN link and minified CSS file to the project file. The design of the repository, thread and resource template pages was made to be appealing and simple for the user to access and understand the information provided. The inspiration came from the HackerRank website. The website follows a simple design that allows its users to easily navigate the website and get the necessary information within a few clicks. Following that structure, our users can easily flow from the repository page to the resource page in a few clicks.

***Funneling from the broad (discipline) to the specific (resource):*** The repository layout was divided into three horizontal sections to display all the threads in a single place. Each section contained a group of threads of the same difficulty level. The sections were modularized into a single component called threadList. This component rendered the group of thread based on the props passed down from the repository component. By clicking the thread name, the user would be easily taken to the thread page where the user will find the resources available for the thread. The thread page was designed using a card component as the main feature to display the resource information. With that, we aimed to provide the users with all the necessary information about the resource in one place and make it easy for them to grasp all the information. Each card was divided into two areas. The main are included all the necessary information about the resource. The secondary area included the number of likes and comments that the resource had as well as a button to take the user to the resource page. The resource page was created using the three main components. The first component displayed all the information regarding the resource including the title, the name of the person who posted the resource and the link to the resource. Below that, the like button component and the comment section component were displayed. The comment component was further separated into a form component and comments component. The form comment takes the user comment and submits the comment to the backend while the comments component displays all the resource comments in the resource page. Once those pages were created, the open a new thread form was implemented. The form included the thread title, the CS discipline it belonged to, the repository and the difficulty level. The form was designed to be simple and easy for the user to understand. Most of the required fields contained a dropdown menu option for the user to simply select one of the choices and complete the form within a few seconds. The information collected by the form was received using the “/api/thread” endpoint. The information about the new thread was added to the thread collection in the database. The user document in the user collection was also updated to reflect the contributions made. After that, the user was redirected back to the dashboard.

#### Narvisha Sajjad
***Wireframing:*** In terms of the frontend, there were countless design decisions discussed. Wireframes were constructed by various group members to flesh out ideas, focusing on how each key concept of the project would be displayed on the user’s side, for instance, the accessibility and design of the repositories, threads and resources. At the very beginning, within the planning phase, MaterialUI was chosen for its react components. After the course of a few weeks however, during initial phases of the project, it was unanimously decided to switch to SemanticUI, for its simplicity and better fitting components.

***Drafing Webpages:*** Once the landing page and its numerous components were created, the login form and the resource submission form were the next step. The resource submission form included information about the resource itself, such as a link, and information on where the resource falls under, such as the repository and specific thread. These forms had to be simply designed and appealing to the user at the same time. A simple design, in terms of allowing a quick submission, with as few and precise fields as possible, would be more appealing to the user. Thus, if the experience is quick and efficient, the user would be more likely to add more resources and interact with the site more often. In terms of the resource submission form, allowing the user to see what goes into the submission process also enhances their understanding of the site further, allowing further understanding of the flow of the site. Designing the site and UI in this way allows for less cognizant overhead, making the site easier for the user to understand and use. Once the forms were done, the profile page was tackled. The profile page had to display the user’s info, for instance their profile picture, name, username, and email. The profile page also had to display any user achievements based on their interaction with the site, along with a profile description and a list of their favorite resources. In terms of design, the user’s account info was targeted towards the left of the page, where all the information can be seen cohesively. The rest of the profile page was designed to show medals and achievements at the top, with the description following soon after. The last bit of the page was dedicated to the user’s favorite resources, allowing ample space to display the info. In this case, the profile page was simply designed, showing the user’s info within different boxes, allowing for a clear, readable page. The page is colorful and appealing to the user, while using simple layouts for easier readability. 

#### Ingmar Fjolla
***Database Modeling:*** Creating a database model was another responsibility, since the group chose on using MongoDB the ability to store arrays in collections made it very fluid and dynamic. The first model had one collection that included all of the domains, and within the domains the repositories would live, and then resources inside the threads. But it was extremely error prone and messy, and just not a good model. An improved model led us to separate collections for resources, and some that helped map data including a threads collection, and a separate repository and domains collection. However, we still ran into issues because of not thinking of all possible cases regarding metadata for each resource. A removal tool was also implemented in python, which used the likes metadata to remove resources that had negative 10 dislikes or more, since that meant users did not like that resource at all.

***Gathering Data:*** In gathering the data the first few weeks were used to attempt creating a custom python scraper from Selenium/Scrapy. Both those tools were met with errors in terms of authentication since bot-like behavior was detected from the sites Ingmar attempted to scrape from, so professor Khatchadourian mentioned using the google API would probably be a better choice so instead of the scraper that was used to scrape resources to insert into the database. It did lead to a conceptual problem in terms of checking, but that will come up later and during the individual paper. The google API returned JSON data with the amount of resources you wanted it to return per query, so a query like “Python Variables tutorials “ would return 30 different resources with data including the URL, title , and a short bit about it. There may have been more crawling options with Google but it was pretty expensive, even the queries were limited not allowing to fill each repository yet. However Kareem implemented a solution that conditionally rendered different pages based on whether a repository thread had resources or not to ensure users did not just encounter an empty page and or errors.

***Text Classification:*** After the database had some items, the next part was preprocessing the text which is where a lot of issues came into play. All of the sites are set up differently and attempting to code the text processor proved to be a challenge. Since different websites set up their HTML differently some of the main text may be inside a div labeled main while other aren’t, so looking for the text in a specific place didn’t work so the only method without spending all the time on building a general text splitter for multiple websites was just using beautiful soup to get all the text off a page, even if it wasn’t in the main body. Making a counter to count all instances of a specific word and making a python dictionary was also challenging so instead of following a textbook approach which started from scratch Ingmar chose to use the NLTK(Natural Language ToolKit) library in python, which has a built in function to create tokens and count instances of words occurring in a document. It gets tricky here, because there wasn’t a set of data that we could use to actually train (which will be spoken more about in the conclusion/individual paper). Sentiment Analysis with the bounds of “helpful” and “not helpful” was also difficult to define (and a failed attempted approach here) given that again there was no pre-database for tutorials like that like for specific topics which do exist for things like movie reviews or newspaper articles. However, the best approach given that we must approve articles as they come in was by using the term frequency-inverse document frequency(TF-IDF) and a bag of words model. Algorithms don’t work well with text input, so text must be tokenized and then converted into vectors of numbers. This is where a bag of words model comes into play. Bag of words is an approach where you create a matrix of document and words by counting the number of times a word appears in each document, essentially just the term frequency. One of the metrics used for our’s counted the percentage our keywords (specifically repository and thread) appeared in each text, since we didn’t have a beginning training set. So to offset this, we added the term frequency–inverse document frequency which would take into account the length of documents because more weight is given with just term frequency to the longer tutorials. The IDF would measure how much information a word provides across a document. So, the approach we had to have a low threshold of around one to two percent for our specified keywords and if a document passed it we kept it in the database. 

#### Ismail El Baghdadi

## Conclusions and Further Work
A survey was conducted where users simply browse the site and simply answer questions provided by in a Google Form. When asked “Do you think the app fulfills its purpose,” a whopping 91.7% of participants agreed that the app satisfies its mission statement. General feedback included praise regarding how the app supplements their learning and presents an indexed UI by experience level, which attracts programmers from all backgrounds. Thus, when asked “Would you recommend this app to other students,”  83.3% of users would gladly point their peers to Open reSource as an alternative. Of the 16.7% who would not recommend Open reSource,  66.7% of those stated that if the features they wanted were implemented, then they would gladly recommend. Interestingly, when asked “Would you rather use Open reSource or Google,” the team witnessed a slightly polarizing response of 57.1% for Open reSource and 42.9% of Google. This result stemmed from how we clarified that Open reSource is a supplementary learning tool, and participants favored anything that supplements their studying techniques. However, all participants still rely on a primary learning source, whether it may be a textbook or relying on top search results on Google. Criticism ranged from the need of a web app like Open reSource, whether learning platforms like Khan Academy is already enough, and the ability to interact with the online tech community beyond a comment section. The most notable reply received was about the subjectivity of choosing what is classified as beginner, intermediate, or advanced, and that ends up being the decision for the community at large.

In retrospect, we would have liked to explore different avenues with this project. First, we would investigate how SQL would fare as our database in comparison to its non-relational counterpart, MongoDB. One issue with MongoDB was its inability to dynamically update all copies of certain data due to the lack of something like primary keys in SQL where explicit links are established between data. A change in one piece of data had to spawn changes wherever else the data lived, leading to a lot of re-querying and suboptimal scalability. Second, we would explore indexing articles by experience level. For example, variables in Python can be seen in three lenses: a beginner, intermediate, and advanced. A beginner lens will make the subtle analogy that a value literal is like an item and a variable name is like a box, so storing an item in a box is synonymous with storing a value in a variable. An intermediate lens will provide a technical definition of variables, the naming conventions behind variables, statically typed vs dynamically typed variables, etc. An experienced lens will go into detail about how a variable occupies an “x” amount of bytes in memory and whether it is immutable vs mutable. It would be interesting to see how articles for the same topic can vary in explanation, but we opted for indexing the threads by experience and allowing concise resources to be in each thread. If we allowed threads ***and*** resources to be indexed by experience level, it would not scale properly with our choice of technologies. Third, we would implement admin functionality with Redux to delegate greater control to the tech community. In the paradigm of machine learning, we would ask for user preferences and  classify articles as ideal but verbose , decent but not verbose, based on word count, etc. Moreover, we would begin with an assumed data set due to logic errors when training on a dataset that we’re classifying. Finally, to extend on more interaction, we would like to execute a live chat feature using technologies like Socket.io for more real-time communication between users.

## References
Franek, Rob. “Top 10 College Majors.” *The Princeton Review*, Princeton Review, www.princetonreview.com/college-advice/top-ten-college-majors. Accessed 18 Dec. 2020.

HESA. “Higher Education Student Statistics: UK, 2016/17 - Subjects Studied | HESA.” HESA, HESA, 11 Jan. 2018, www.hesa.ac.uk/news/11-01-2018/sfr247-higher-education-student-statistics/subjects.

Huilgol, Purva. “Quick Introduction to Bag-of-Words (BoW) and TF-IDF for Creating Features from Text.” *Analytics Vidhya*, 25 June 2020, www.analyticsvidhya.com/blog/2020/02/quick-introduction-bag-of-words-bow-tf-idf.

Larson, Quincy. “The 2020 Stack Overflow Developer Survey – 65,000 Devs Share Their Salaries, Top Programming Languages, and More.” *FreeCodeCamp.Org*, Free Code Camp, 29 May 2020, www.freecodecamp.org/news/stack-overflow-developer-survey-2020-programming-language-framework-salary-data.
Lieb, David. “Cognitive Overhead, Or Why Your Product Isn’t As Simple As You Think.” Tech Crunch, 20 Apr. 2013, techcrunch.com/2013/04/20/cognitive-overhead.

SchermCo. “#56 - Open-Source in Education — The Tech-Inspired Solution to Transforming Schools and Communities.” *SchermCo*, SchermCo, 5 Mar. 2020,http://scherm.co/blog/56-open-source-in-education-the-tech-inspired-solution-to-transforming-schools-and-communities/.

SchermCo. “#56 - Open-Source in Education — The Tech-Inspired Solution to Transforming Schools and Communities.” SchermCo, SchermCo, 5 Mar. 2020, http://scherm.co/blog/56-open-source-in-education-the-tech-inspired-solution-to-transforming-schools-and-communities/.


Segaran, Toby. “Document Filtering.” *Programming Collective Intelligence:* Building Smart Web 2.0 Applications, O’Reilly Media, 2007, pp. 117–40.


## Archived Assignments
- [Project Proposal](https://github.com/CSCI-49900-Fall-2020/project-trainSE/wiki/Project-Proposal)

- [Group Authored](https://github.com/CSCI-49900-Fall-2020/project-trainSE/wiki/Group-Authored)
