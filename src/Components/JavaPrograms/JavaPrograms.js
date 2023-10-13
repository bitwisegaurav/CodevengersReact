import React from 'react';
import '../css/javaprograms.css'

function Programs(props){
    return <a href='/' className="program">{props.no}. {props.title}</a>
}

export default function JavaPrograms() {
  return (
    <main id='javaprogram-main'>
      <div className="cont">
        <h1 className="heading">Java Programs</h1>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button id="search">Search</button>
        </div>

        <div className="content">
          <div className="programs">
            { programs.map(program => <Programs no={program.no} title={program.title} />) }
          </div>
        </div>
      </div>
    </main>
  )
}


let programs = [
    {
        no: 1, 
        title: 'Write a Java program to print "Hello World!" on screen'
    },
    {
        no: 2, 
        title: 'Write a Java program to print the sum of two numbers'
    },
    {
        no: 3, 
        title: 'Write a Java program that takes two numbers and display the product of two numbers'
    },
    {
        no: 4, 
        title: 'Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers'
    },
    {
        no: 5, 
        title: 'Write a Java program that takes five numbers as in…to calculate and print the average of the numbers'
    },
    {
        no: 6, 
        title: 'Write a Java program to swap two variables'
    },
    {
        no: 7, 
        title: 'Write a Java program to convert a decimal number to binary numbers'
    },
    {
        no: 8, 
        title: 'Write a Java program to convert a binary number to decimal number'
    },
    {
        no: 9, 
        title: 'Write a Java program to check whether Java is installed on your computer or not'
    },
    {
        no: 10, 
        title: 'Write a Java program and compute the sum of the digits of an integer'
    },
    {
        no: 11, 
        title: 'Write a Java program to compare two numbers'
    },
    {
        no: 12, 
        title: 'Write a Java program to count the letters, spaces, numbers and other characters of an input string'
    },
    {
        no: 13, 
        title: 'Write a Java program to print the ascii value of a given character'
    },
    {
        no: 14, 
        title: 'Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn'
    },
    {
        no: 15, 
        title: 'Write a Java program to display the system time'
    },
    {
        no: 16, 
        title: 'Write a Java program to print the odd numbers from 1 to 20'
    },
    {
        no: 17, 
        title: 'Write a Java program to print the even numbers from 1 to 20'
    },
    {
        no: 18, 
        title: 'Write a Java program to convert a string to an integer'
    },
    {
        no: 19, 
        title: 'Write a Java program to convert seconds to hour, minute and seconds'
    },
    {
        no: 20, 
        title: 'Write a Java program to compute the sum of the first 100 prime numbers'
    },
    {
        no: 21, 
        title: 'Write a Java program to swap the first and last elements of an array and create a new array'
    },
    {
        no: 22, 
        title: 'Write a Java program to count the number of even and odd elements in a given array'
    },
    {
        no: 23, 
        title: 'Write a Java program to compute the square root of an given integer'
    },
    {
        no: 24, 
        title: 'Write a Java program to check if a positive number is a palindrome or not'
    },
    {
        no: 25, 
        title: 'Write a Java program to add two numbers without using any arithmetic operators'
    },
    {
        no: 26, 
        title: 'Write a Java program to add all the digits of a given positive integer'
    },
    {
        no: 27, 
        title: 'Java program to find area of circle'
    },
    {
        no: 28, 
        title: 'Java Program to find area of rectangle'
    },
    {
        no: 29, 
        title: 'Java Program to find area of triangle'
    },
    {
        no: 30, 
        title: 'Java Program to find area of equilateral triangle'
    },
    {
        no: 31, 
        title: 'Java Program to find area of rhombus'
    },
    {
        no: 32, 
        title: 'Java Program to find area of parallelogram'
    },
    {
        no: 33, 
        title: 'Java Program to find area of Prism'
    },
    {
        no: 34, 
        title: 'Java Program to find volume of sphere'
    },
    {
        no: 35, 
        title: 'Java Program to find volume of cylinder'
    },
    {
        no: 36, 
        title: 'Java Program to find volume of cuboid'
    },
    {
        no: 37, 
        title: 'Java Program to find volume of cone'
    },
    {
        no: 38, 
        title: 'Java program to find surface area of cuboid'
    },
    {
        no: 39, 
        title: 'Java program to find surface area of cylinder'
    },
    {
        no: 40, 
        title: 'Java program to find surface area of cube'
    },
    {
        no: 41, 
        title: 'Java program to calculate average marks'
    },
    {
        no: 42, 
        title: 'Java program to check vowel or consonant'
    },
    {
        no: 43, 
        title: 'Java program to sum of N numbers'
    },
    {
        no: 44, 
        title: 'Java program to find factorial of any number'
    },
    {
        no: 45, 
        title: 'Java Program to calculate electricity bill'
    },
    {
        no: 46, 
        title: 'Java Program To Calculate CGPA Percentage'
    },
    {
        no: 47, 
        title: 'Java Program to calculate compound interest'
    },
    {
        no: 48, 
        title: 'Java Program To Calculate Batting Average'
    },
    {
        no: 49, 
        title: 'Java Pogram to Calculate Commission Percentage'
    },
    {
        no: 50, 
        title: 'Java Pogram To Find Distance Between Two Points'
    },
    {
        no: 51, 
        title: 'Java Program To Calculate Power Of Number'
    },
    {
        no: 52, 
        title: 'Write a Java program to take three numbers from the user and print the greatest number'
    },
    {
        no: 53, 
        title: 'Write a Java program to find the number of days in a month'
    },
    {
        no: 54, 
        title: 'Write a Java program to test a number is positive or negative'
    },
    {
        no: 55, 
        title: 'Write a Java Program to accept number of week’s day (1-7) and print name of the day'
    },
    {
        no: 56, 
        title: 'Write a Java program that takes a year from user and print whether that year is a leap year or not'
    },
    {
        no: 57, 
        title: 'Write a Java program to input 5 numbers from keyboard and find their sum and average'
    },
    {
        no: 58, 
        title: 'Write a program in Java to display the first 5 natural numbers'
    },
    {
        no: 59, 
        title: 'Write a java program to check vowel or consonant'
    },
    {
        no: 60, 
        title: 'Write a Java program to display the cube of the number upto given an integer'
    },
    {
        no: 61, 
        title: 'Write a Java program to display the n terms of odd natural number and their sum'
    },
    {
        no: 62, 
        title: 'Write a Java program to display the multiplication table of a given integer'
    },
    {
        no: 63, 
        title: 'Write a Java program that reads an integer and check whether it is negative, zero, or positive'
    },
    {
        no: 64, 
        title: 'Write a Java program that reads an positive integer and count the number of digits'
    },
    {
        no: 65, 
        title: 'Write a Java program that accepts three numbers and check All numbers are equal or not'
    },
    {
        no: 66, 
        title: 'Write a java program that accepts three numbers fr…umbers are in “increasing” or “decreasing” order.'
    },
    {
        no: 67, 
        title: 'Write a Java program that determines a student’s grade'
    },
    {
        no: 68, 
        title: 'Write a Java program to create a simple calculator'
    },
    {
        no: 69, 
        title: 'Write a Java program to concatenate two string'
    },
    {
        no: 70, 
        title: 'Write a Java program to convert all characters in a string to lowercase'
    },
    {
        no: 71, 
        title: 'Write a Java program to convert all characters in a string to uppercase'
    },
    {
        no: 72, 
        title: 'Write a Java program to trim a string(remove whitespaces)'
    },
    {
        no: 73, 
        title: 'Write a Java program to get a substring of a given string between two specified positions'
    },
    {
        no: 74, 
        title: 'Write a Java program to replace all the ‘d’ characters with ‘f’ characters'
    },
    {
        no: 75, 
        title: 'Write a java program to get the length of a given string'
    },
    {
        no: 76, 
        title: 'Write a java program to print current date and time in the specified format'
    },
    {
        no: 77, 
        title: 'Write a Java program to get the character at the given index within the String'
    },
    {
        no: 78, 
        title: 'Write a java program to remove a particular character from a string'
    },
    {
        no: 79, 
        title: 'Write a java program to reverse a String'
    },
    {
        no: 80, 
        title: 'Write a java program to remove html tags from a string'
    },
    {
        no: 81, 
        title: 'Write a java program to count total number of lines from a string'
    },
    {
        no: 82, 
        title: 'Write a Java program to sum values of an array'
    },
    {
        no: 83, 
        title: 'Write a Java program to find the index of an array element'
    },
    {
        no: 84, 
        title: 'Write a Java program to calculate the average value of array elements'
    },
    {
        no: 85, 
        title: 'Write a Java program to test if an array contains a specific value'
    },
    {
        no: 86, 
        title: 'Write a Java program to find the maximum and minimum value of an array'
    },
    {
        no: 87, 
        title: 'Write a Java program to insert an element (specific position) into an array'
    },
    {
        no: 88, 
        title: 'Write a Java program to reverse an array of integer values'
    },
    {
        no: 89, 
        title: 'Write a Java program to find the common elements between two arrays'
    },
    {
        no: 90, 
        title: 'Write a Java program to find the duplicate values of an array of integer values'
    },
    {
        no: 91, 
        title: 'Write a Java program to convert an array to ArrayList'
    },
    {
        no: 92, 
        title: 'Write a Java program to add two matrices of the same size'
    },
    {
        no: 93, 
        title: 'Write a Java program to find second largest number from the array'
    },
    {
        no: 94, 
        title: 'Write a Java program to find second lowest number from the array'
    },
    {
        no: 95, 
        title: 'Write a Java program to find the number of even and odd integers in a given array of integers'
    },
    {
        no: 96, 
        title: 'Write a Java program to get the difference between…rgest and smallest values in an array of integers'
    },
    {
        no: 97, 
        title: 'Write a Java program to segregate all 0s on left s…ll 1s on right side of a given array of 0s and 1s'
    },
    {
        no: 98, 
        title: 'Write a Java program to cyclically rotate a given array clockwise by one'
    },
    {
        no: 99, 
        title: 'java program to print all unique element in an array'
    },
    {
        no: 100, 
        title: 'Write a Java Program to Sort the Array in an Ascending Order'
    },
    {
        no: 101, 
        title: 'Write a Java Program to Sort the Array in an Descending Order'
    },
    {
        no: 102, 
        title: 'Write a Java Program to Sort Names in an Alphabetical Order'
    },
    {
        no: 103, 
        title: 'Write a Java Program to Display Transpose Matrix'
    },
    {
        no: 104, 
        title: 'Write a Java Program to Search Key Elements in an Array'
    },
    {
        no: 105, 
        title: 'Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage'
    },
    {
        no: 106, 
        title: 'Write a java program to print numbers from 1 to 10 using loop'
    },
    {
        no: 107, 
        title: 'Write a java program to calculate the sum of first 10 natural number using loop'
    },
    {
        no: 108, 
        title: 'Write a Java program to print multiplication table of given number'
    },
    {
        no: 109, 
        title: 'Write a Java program to find the factorial value of any number entered through the keyboard'
    },
    {
        no: 110, 
        title: 'Write a Java program that prompts the user to inpu…outputs the number with the digits reversed order'
    },
    {
        no: 111, 
        title: 'Write a Java program that reads a set of integers,…s the sum of the even and odd integers using loop'
    },
    {
        no: 112, 
        title: 'Write a Java program to check whether the number is a prime number or not'
    },
    {
        no: 113, 
        title: 'Write a Java program to calculate HCF of Two given numbers using loop'
    },
    {
        no: 114, 
        title: 'Write a Java program to enter the numbers till the…display the count of positive, negative and zeros'
    },
    {
        no: 115, 
        title: 'Write a Java program to enter the numbers till the… display the largest and smallest numbers entered'
    },
    {
        no: 116, 
        title: 'Write a Java program to print out all Armstrong numbers between 1 to 600 using loop'
    },
    {
        no: 117, 
        title: 'Write a java program to count total number of notes in entered amount using loop'
    },
    {
        no: 118, 
        title: 'Write a Java program to print Fibonacci series of n terms where n is input by user using loop'
    },
    {
        no: 119, 
        title: 'Write a java program to calculate the sum of following series where n is input by user'
    },
    {
        no: 120, 
        title: 'Write a Java method to compute the average of three numbers'
    },
    {
        no: 121, 
        title: 'Write a Java method to find the smallest number among three numbers'
    },
    {
        no: 122, 
        title: 'Write a Java method to count all words in a string'
    },
    {
        no: 123, 
        title: 'Write a Java method to count all vowels in a string'
    },
    {
        no: 124, 
        title: 'Write a Java method to compute the sum of the digits in an integer'
    },
    {
        no: 125, 
        title: 'Write a Java method to check whether an year entered by the user is a leap year or not'
    },
    {
        no: 126, 
        title: 'Write a Java method to calculate the area of a triangle'
    },
    {
        no: 127, 
        title: 'Write a Java method to find the area of a pentagon'
    },
    {
        no: 128, 
        title: 'Write a Java method to find number is even number or not'
    },
    {
        no: 129, 
        title: 'Write a Java method to check numbers is palindrome number or not'
    },
    {
        no: 130, 
        title: 'Write a Java method to displays prime numbers between 1 to 20'
    },
    {
        no: 131, 
        title: 'Write a Java method to find GCD and LCM of Two Numbers'
    },
    {
        no: 132, 
        title: 'Write a Java method to find factorial using recursion in java'
    },
    {
        no: 133, 
        title: 'Write a Java program to reverse an integer number'
    },
    {
        no: 134, 
        title: 'Write a Java program to round a float number to specified decimals'
    },
    {
        no: 135, 
        title: 'Write a Java program to test if a double number is an integer'
    },
    {
        no: 136, 
        title: 'Write a Java program to round up the result of integer division'
    },
    {
        no: 137, 
        title: 'Write a Java program to convert Roman number to an integer number'
    },
    {
        no: 138, 
        title: 'Write a Java program to convert a float value to absolute value'
    },
    {
        no: 139, 
        title: 'Write a Java program to accept a float value of number and return a rounded float value'
    },
];