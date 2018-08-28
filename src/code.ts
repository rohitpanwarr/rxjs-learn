import { Observable } from 'rxjs/Observable';
import { Subscriber } from '../node_modules/rxjs/Subscriber';
import { fromEvent } from 'rxjs/Observable/fromEvent';
import { Subject } from 'rxjs/Subject';

/** ------------------------ Example One ------------------------ */

// var observable = Observable.create((observer: any) => {

//     observer.next('Hello');
//     observer.next('Rohit');
//     setInterval(function() {
//         observer.next('This course is completed');
//     }, 2000);
// });

// var observer = observable.subscribe(
//     (x: any) => addItem(x),
//     (x: any) => addItem(x),
//     (x: any) => addItem(x)
// );

// Multiple Observers

// var observer2 = observable.subscribe(
//     (x: any) => addItem(x)
// );

// observer.add(observer2);
// //observer.remove(observer2);

// setTimeout(function() {
//     observer.unsubscribe();
// }, 8001);

/** ------------------------ Example One End ------------------------ */

/** ------------------------ Example Two ------------------------ */

// var observable = fromEvent(document, 'mouseover');

// setTimeout(() => {
//     var subscription = observable.subscribe((x:any) => {
//         addItem(x);
//     });
// }, 2000);

/** ------------------------ Example Two End ------------------------ */

/** ------------------------ Example Three ------------------------ */

var subject = new Subject();

subject.subscribe(
    (data) => addItem('Observer 1 ' + data),
    (err) => addItem(err),
    () => addItem('Observer 1 Completed')
);

subject.next('The first thing has been sent');

var observer2 = subject.subscribe(
    (data) => addItem('Observer 2 ' + data)
);

subject.next('The second thing has been sent');
subject.next('The third thing has been sent');

observer2.unsubscribe();

subject.next('The Fourth thing has been sent');

/** ------------------------ Example Three End ------------------------ */

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}