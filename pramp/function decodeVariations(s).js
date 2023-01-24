//silviatofana 0040760889756
//https://www.linkedin.com/in/abdelrahman-adel7/

function decodeVariations(s) {
	/**
	@param S: string
	@return: integer
	*/
 /* input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'.
Constraints:

[time limit] 5000ms

[input] string S

1 ≤ S.length ≤ 12
[output] integer */

	// your code goes here
  if (!s.length || s[0] == '0') 
    return 0;
  //r2: decode ways of s[i-2], r1:decode ways of s[i-1]
  var r1 = 1, r2 = 1;
  
  for (var i = 1; i < s.length; i++) {
    //zero voids ways of the last because zero cannot be used separately
    if (s[i] == '0') r1 = 0;
    // possible two-digit letter, so new r1 is sum of both while r2 is the old r1
    
    if (s[i - 1] == '1' || s[i - 1] == '2' && s[i] <= '6') {
      r1 = r2 + r1;
      r2 = r1 -r2;
    }
 
    // one digit letter, no new way added 
    
    else {
      r2 = r1;
    }
  }
   return r1 ;
  
}

200