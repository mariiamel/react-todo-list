# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) ToDo List Exercise

## Review

So, we've gone through all of the basics of React. To really hammer it home with practice, let's walk through complete creation of an app. This will be a to-do list, keeping track of everything we need to do for the day (after we finish this!). It's a lot, so we're going to want it to be editable.

This is what our list will look like when we're finished:

![finished-list](https://i.imgur.com/McEInR3.png)

Let's get started!

* Because this is a new exercise, be sure to close any running applications in Terminal first. `killall node` can stop any stray processes that you may have left running on accident.

Clone this repo and then make a react app in it:

```sh
create-react-app react-todo-list
```

The tool created a new directory for our app, so let's move into it...

```sh
cd react-todo-list
```

Use `npm start` to start a server that will serve your new React application!


```sh
npm start
```

* Check it out! If you browse to http://localhost:3000, you should have a fresh react app.

* Make sure that as you go, you frequently check the app in your browser to ensure your changes are all reflecting accurately!

## Part 1: App setup and component creation

We will need to refactor App.js into a class component, and create two additional components to render the todo list.
  * We need a `TodoList` component to show list items and accept input from the user to create new list items
  * We need to make a component for a list item which will be a child of the `TodoList`

### Set up App.js as a class component.

As part of the initial setup of the project, refactor the functional App component in `App.js` to be a class based component. 

<details>
  <summary>WAIT! I'm stuck!</summary>

  update your App.js like this:

  ```js
import { Component } from 'react'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        Hello from the App component!
      </div>
    )
  }
}
  ```

</details>

### Make the needed components for our App

We've learned that we should make new files for each component and that different functionalities should be split into different components.

Start with the parent component, the todo list. Call this new component `TodoList.jsx` and have it render the following HTML:

```jsx
<div>
  <h1> Things I should stop procrastinating:</h1>
  <ul>
    <li></li>
  </ul>
</div>
```

_Remember to render your new `<TodoList />` component in App.js_

<details>
  <summary>HELP! What do it put in the TodoList.jsx file?!</summary>

  this is what your TodoList.jsx should look like:

```jsx
import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}

```

</details>

<details>
  <summary>HOLD ON! My component still isn't show up on the page!</summary>

  Did you update your App.js to render it?

```jsx
import { Component } from 'react'
import TodoList from './file path TodoList.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}
```

</details>

**your page should now display an empty list.**

Let's make the child component for the list items. This component can simply render  `<li>Make the list!</li>` so that we are starting with something in this list.

* Remember to use an `export` statement!
* Don't forget to import your `ListItem` component into `TodoList.jsx`!
* Finally, add `<ListItemm />` in place of the `<li></li>` in `TodoList.jsx`


</details>

<details>
  <summary>HOLD ON! My component still isn't show up on the page!</summary>

  Your List item should look like this:

```jsx
import{ Component } from 'react'

export default class ListItem extends Component {
  render() {
    return(
    <li>Make the list!</li>
    )
  }
}

```

Your TodoList should look like this:

```jsx
import { Component } from 'react'
import ListItem from '../list-item/ListItem.jsx'


export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          <ListItem />
        </ul>
      </div>
    )
  }
}
```

</details>

## Part 2: Props

This is a great start - we've already nested components (`ListItem` inside of `TodoList`). Now, let's add some props to make this useful!

Let's first just pass a prop into `ListItem` from `TodoList`. We'll call the prop something simple, like `todo`. I've got the munchies; I'll pass in a value of 'buy ice cream.'

Then, in `ListItem`, we'll add a list item that uses the `todo` prop instead of the existing hard-coded text.

</details>

<details>
  <summary>Um.....How do I pass a prop?</summary>

```js
<ListItem task='Buy ice cream' />

```

</details>


</details>

<details>
  <summary>Gosh Darn it -- how do I use this prop in ListItem?</summary>

Update the hard code value in the `<li>` tags:

```js
<li>{this.props.task}</li>
```

</details>

## Part 3:

If we want to make this a truly extensible list, we could create an array of items, pass them into props to many `ListItem` components, and then render all of them. Let's do that now.

* First create an file that exports an array of placeholder tasks and then import it into your `TodoList.jsx`.

<details>
  <summary>Ummmm.....what should I do exactly?</summary>

I named my file `placeHolderTasks.js` and it looks like this:

```js

const placeHolderTasks = ['Buy ice cream', 'Eat ice cream', 'promise I\'m gonna work out', 'take a nap instead']

export default placeHolderTasks

```

Don't forget to import it in TodoList.jsx!!!!


```js

import placeHolderTasks from './placeHolderTasks.js'

```

</details>

Now We can map our tasks to an array of `<ListItem />`s and render them in the TodoList Component!

<details>
  <summary>Map a what now?</summary>

Here's a simple example that makes a new array by adding an `!` to each element of an array.

```js
const phrases = ['ice cream', 'dinosaurs', 'hobbits']
const excitedPhrases = phrases.map( (phrase, index) => {
  return phrase + '!'
})
// excitedPhrases is ["ice cream!", "dinosaurs!", "hobbits!"]
```

Instead of mapping a phrase -- map each task into `<ListItem />` as a prop.

</details>


<details>
  <summary>No seriously, I'm stuck.</summary>

you can map the items like this:

```jsx
const listItems = placeHolderTasks.map((placeHolderTask, index) => {
  return <ListItem task={placeHolderTask} key={`ListItem ${index}`} />
})
```

and you can render them like this:

```jsx
render() {
  const listItems = placeHolderTasks.map((placeHolderTask, index) => {
    return <ListItem task={placeHolderTask} key={`ListItem ${index}`} />
  })
  return (
    <div>
      <h1> Things I should stop procrastinating:</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}
```

</details>

Our app now looks like this:
![list-preview](https://i.imgur.com/0hpTBpr.png)

## Part 4 Clearing the List

After my nap, I took a look at my todo list and decided I want to be able to clear it since I had completed all my tasks, so lets add that functionality now.

We're going to add a button to the list that allows users to clear away everything in it. 

### Set up state:

First, let's convert the list to be a state attribute, that way we can change it using `setState` later!

Lets just refactor the initial state to be our placeholder tasks for the time being.

* At the top of the `TodoList` component, set an initial state for an attribute called `taskArray`. Its default value should be the place holder task array.

* Don't forget to change the `map` call!
* Always check to be sure your app is accurate (it should still look the same).

<details>
  <summary>Help! I broke my app during the refactor!</summary>

```jsx
export default class TodoList extends Component {
  state = {
    taskArray: placeHolderTasks
  }

  render() {
    const listItems = this.state.taskArray.map((placeHolderTask, index) => {
      return <ListItem task={placeHolderTask} key={`ListItem ${index}`} />
    })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}
```

</details>

### Add a the ability to clear the list

Now, we'll look into making this list changeable. Remember, updating state will involve calling `setState`. Let's use a simple example with a "clear" button in `MyList`.

* First, in `TodoList.jsx`, define the method that will be handle a button click event
  * It should definitely be an arrow function to avoid wonky binding issues
* invoke `this.setState()` and set `taskArray` to an empty array.  
* Then, add a button after the whole `<ul>` list.
  * remember to use an `onClick` event!

<details>
  <summary>Hold up. Whats going on with that clear list method?</summary>

you don't need to use a callback in the setState function, since you don't need access to the previous state

```jsx
  handleClearList = () => {
    this.setState({
      taskArray: []
    })
  }
```

</details>

<details>
  <summary>Yea, But what about the button?</summary>

check it:

```jsx
<ul>
  ...
</ul>
<button onClick={this.handleClearList}>Finished the list!</button>
```

</details>


Our App looks like this now:

Now what we have is:
![list-preview](https://i.imgur.com/Zr5YH73.png)


> Don't forget to try it out!


 ### Sure-fire Coding
 There's lots of things that can go wrong when we try to hook up new functionality to our app. Our button might be set up wrong, it might not call the correct function, the function may have an error in it.

 Let's add a `console.log()` as a callback to be executed after we set the state with handleClearList method. This is an excellent debugging practice. Adding `console.log()` proves to us that the function is actually executing. This proves to us that there's nothing wrong with how we hooked up the button and helps narrow our focus in case something else went wrong.

 Let's say you click the button and the list isn't cleared.
 * If you didn't see `"Clearing list!"` in the console then you know something is wrong with the way you hooked up the button. Investigate that.
 * If you did see `"Clearing List!"` in the console and the list still didn't clear then you know you need to investigate your code inside the function after the click.
* also log the state to check to see that everything worked right.

 Adding simple sanity checks like this to your code will make you a productive
 programmer.

<details>
  <summary>I'm stuck!!!</summary>

 ```js
  handleClearList = () => {
    this.setState({
      taskArray: []
    }, () => console.log('clearing the list!', this.state))
  }
 ```

</details>

## Adding items

Let's add one more thing to our app: an input field for more items. 

* We will need to make a form with a submit input and a text input.
* We will need to make two methods that handle text input and form submission
* We will need add a new key in our state object to store the input text.

Lets first stub the methods and then create the form to test functionality!

* Create a `handleNewItemChange` method and a `handleNewItemSubmit` method. Just have them `console.log` something for testing. 
  * They will both need to be passed the event as a parameter!
  * Don't forget to make them arrow functions to avoid any hassle with `this` binding!


<details>
  <summary>How do i do that?</summary>

```jsx
handleNewItemChange = (e) => {
    console.log('handle text input change!')
  }

  handleNewItemSubmit = (e) => {
    console.log('handle form submission!')
  }
  ```

</details>

Next Build the form. It will need two inputs, one for text input and the other for form submission.

* the form's `onSubmit` should be given `handleNewItemSubmit` to call back on form submission.
* The text input's onChange should be given `handleNewItemChange` to call back when the user types something

<details>
  <summary>Whats this form supposed to look like?</summary>

```jsx
<form onSubmit={this.handleNewItemSubmit}>
<input type="text"
  placeholder="Type an item here"
  onChange={this.handleNewItemChange}
  value={this.state.newItemInput}
  />
  
  <input 
    type='submit' 
    value='Add Item' 
  />
</form>
```

</details>

> Test your new form and check the browser's console for the logs!

Once you have verified that it is working, create a key `newItemInput` in the state object to hold the new item that the user inputs.

> Make a new state attribute, initializing `newItemInput` to a blank string. (Hint: remember, `state` is just a JavaScript object, so you you need a comma between key-value pairs.)

<details>
  <summary>Help! What do I do?</summary>

```jsx
state = {
  taskArray: placeHolderTasks,
  newItemInput: ''
}
```

</details>

Finally, build the logic needed in each method.

* `handleNewItemChange`  is for when a user types characters into the input field  
  * We'll need to get the current value of the input field and set state accordingly.
  > Create this function with an event parameter of 'e'. Inside the function, change the state of `newItemInput` to `e.target.value` - this will be the value the user entered into the form.

 verify it is updating the state correctly with a console.log() as a callback to `this.setState` before moving on

 <details>
  <summary>Whats that look like?</summary>

```jsx
  handleNewItemChange = (e) => {
    this.setState({
      newItemInput: e.target.value
    }, () => console.log(this.state))
  }
}
```

</details>

* `handleNewItemSubmit` is for when we submit the form
  * We will need a callback given to `this.setState` here since we need to get the previous state.
  * don't forget to prevent the default behaviour of form submission!
  > You can use the handy spread operator to spread the previous state into a new array along with the newItemInput from the current state. Don't forget to clear newItemInput with a callback after you set the new state!

<details>
  <summary>I give up! Show me how it works!</summary>
  
```jsx
  handleNewItemSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState, props) => {
      return {
        taskArray: [...prevState.taskArray, this.state.newItemInput]
      }
    }, () => this.setState({ newItemInput: '' }))
  }
  ```

</details>

## Final Code Of TodoList.jsx

<details>
  <summary>sneak a peek</summary>
  
```jsx
import { Component } from 'react'
import ListItem from '../list-item/ListItem.jsx'
import placeHolderTasks from './placeHolderTasks.js'


export default class TodoList extends Component {
  state = {
    taskArray: placeHolderTasks,
    newItemInput: ''
  }

  // event handlers
  handleClearList = () => {
    this.setState({
      taskArray: []
    }, () => console.log('clearing the list!', this.state))
  }

  handleNewItemChange = (e) => {
    this.setState({
      newItemInput: e.target.value
    }, () => console.log(this.state))
  }

  handleNewItemSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState, props) => {
      return {
        taskArray: [...prevState.taskArray, this.state.newItemInput]
      }
    }, () => this.setState({ newItemInput: '' }))
  }

  render() {
    const listItems = this.state.taskArray.map((placeHolderTask, index) => {
      return <ListItem task={placeHolderTask} key={`ListItem ${index}`} />
    })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>

        <form onSubmit={this.handleNewItemSubmit}>
          <input type="text"
            placeholder="Type an item here"
            onChange={this.handleNewItemChange}
            value={this.state.newItemInput}
            />
            
            <input 
              type='submit' 
              value='Add Item' 
            />
          </form>

        <ul>
          {listItems}
        </ul>

        <button onClick={this.handleClearList}>Finished the list!</button>
      </div>
    )
  }
}
```

</details>

# Bonus:

## Delete single a list item, one at a time

Add the ability to delete a single list item. 

* You will need to add a delete button in your `ListItem` component. It will remove the listItem that it is in.
* How will the `onClick` event access the state of the parent element?
  * _Research passing event handlers and props_
* How will you remove a single item from anywhere in the taskArray?
  * _Hint: checkout the `Array.splice()` method
  * You will need to also need pass the index of the task into the event handler when you map the `taskArray` to `ListItems` -- how can you accomplish this?

