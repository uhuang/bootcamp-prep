function allSystemsGo(systems) {
  for (let key in systems) {
    let value = systems[key]; // value could be a boolean or another object

    // if value is another systems object
    if (typeof value === 'object') {

      // check recursively check if its systems are go
      let subsystemsGo = allSystemsGo(value);

      // if the subsystems aren't good to go, return false and abort the launch! bummer!
      if (!subsystemsGo) {
        return false;
      }
    }

    // else, the value must be boolean; if it's false, return false and abort the launch! bummer!
    if (!value) {
      return false;
    }
  }

  // if we made it all the way through the loop without finding a false, then put on your space shorts
  // because all systems are go!
  return true;
}
