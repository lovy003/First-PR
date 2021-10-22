# Python3 code to demonstrate
# to count words in a sentence

# initializing string
sentence = input("Enter your sentence here: ")

# printing original string
print ("The original string is : " + sentence)

# using split()
# to count words in string
res = len(sentence.split())

# printing result
print ("The number of words in the given sentence are : " + str(res))
