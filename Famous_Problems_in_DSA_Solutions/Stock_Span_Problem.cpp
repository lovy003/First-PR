#include<iostream>
#include "vector"
#include "stack"
#include<algorithm>
using namespace std; 
vector<int> stockspan(vector<int> prices){
	vector<int> ans;
	stack<pair<int, int>> s;
	for(auto price: prices){
		int days = 1;
		while(!s.empty() and s.top().first <= price){
			days += s.top().second;
			s.pop();
		}
		s.push({price, days});
		ans.push_back(days);
	}
	return ans;
}
int main(int argc, char *argv[])
{
	vector<int> a = {100,80,60,70,60,75, 85};
	vector<int> res = stockspan(a);
	for(auto i: res){
		cout<<i<<" ";
	}
	cout<<"\n";
}
