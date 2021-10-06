import os
from gtts import gTTS


FLIST = open("file.txt", "r").read().replace("\n", " ")

print("please wait...processing")
TTS = gTTS(text=str(FLIST), lang='en-uk',slow=False)


TTS.save("voice.mp3")


print(FLIST)
os.system("start voice.mp3")