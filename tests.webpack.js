var context = require.context('./src/js/tests', true, /\.jsx?$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
