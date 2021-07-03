


console.log(localStorage);
localStorage.setItem('name', 'Avi')
localStorage.setItem('age', '33')
localStorage.setItem('language', 'Hebrew')
localStorage.setItem('id', '12345678')
localStorage.setItem('hobby', 'Swimming')
localStorage.setItem('city', 'Bat Yam')
console.log('length ' + localStorage.length);
console.log('get with get ' + localStorage.getItem('age'));
console.log('get with dot ' + localStorage.age);
​
// localStorage.removeItem('age')
// localStorage.clear()
console.log('length ' + localStorage.length);
console.log(localStorage.__proto__);
console.log(localStorage.key(0)+": "+ localStorage.getItem(localStorage.key(0)));
console.log(localStorage.getItem(localStorage.key(0)));
​
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i)+": "+ localStorage.getItem(localStorage.key(i)));
}
​
localStorage.date = '1/2/2000'