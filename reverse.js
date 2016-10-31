// Create a function that reverses string

// go through each character in the string, re-assign the indexes
// in terms of other indexes

function reverse(string) {
 var newString = ""
 for (var i = string.length - 1; i > -1; i --){
  newString = newString + string[i]
 }
 return newString
}
var args = process.argv.splice(2)

// create a function that loops through the process.argv array
// and calls reverse for each of them
var reversed_list = []
function list_reverse (arguments) {
  for (var i = 0; i < arguments.length; i++) {
    var reversed_string = reverse(arguments[i])
    reversed_list.push(reversed_string)
  }
  return reversed_list
}

console.log(list_reverse(args))