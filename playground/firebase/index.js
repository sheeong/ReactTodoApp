import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAfXqCT-Eww8jhPKKNDXXWAnXWWDhga_iA",
    authDomain: "mead-todo-app-96603.firebaseapp.com",
    databaseURL: "https://mead-todo-app-96603.firebaseio.com",
    storageBucket: "mead-todo-app-96603.appspot.com",
    messagingSenderId: "215458734670"
  };

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Shee',
    age: 25
  }
});

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });
//
// firebaseRef.child('app').update({
//   version: '1.0.1'
// }).then( () => {
//   console.log('update worked');
// }, (e) => {
//   console.log('update failed');
// };

// firebaseRef.update( {
//   'app/name': 'Todo Applicaiton',
//   'user/name': 'SJ'
// })

// firebaseRef.child('app').update({
//   'name': 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   'name': 'SJ'
// });

// firebaseRef.remove();
// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// })

// firebaseRef.update({
//   isRunning: null
// });
// firebaseRef.child('user/age').remove();

// firebaseRef.once('value').then( (snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value');
// });

// firebaseRef.child('app').once('value').then( (snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value');
// });

// firebaseRef.on('value', (snapshot) => {
//   console.log('On Got value', snapshot.val());
// });
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Mike'});
// firebaseRef.child('app').update({name: 'Something else'});


// var notesRef = firebaseRef.child('notes');
// var newNoteRef = notesRef.push();
// newNoteRef.set({
//   text: 'walk the dog'
// });
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'walk the dog!'
// });
// console.log('note key', newNoteRef.key);

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});
todosRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});
todosRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'walk the dog!'
});
todosRef.push({
  text: 'watch a movie'
});

//console.log('todo key', todoRef.key);
