from textblob import TextBlob
n=int(input("ENter the number of word you want to correct="))
mylist=[]
for i in range(n):
    print(i+1,end=". ")
    str=input()
    mylist.append(str)
corrected_list=[]
for word in mylist:
    corrected_list.append(TextBlob(word))
print("corrected list words are:")
for word in corrected_list:
    print(word.correct(),end=" ")

