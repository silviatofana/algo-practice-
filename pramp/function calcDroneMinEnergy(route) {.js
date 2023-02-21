function calcDroneMinEnergy(route) {
    let maxAltitude = route[0][2];
    let initialAltitude = route[0][2];
    
    for (let i = 1; i < route.length; i++) {
      const altitude = route[i][2];
      maxAltitude = Math.max(maxAltitude, altitude);
      initialAltitude = Math.min(initialAltitude, altitude);
    }
    
    const energy = maxAltitude - initialAltitude;
    
    return energy >= 0 ? energy : Math.abs(energy);
  }