import { of, throwError, interval, Observable, from, ReplaySubject, Subject, BehaviorSubject} from 'rxjs'; 
import { map, tap, catchError, throttleTime, filter, distinctUntilChanged, distinctUntilKeyChanged, reduce, scan, timeout  } from 'rxjs/operators';
import { fromEvent, bindNodeCallback } from 'rxjs';

// fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

// const source1 = interval(1000)

// source1.subscribe(
//   data => console.log(data)
// )

// source1.subscribe(
//   data => console.log(data)
// )

// Subject and ReplaySubject - 
// SUbject and BehaviourSubject emits only last value,
// ReplaySubject emits all the .next() values, even emitted before its subscription.
// const repSub = new ReplaySubject(2);

// const inter  = interval(2000);

// repSub.next("1213");
// repSub.next("2222");

// repSub.subscribe(data => {
//   console.log('Shobhit', data);
//   return data;
// })

// inter.subscribe(
//   data => {
//     repSub.next(data);
//   }
// )

// setTimeout(function(){
//   repSub.complete()
// }, 5000)




// scan and reduce operator
// const obs = of(1,2,3,4);

// obs
// .pipe(
//   scan((total, initialValue) => {
//     if(total > 2) {
//       return false
//     } else {
//       return total + initialValue;
//     }    
//   }, 0)
// )
// .subscribe(
//   data => console.log(data)
// )



// // distinctUntilChanged and distinctUntilKeyChanged
// const obj = from([{
//   nam: 'Shobhit',
//   country: 'Singapore',
//   address: {
//     area: 'mandi',
//     code: 2324
//   }
// },{
//   nam: 'Shobhit1',
//   country: 'Singapore1',
//   address: {
//     area: 'mandi2',
//     code: 2324
//   }
// },{
//   nam: 'Shobhit2',
//   country: 'Singapore2',
//   address: {
//     area: 'mandi1',
//     code: 2324
//   }
// }]);

// const createObj = Observable.create(obj);
// obj
// .pipe(
//   distinctUntilChanged((a, b) => a.address.area === b.address.area)
// )
// .subscribe({
//   next: (data) => console.log(data)
// })



// const observable = interval(1000);

// observable
// .pipe(
//   filter(data => data % 2 === 0)
// )
// .subscribe({
//   next: (data) => console.log(data),
//   error: (error) => console.log(error)
// });



// const source = of(1, 2, 3).pipe(
//   map(x => {
//     if(x === 3) {
//       throw 'error comes';      
//     }
//     return `Hello ${x}!`;
//   })
// );

// source.subscribe(
// (next) => {
//   console.log(next);
// },
// (error) => {
//   console.log('234', error);
// },
// () => {
//   console.log('completed')
// }
// );


// const source2  = interval(1000);
// source2.pipe(  
//   map(x => {
//     console.log(x);
//     return x;
//   }),
//   throttleTime(2000),
//   map(x => {
//     console.log('later', x);
//   })
// ).subscribe();


