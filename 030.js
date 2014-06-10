// -> Define three objects: 'machine' 'vehicle' and 'robot'
// -> Make machine the prototype of vehicle
// -> Make machine the prototype of robot
var machine = {}
  , vehicle = {}
  , robot = {}

vehicle.__proto__ = machine
robot.__proto__ = machine

// What is vehicle.motors?
// -> Claim the result of vehicle.motors
claim(vehicle.motors, undefined);

// What is robot.motors?
// -> Claim the result of robot.motors
claim(robot.motors, undefined);

// -> Define a 'motors' property on machine, set this to 4
machine.motors = 4

// What is vehicle.motors?
// -> Claim the result of vehicle.motors again
claim(vehicle.motors, 4);

// What is robot.motors?
// -> Claim the result of robot.motors again
claim(robot.motors, 4);

module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
