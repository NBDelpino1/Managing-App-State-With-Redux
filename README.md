# Managing-App-State-With-Redux


// created reducer inside reducers folder to return array with list of objects, added reducer to combinedReducers call inside index.js, reducer will add a key to global application state called books (key = books, value = whatever is returned from the reducer)
// created component book-list, promoted it to container because it needed to be aware of state, promoted to container by 1st importing the connect function from react-redux, then defined mapStateToProps then hooked the component together with mapStateToProps using the connect function
// made sure app.js rendered the list