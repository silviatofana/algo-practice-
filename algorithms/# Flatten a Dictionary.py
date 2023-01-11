# Flatten a Dictionary
# A recursion is natural choice for this kind of problem. We iterate over the keys in dict and distinguish between two cases: If the value mapped to a key is a primitive, we take that key and simply concatenate it to the flattened key we created up to this point. We then map the resultant key to the value in the output dictionary. If the value is a dictionary, we do the same concatenation, but instead of mapping the result to the value in the output dictionary, we recurse on the value with the newly formed key.

# Pseudocode:

# function flattenDictionary(dict):
#     flatDictionary = {}
#     flattenDictionaryHelper("", dict, flatDictionary)

#     return flatDictionary


# function flattenDictionaryHelper(initialKey, dict, flatDictionary):
#     for (key : dict.keyset()):
#         value = dict.get(key)

#         if (!isDictionary(value)): # the value is of a primitive type
#             if (initialKey == null || initialKey == ""):
#                 flatDictionary.put(key, value)
#             else:
#                 flatDictionary.put(initialKey + "." + key, value)
#         else:
#             if (initialKey == null || initialKey == "")
#                 flattenDictionaryHelper(key, value, flatDictionary)
#             else:
#                 flattenDictionaryHelper(initialKey + "." + key, value, flatDictionary)
# Time Complexity: O(N), where N is the number of keys in the input dictionary. We visit every key in dictionary only once, hence the linear time complexity.

# Space Complexity: O(N) since the output dictionary is asymptotically as big as the input dictionary. We also store recursive calls in the execution stack which in the worst case scenario could be O(N), as well. The total is still O(N).
# '''

# case:
#   input = {}
#   output = {}
  
# dict = {
#             "Key1" : "1",
#             "Key2" : {
#                 "a" : "2",
#                 "b" : "3",
#                 "c" : {
#                     "d" : "3",
#                     "e" : {
#                         "" : "1"
#                     }
#                 }
#             }
#         }
        
      
#       {
#                 "a" : "2",
#                 "b" : "3",
#                 "c" : "3"
                
#             dict = {
#                 "a" : "2",
#                 "b" : "3",
#                 "c" : "3"
#             }
            
            
            
          
# dict = {
#             "Key1" : "1",
#             "Key2.a":"2",
#             "Key2.b":"3",
#             "Key2.c":"3"
#         }
        
# naive idea:
#   iterate over keys
  
#   if key --> value is a dictionary
#     flat_dictionary = recurse(dict[key])
#     iterate over this flat dictionary and append a . between the key's
#   else:
#     add key value to result dictionary

#   return result

# n = dictionary.length
# m = number of nested dictionary
# time = O(n^m)
# space = O(m)
# '''

def flatten_dictionary(dictionary):
  # TODO base case
  result = {}
  for key in dictionary:
    
    if type(dictionary[key]) is dict:
      flattened = flatten_dictionary(dictionary[key])
      for flat_key in flattened:
        if flat_key == "":
          result[key] = flattened[flat_key]
        elif key == "":
          result[flat_key] = flattened[flat_key]
        else:
          result[key + "." + flat_key] = flattened[flat_key]
    else:
      result[key] = dictionary[key]
  
  return result
    
    
