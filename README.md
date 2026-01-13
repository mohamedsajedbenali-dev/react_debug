# react_debug
Debugging Process Documentation

I ran the React application and opened the React Developer Tools to inspect the component tree. I noticed that the User component was not receiving the name prop, as its value was undefined. I fixed this issue by correctly passing the name prop from the App component.

I also noticed that the counter was not increasing due to incorrect state update logic. I corrected the setCount function by using the proper state update syntax.
