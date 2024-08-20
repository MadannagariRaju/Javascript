// JavaScript Cookies
// Cookies are small strings of data stored directly in the browser
// In javascript, document.cookie provides access to cookies

// Cookies are set by a web server using the set-cookie HTTP-header. Next time when the request is sent to the same domain, the browser sends the cookie using the cookie HTTP - header.
// That way the server knows who sent the request

// We can also access cookies using document.cookie property:
//  alert(document.cookie)
//                |  
//           contains key = value pairs delimited by a;

alert(document.cookie);

// Writing to cookie
// An assignment to document.cookie is treated specially in a way that a write operation doesn't touch other cookies

document.cookie = "user = Raju";  // updates only cookie named user to Harry
document.cookie = "user = Nandu";  // updates only cookie named user to Harry
alert(document.cookie)
console.log(document.cookie)

// encodeURIComponent
// This function helps keep the valid formatting. It is used like this:
// document.cookie = encodeURIComponent(key)+'='+encodeURIComponent(value);
// This way the special characters are encoded


// let key = prompt("enter the key");
// let value = prompt("enter the value");
// document.cookie = `${(key)} = ${(value)}`
// console.log(document.cookie)


// If you don't use encodeURIComponent when setting the cookie, any special characters in the key or value might cause issues or unexpected behavior. Here's what could happen:

// Special Characters in Key:

// Some characters, like spaces, semicolons (;), commas (,), and others, are not allowed in cookie names. If you try to set a cookie with such characters in the key, the browser may ignore the cookie, truncate it, or misinterpret it.

// Special Characters in Value:

// The value may be misinterpreted by the browser. For example, if the value contains a semicolon (;), the browser might think it marks the end of the cookie, leading to incorrect cookie data.
// Characters like @, #, =, or $ might be misinterpreted, causing the cookie to be incorrectly set or read.



let key = prompt("enter the key");
let value = prompt("enter the value");
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)

//  decodeURIComponent

//  a%3B%3B%3B%3B%3B%3B%3B%3B%3B%3B = ksadfjjsd

//  decodeURIComponent(key)
//  decodeURIComponent('a%3B%3B%3B%3B%3B%3B%3B%3B%3B%3B')

//  decodeURIComponent('a%3B%3B%3B%3B%3B%3B%3B%3B%3B%3B')
// 'a;;;;;;;;;;'


// Cookie options
// Cookies have several options which can be provided after key = value to a set call like this:


// document.cookie = "jaggu = bhai ; path=/a; expires = Tue, 29 March 2024 03:18:22 GMT"
// path option makes the cookie visible at /a , /a/b etc. expires sets the cookie expiration time


// NOTE:
// 1. The name = value pair, after encodeURIComponent, should not exceed 4KB
// 2.Total no of cookies per domain is limited to around 20+ (Exact number is browser dependent)