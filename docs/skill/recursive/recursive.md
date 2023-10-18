### 递归

>  要理解递归，首先要理解递归。  
  
>递归是一种解决问题的方法，它从解决问题的各个小部分开始，直到解决最初的大问题。递归通常涉及函数调用自身。

>在理解了什么是递归之后，我们也就解决了最初的问题。如果我们把这句话翻译成JavaScript代码的话，可以写成下面这样。

```javascript
    function understandRecursion(doIunderstandRecursion) {
    const recursionAnswer = confirm('Do you understand recursion? ');
    if (recursionAnswer === true) { // 基线条件或停止点
        return true;
    }
    understandRecursion(recursionAnswer); // 递归调用
}
```

递归常用算法
1.计算阶乘
> 5的阶乘表示为5!，和5×4×3×2×1相等，结果是120。    

如果用迭代实现
```javascript
    function factorialIterative(number) {
      if (number < 0) return undefined;
      let total = 1;
      for (let n = number; n > 1; n--) {
        total = total * n;
      }
      return total;
    }
    console.log(factorialIterative(5)); // 120

```
递归实现
```javascript
    function factorial(n) {
      if (n === 1 || n === 0) { // 基线条件
        return 1;
      }
      return n * factorial(n -1); // 递归调用
    }
    console.log(factorial(5)); // 120
// 5*4*3*2*1
// factorial(5) = 5*factorial(4) //120
// factorial(4) = 4*factorial(3) //24
// factorial(3) = 3*factorial(2) //6
// factorial(2) = 2*factorial(1) //2
// factorial(1)=1
```
每当一个函数被一个算法调用时，该函数会进入调用栈的顶部。当使用递归的时候，每个函数调用都会堆叠在调用栈的顶部，这是因为每个调用都可能依赖前一个调用的结果。

2. 斐波那契数列
> 定义: ❑ 位置0的斐波那契数是零。
> ❑ 1和2的斐波那契数是1。
> ❑ n（此处n > 2）的斐波那契数是（n -1）的斐波那契数加上（n -2）的斐波那契数。 

使用迭代实现
```javascript
    function fibonacciIterative(n) {
      if (n < 1) return 0;
      if (n <= 2) return 1;

      let fibNMinus2 = 0;
      let fibNMinus1 = 1;
      let fibN = n;
      for (let i = 2; i <= n; i++) { // n >= 2
        fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
      }
      return fibN;
    }
```
使用递归实现
```javascript
    function fibonacci(n){
      if (n < 1) return 0; // {1}
      if (n <= 2) return 1; // {2}
      return fibonacci(n -1) + fibonacci(n -2); // {3}
    }
```
记忆化斐波那契数
```javascript
    function fibonacciMemoization(n) {
    const memo = [0, 1]; // 声明了一个memo数组来缓存所有的计算结果
    const fibonacci = (n) => {
        if (memo[n] != null) return memo[n]; // 如果结果已经被计算了，我们就返回它
        return memo[n] = fibonacci(n -1, memo) + fibonacci(n -2, memo); // 否则计算该结果并将它加入缓存
    };
    return fibonacci;
}
```

迭代的版本比递归的版本快很多，所以这表示递归更慢。但是，再看看三个不同版本的代码。递归版本更容易理解，需要的代码通常也更少。另外，对一些算法来说，迭代的解法可能不可用，而且有了尾调用优化，递归的多余消耗甚至可能被消除。所以，我们经常使用递归，因为用它来解决问题会更简单。