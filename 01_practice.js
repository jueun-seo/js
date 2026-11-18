console.log('hello')

//변수
//python: my_number = 10

var cound = 1
let a = 1
const b = 2

// 선언
let console
//할당
c = 3

//자료형

 const price = 1500
 console.log(typeof price)
 const weight = 0/25
 console.log(typeof weight)

 const isFresh = true 
 console.log(typeof isFresh)

 //변수의이름 캐멀케이스로 짓는걸 권장

 //list 자료구조 --> Array 라고 부름 (js)
const basket = ['사과', '바나나', '수박']
console.log(typeof basket)
console.log(basket[1])
console.log(Array.isArray(basket))

//딕셔너리 자료구조 --> Object 라고 부름 (js)
const apple = {name: '사과', price: 1500}
console.log(typeof apple)
console.log(apple['name'])
console.log(apple.name)
//키 값으로 접근. 클래스.

const discount = null
console.log(typeof discount)

let t 
//변수를 선언했는데 할당하지않음
console.log(t)

//python: f-string f'hello {variable}'
const hi = `hello${greet}`
console.log(hi)

console.log(apple)
apple.name='링고'
console.log(apple)

//조건
const stock = 3

if(stokc >= 100) {
    console.log('여유있음')
} else if (stock > 0) {
    console.log('부족함')
} else {
    console.log('품절')
}

//삼항연산자
//python : status = '재고있음' if stock >0 else '품절'
const status = stock > 0 ? '재고있음' : '품절'

console.log("0" == "0")
console.log(0 == "0")
console.log(0 === "0")

//반복

//반복1
let n = 0
while (n < 3) {
    console.log(n)
    n++ // n = n + 1, n += 1
}

//반복2
for ( let i = 0 ; i < 3 ; i ++) {
    console.log(1i)
}

//반복3
//const baskey = ['사과','바나나','수박']
//len((basket)

for (let i =0; i<basket.length; i++) {
    console.log(basket[i])
}

//반복 4
//python: for item in basket 이랑 동일
for (const item of basket) {
    console.log(item)
}

//반복 5
for (const key in apple) {
    console.log(key, apple[key])
}

//반복 6
basket.forEach(function (item, index) {console.log(item,index)})

//함수
//python def multiply():
function multiply (num1, num2) {
    return num1 * num2
}
console.log(multiply(2, 3))

//1. 함수표현식
const mulply2 = function (num1, num2) {
    return num1 * num2
}
console.log(multiply2(3,4))

//2. 화살표 함수
const multiply3 = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(4,5))

//2-1. 화살표 함수 축약: 몸통이 return 한줄이면 {}와 return 생략가능
const multiply4 = (num1, num2) => {return num1 * num2}

//2-2. 화살표 함수 축약: 매개변수가 하나면 () 생략가능
const double = num1 => num1 * 2
//function dobule(num1){return num1*2}