// -> Define an object called 'Robot'
// -> Define a method called 'new' in Robot
// -> When Robot.new is called is should return a new object with the prototype 
//    set to Robot
var Robot = {
}

Robot.new = function() {
  return Object.create(this)
}

module.exports = {
	Robot: Robot
}
