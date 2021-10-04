#include <iostream>

using namespace std;

int main(){
    string str;cin>>str;
    int key,size=str.size();cin>>key;
    for(int i=0;i<size;i++){
        str[i]+=key;
        if((int)str[i]>122){
            str[i]=96+str[i]%122;
        }
    }
    cout<<str<<endl;
}
