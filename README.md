![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Javascript Lab: Caesar Cipher

## Objectives

By the end of this, students should be able to:

- Use the module pattern in solving a problem
- Write Jasmine tests to drive their solution

## Instructions

1. Fork and clone.
1. `npm install`
1. `bower install`
1. Follow instructions below.

## Ceasar Cipher

> In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. The method is named after Julius Caesar, who used it in his private correspondence. Source: [Caesar cipher - Wikipedia, the free encyclopedia](http://en.wikipedia.org/wiki/Caesar_cipher)

We're going to implement a simple Caesar Cipher called ROT13 ("rotate by 13 places"). The transformation can be represented by aligning two alphabets:

```
Plain:    abcdefghijklmnopqrstuvwxyz
Cipher:   nopqrstuvwxyzabcdefghijklm
```

ROT13 is its own inverse; that is, to undo ROT13, the same algorithm is applied, so the same action can be used for encoding and decoding. The algorithm provides virtually no cryptographic security, and is often cited as a canonical example of weak encryption. ROT13 is used in online forums as a means of hiding spoilers, punchlines, puzzle solutions, and offensive materials from the casual glance.

## Try It

1. Plan using the whiteboard for 15 minutes.
1. Implement your `ROT13Cipher` module using the module pattern. Test drive your code using Jasmine.
1. You should implment a method `.encode` that takes a single word as an argument and returns the encrypted text. You should be able to use your code like this:

    ```js
    var cipher = ROT13Cipher();
    cipher.encode('hello'); //=> 'uryyb' 
    cipher.encode('jeff'); //=> 'wrss'
    ```

1. Implement a `.decode` method that takes an encrypted word as an argument and returns the unencrypted text.

## Bonus

First, change your cipher so that it can take a string with spaces, allowing you to encode and decode entire sentences, not just words.

Next, Implement a ROT25 cipher. You should implement both `.ecnode` and `.decode` methods. Test drive your solution, and use the module pattern.

```
Plain:    abcdefghijklmnopqrstuvwxyz
Cipher:   zabcdefghijklmnopqrstuvwxy
```

If you've correctly implemented the cipher, using it should transform the message "hello" into "gdkkn".

**Very Challenging**: Finally, implement a cipher that takes a number between one and twenty-five as a parameter when it is instantiated. This number `n` will be used to rotate the alphabet by `n` places. For example, if you instantiate your cipher with 13, you should get the same results as the in-class lab. Use [ROT-n Rotation Encryption online](http://www.rot-n.com/) to build your test strings for each potential input.

## Additional Resources

- [Caesar cipher - Wikipedia, the free encyclopedia](http://en.wikipedia.org/wiki/Caesar_cipher)
- [ROT-n Rotation Encryption online - The Caesar Cipher and other rotation ciphers](http://www.rot-n.com/)
