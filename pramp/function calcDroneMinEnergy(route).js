/*
input:  route = [ [0,   2, 10],
                  [3,   5,  0],
                  [9,  20,  6],
                  [10, 12, 15],
                  [10, 10,  8] ]
                  
1 kWh burns for 1 mile ascends
gains 1 kWh for every mile descends 
route 
function calcDroneMinEnergy 
3D point represented as an integer array lentgh=3
0,1,2 = x,y,z = 3D 

output: 5 # less than 5 kWh and the drone would crash before the finish
          # line. More than `5` kWh and it’d end up with excess energy
*/

/*function calcDroneMinEnergy(route) {
  // your code goes here
} */
  
    

/*Drone Flight Planner
Since the drone only expends/gains energy when it flies up and down, we can ignore the x and y coordinates and focus only on the altitude - the z coordinate.

We should come up with the initial energy amount needed to enable the flight. In other words, at any given point in route, the drone’s level of energy balance mustn’t go below zero. Otherwise, it’ll crash.

The basic solution
Imagine that you start the flight with an empty battery, but can charge the drone while it’s in the air.

In this case, your charging algorithm is simple. Just before your drone flies to the next point in route, you calculate whether the drone will incur any energy deficit. If so, you charge the drone with the exact amount of energy that will ensure that the energy level at the next is point is precisely zero. Otherwise, you don’t charge the drone. With this algorithm, the answer is simply the largest energy deficit you’ve encountered during the drone’s flight.

Applying this algorithm on the example provided above will show that the largest deficit occurs when the drone climbs from coordinate z = 6 to coordinate z = 15. Notice that at z = 6 the energy balance is +4. So climbing from 6 to 15 will bring the energy balance to 4 - (15 - 6) = -5. The largest deficit is therefore 5 which is also the minimal amount of energy the drone will need at the beginning of its flight to be able to finish it.

Pseudocode: /

function calcEnergyBasic(route):
    largestEnergyDeficit = 0
    energyBalance = 0

    for i from 1 to route.length-1:
        energyBalance = energyBalance + (route[i-1][2] - route[i][2])
            if (energyBalance < largestEnergyDeficit):
                largestEnergyDeficit = energyBalance

    return -1*(largestEnergyDeficit)
Time Complexity: Linear, or said differently O(N). We have a single loop that iterates once over route and conducts a constant number of operations at each iteration.

Space Complexity: O(1). We are using two auxiliary variables, largestEnergyDeficit and energyBalance, to reach to our solution. Both use only a constant amount of space.

The more elegant solution
This solution is based on one observation: the initial energy level is what it takes the drone to climb from the start point to the highest (max) point in its route.

Getting to any altitude below the starting altitude produces energy, and going above it consumes at most the difference between the max altitude and the starting altitude.

Even if we descend before climbing to the max altitude, by ascending back to the same altitude as the starting altitude, our balance is zero and we then need more energy to climb from the starting altitude to the max altitude.*/

function calcEnergyBasic(route){
    largestEnergyDeficit = 0;
    energyBalance = 0;

    for (i=1; i<route.length-1;i++){
        energyBalance = energyBalance + (route[i-1][2] - route[i][2]);
            if (energyBalance < largestEnergyDeficit){
                largestEnergyDeficit = energyBalance;

    return -1*(largestEnergyDeficit);
  } 
 }
}  
/*Time Complexity: O(N). We have a single loop that iterates once over route and conducts a constant number of operations at each iteration.

Space Complexity: O(1). We are using only one auxiliary variable in the algorithm, maxHeight, and it uses a constant amount of space.
    
/* 
If your peer is having a hard time, help them focus by getting the x and y coordinates out of the way. The z coordinate (i.e. the altitude) is the only coordinate that matters.

If your peer is still stuck, ask them the calculate manually the solution for the example. Ask whether they can then generalize the approach they used to an algorithm.

A common mistake is to assume that the solution is a simple summation over all the differences between the z coordinates of consecutive points, i.e. 
∑
n
−
2
i
=
0
(
Z
i
−
Z
i
+
1
)
 where Zi is the z coordinate of Point Pi in route. For instance, for the example above, this approach will return 2 (kWh) as an answer. However, the correct answer is 5 (kWh).
 
 Another common mistake is to calculate the difference between the max and min altitudes of the drone’s route. Try to figure out why this approach is incorrect.
 
If still no progress, ask you peer to think of the net impact on the energy stored in the drone each time the drone crosses the starting altitude - either from above or from below. In the end, most energy gains and losses cancel each out due to these crosses. That means that for the solution only two points in route matter. One such point is clearly the starting point. Can you think of the other point that matters?
*/