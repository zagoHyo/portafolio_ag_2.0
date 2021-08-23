// ===================================================================================================

let introduction = `
    <h4 id="Introducción">Introducción</h4>
    <p>In the first part of this manual we will learn what React is, clarifying the main features of this library for creating user interfaces for the web. In addition, throughout the first articles we will have the opportunity to make our first examples with React. We have two approaches to introducing React, one from a software package called Create React App, which would be the most advisable way to start a project, and another approach to the first steps starting from scratch in a completely empty project. This second introduction to the first steps with React is more experimental and therefore less used, but it can provide us with interesting data to better understand the internal functioning of the library and the anchoring system to incorporate components into any web project.</p>
`

// ======================================================================================================

let que_es_react = `
    <h4 id="que_es">¿Qué es React y por que usar React?</h4>
    <p>React is a Javascript library focused on the development of user interfaces. This is how the library itself is defined and obviously, that is its main area of ​​work. However, the truth is that in React we find an excellent ally to make all kinds of web applications, SPA (Single Page Application) or even mobile applications. For this, around React there is a complete ecosystem of modules, tools and components capable of helping the developer to cover advanced objectives with relatively little effort. <br> <br>
    It is used to develop web applications in a more orderly way and with less code than if you use pure Javascript or libraries such as jQuery focused on DOM manipulation. Allows views to be associated with data, so if the data changes, the views change too.
    </p>
`

// ===================================================================================================

let primeros_pasos_react = `
    <h4 id="primeros_pasos">First Steps with React</h4>
    <p>
    React, sometimes also known as ReactJS, is a powerful Javascript library, focused on simplicity and performance, used in hundreds of top-notch projects such as Facebook, Netflix or Airbnb. It is worth knowing since it is postulated as a natural evolution for thousands of developers who use simpler libraries such as jQuery. In summary, React provides several advantages, allowing you to write less code and increasing its ease of maintenance of applications. <br><br>
    In the previous article in the React Handbook, we already provided some useful and general information about React and why to use the library. In this article we intend to present React in a more practical way and for this we are going to use a very interesting package, called "Create React App", made available by Facebook itself.  <br><br>
    What is Create React App unless you are an expert frontend developer, the best alternative to get started with React is to use the create-react-app package. It will allow you to start very quickly and save you many steps of initial configuration of a project. <br><br>    
    Generally when building a site or web app you have to deal with a series of tools that are part of the tooling of a frontend developer, such as package managers, task managers, transpilers, linters, builders, live reload, etc. All this series of tools can be complex if you want to learn in enough detail to start using them in a project, but they are essential for a good workflow.<br>    <br>
    Therefore, if we want to be detailed and provide ourselves with the necessary tools to be productive and efficient, it can be difficult to start a Frontend project in general. That's where Create React App comes in, giving us everything we need to start an app with React, but without having to waste time configuring tools. We will start an app with a couple of simple commands, getting many benefits from advanced developers: npm install -g create-react-app <br> <br>
    Once we have installed it globally, we go to our projects folder and launch the command to start a new application: create-react-app mi-app   <br><br>
    </p>
`

// ===============================================================================================

let react_features = `
    <h4 id="react_features">React Features</h4><hr>
    <p>
    <h5 id="composition">Composition of components</h5>
    Just as in functional programming, functions are passed as parameters to solve more complex problems, creating what is known as functional composition, in ReactJS we can apply this same pattern by composing components<br><br>

    The applications are made with the composition of several components. These components encapsulate a behavior, a view, and a state. They can be very complex, but it is something that we do not need to worry about when we are developing the application, because the behavior remains within the component and we do not need to complicate it once it has been done.<br><br>
    
    This is something we've already talked about. In summary, when developing we will create components to solve small problems, which because they are small are easier to solve and from now on they are easier to visualize and understand. Then, some components will rely on others to solve bigger problems and in the end the application will be a set of components that work with each other. This working model has several advantages, such as ease of maintenance, debugging, scalability, etc. <br><br>
    
    <h5 id="declarative">Declarative Vs Imperative Development</h5>
    In the development experience with simpler libraries such as jQuery, or "Vanilla Javascript" itself, we carried out an imperative programming style. In this style, scripts are made that step by step have to inform about what actions or changes in the DOM should be carried out. You have to be very concise in these actions, specifying in detail each of the changes you want to make. The imperative way of declaring forces us to write a lot of code, because every little change must be defined in a script and when the change can be caused from many places, when we add events, the code becomes poorly maintainable.<br><br>
    
    However, the React style is more declarative, in which we have a state of the application and its components react to the change of that state. Components have a given functionality and when one of their properties changes they produce a change. In the code of our application we will have that component, and in it it will be declared where the data that it needs to perform its behavior comes from. We can use it as many times as we want, declaring that we want to use it and also declaring the data that it needs to function.<br><br>
    
    Perhaps now, if we do not have experience with other libraries or frameworks with a declarative approach, the idea may be somewhat confusing, but we will see it better with the examples.<br><br>
    
    <h5 id="one_way">One-way data flow</h5>
    This is another of the things that React provides, although it is not exclusive. In this model of operation, higher-order components propagate data to lower-order components. The lower order ones will work with that data and when their state changes they will be able to propagate events towards the higher order components to update their states.<br><br>
    
    This flow tends to be unidirectional, but between sibling components it is often more convenient for it to be bidirectional and it can also be done within React. However, if we always try to maintain the one-way operating pattern, it will greatly facilitate the maintenance of the application and its debugging.<br><br>
    
    <h5 id="performance">Performance thanks to the Virtual DOM</h5>
    The performance of React is very high, thanks to its operation. We refer to the performance when rendering the application. This is achieved through the Virtual DOM. It is not that React does not operate with the real DOM of the browser, but its operations are performed before on the Virtual DOM, which is much faster.<br><br>
    
    The Virtual DOM is loaded in memory and thanks to the tool that differentiates between it and the real one, the browser DOM is updated. The result is that these operations allow updates of up to 60 frames per second, which produce very fluid applications, with smooth movements.<br><br>
    
    <h5 id="isomorphism">Isomorphism</h5>
    It is the ability to run the code on both the client and the server. It is also known as "Universal Javascript". It is mainly used to solve traditional positioning problems in Javascript applications.<br><br>
    
    As we have already talked about this point before, we are going to leave it here.<br><br>
    
    <h5 id="JSX">Elements and JSX</h5>
    ReactJS does not return HTML. The code embedded within Javascript looks like HTML but it really is JSX. They are like Javascript functions, but expressed using React's own syntax called JSX. What it produces are elements in memory and not elements of the traditional DOM, with which the functions do not take time to produce heavy browser objects but simply elements of a virtual DOM. All this, as we have said, is much faster.<br><br>
    
    React DOM and the diffing tool will later take care of converting those elements returned by JSX into Real DOM, without our having to intervene.<br><br>
    
    <h5 id="starless">Stateless and Stateless Components</h5>
    React allows you to create components in a number of ways, but there is a difference between stateful and stateless components.<br><br>
    
    The stateless components are the components that have no state, let's say that they do not store data in their memory. That is not to say that they cannot receive property values, but those properties will always take them to the views without producing a state within the component. These stateless components can be written with a simple function that returns the JSX that the component should represent on the page.<br><br>
    
    Statefull components are a bit more complex, because they are capable of saving a state and generally maintain business logic. Their main difference is that they are written in the code in a more complex way, generally by means of an ES6 class (Javascript with ECMAScript 2015), in which we can have attributes and methods to perform all kinds of operations. Statefull components, with state, need to have a render () method that is responsible for returning the JSX to use to render it on the page.<br><br>
    
    We can say that stateful components are "ready" components and stateless ones are "dumb". Statefull are used to solve bigger problems, with business logic, while stateless are used more for user interfaces.<br><br>
    
    <h5 id="component">Component life cycle</h5>
    React implements a life cycle for components. They are methods that are executed when common things happen with the component, that allow us to subscribe actions when an initialization occurs, a promise return is received, etc.
    </p>
`
// =============================================================================================


export {introduction, que_es_react, primeros_pasos_react, react_features}