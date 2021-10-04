text = input("Enter your text: ")

text_li = text.split()

mini_sents = []
maxi_sents = []
mini = len(text_li[0])
maxi = len(text_li[-1])


for i in range(0,len(text_li)):
	if len(text_li[i]) < mini:
		mini = len(text_li[i])
		mini_sents = [text_li[i]]
		
	elif len(text_li[i]) > maxi:
		maxi = len(text_li[i])
		maxi_sents = [text_li[i]]
		
	elif len(text_li[i]) == mini:
		mini_sents.append(text_li[i])
			
	elif len(text_li[i]) == maxi:
		maxi_sents.append(text_li[i])

	
print('Minimum length words are:',mini_sents)

print('Maximum length words are:',maxi_sents)

