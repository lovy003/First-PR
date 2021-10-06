from gtts import gTTS
import os
tts=gTTS(text="Hello World",lang="en")
tts.save("hello.mp3")
os.system("start hello.mp3")