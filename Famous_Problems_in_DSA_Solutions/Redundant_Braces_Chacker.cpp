#include<iostream>
#include "vector"
#include "stack"
#include<algorithm>
using namespace std; 
int main(int argc, char *argv[])
{
	string s; cin>>s;
	stack<char> st;
	bool ans = false;
	for(int i=0; i<s.size(); i++){
		if(s[i] == '+' or s[i] == '-' or s[i] == '/' or s[i] == '*'){
			st.push(s[i]);
		}else if (s[i] == '('){
			st.push(s[i]);
		}else if(s[i] == ')'){
			if(st.top() == '('){
				ans = true;
			}
			while(s[i] == '+' or s[i] == '-' or s[i] == '/' or s[i] == '*' ){
				st.pop();
			}
			st.pop();
		}
	}
	cout<<ans;
}
