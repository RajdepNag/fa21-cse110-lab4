1. console.log(i) outputs '3'. This is because i is a 'var' variable and is defined inside its entire block which in this case is the function itself. The size of the array 'Prices' is 3 and so after 3 iterations i becomes 3 causing the loop to end and that's why 'i's final value is 3.
2. Output is '150' for line 13. Similar to 'i' 'discountedPrice is also a 'var' variable and hence it's scope is the entire function. It's last value is for discountPrices[2] which is 300. Therefore, it would be = 300 * (1 - 0.5) = 150 which is the output we get at line 13.
3. Output is '150' for line 14. ; 'finalPrice' is also a 'var' variable and hence it's scope is the entire function. Its last value is '150' in the iterative loop and that's why it's the output for line 14.
4. The function returns the discounted array which we defined at the top of the function. It stores the finalPrice for each prices[i] after discount. 
5. There is an error thrown at line 12 because the variable i is out of scope and is not defined. This is because it is  a 'let' variable and is only defined in its block which is the for loop and the console call at line 12 is outside the loop.
6. There is an error thrown at line 13 because the variable discountedPrice is out of scope and is not defined. This is because it is  a 'let' variable and is only defined in its block which is the for loop and the console call at line 13 is outside the loop.
7. The output at line 14 is 150. This is because finalPrice is defined at the top of the function and hence its scope is the entire function including the console calls. 
8. The function would return the same array as in Question 4. All the variables are defined in their scopes and no errors are thrown and hence the function would return the array of the discounted prices related to each price in the 'prices' argument. 
9. Line 11 throws an error because the variable i is not defined as it is out of scope. It's a 'let' variable and is only defined in ins block which is the for loop and the console call at line 11 is outside the loop.
10. The output at line 13 is 3. lenth is a 'const' variable and so only takes the value it is initialized with. In the case that is the length of the array which is at a constant length 3. 
11. The function doesn't throw any errors because the variables are all inside their scope. The elements of discounted are never reassigned values which would throw an error as it is a const array. Similarly discountedPrice is redfined on every iteration and never resassigned a value after initialization.
12. A. student.name <br />
    B. student['Grad Year']<br />
    C. student.greeting()<br />
    D. student['Favorite Teacher'].name<br />
    E. student.courseLoad[0]<br />
13. A. '32' - 2 is mapped to it's string representation and the output will be the string '32'<br />
    B. 1 - '3' is mapped to its integer value 3.<br />
    C. 3 - null is mapped to its integer value 0.<br />
    D. '3null' - null is mapped to its string value 'null' and concatenate<br />
    E. 4 - true is mapped to its integer value 1.<br />
    F. 0 - false and null are both mapped to their integer values 0.<br />
    G. '3undefined' - undefined is converted into a string 'undefined'<br />
    H. NaN - undefined has no integral mapping so the output is just 'Not a Number'<br />
14. A. true - '2' becomes 2 which is greater than 1.<br />
    B. false - the first element of the strings are '2' and '1' and as '2' is greater than '1' alphanumerically it returns false.<br />
    C. true - '2' is mapped to integral value 2.<br />
    D. false - === is a strict equality check and as '2' and 2 are of different types it's false.<br />
    E. false - 'true' is mapped to 1 which is not equal to 2.<br />
    F. true - Boolean(2) is 'true' which is strictly equal to 'true'<br />
15. '==' checks for equality with type conversion. '===' checks for equality without type conversion and hence checks if 2 values are equal in terms of both type and value.
17. Here the function 'doSomething' is the callback function. When i is 0. newArr[0] gets assigned 2 as callback(array[0])(which is callback(1) calls the function doSomething which simply doubles the input parameter. So 2 gets pushed into newArr[0]. Next, when i = 1 callback(array[1] -> 2) is pushed into newArr[1] which is just  2 * 2 = 4. Lastly, array[2] -> 3 is doubled and pushed into newArr[2]. Therefore the resulting newArr is just [2,4,6].
19. 1<br />
    4<br />
    3<br />
    2<br />



