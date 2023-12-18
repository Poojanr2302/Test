let word=prompt('Enter the value')
rev_word=word.split('').reverse('').reverse('')
if(rev_word==word){
    console.log('It is a Palindrome')
}
else{
    console.log('It is not a Palindrome')
}