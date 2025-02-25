# Event Delegation:
Event Delegation means adding a single event listener to a parent element to manage events on its child elements and then use event.target to determine which child element was clicked.

## How Does It Work?  
Event Delegation relies on two key JavaScript mechanisms:  
**Event Bubbling:** Events propagate from the target element up to the root of the DOM tree.  
**event.target:** Identifies the originating element of the event.   


## Benefits of Event Delegation:

Using event delegation has several benefits:

- Less code: With event delegation, we can add a single event listener to a parent element instead of adding event listeners to each child element individually. This can help reduce the amount of code we need to write.

- Improved performance: Handling events on a large number of elements can be resource-intensive. By using event delegation, we can reduce the number of event listeners we need to add, which can improve performance.

- Dynamic elements: If we add new elements to the DOM dynamically, we don't need to add event listeners to these elements individually. Instead, we can add a single event listener to a parent element that handles events for all child elements, even the ones added dynamically.

https://dev.to/sakethkowtha/mastering-js-event-bubbling-and-delegation-5bf5