#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

class Base{
    public:
    Base(){cout<<"Non-param of Base "<<endl;}
    Base(int x){cout<<"Param of Base "<<x<<endl;}
};

class Derived: public Base{
    public:
    Derived(){cout<<"Non-param of Derived"<<endl;}
    Derived(int a){cout<<"Param of Derived "<<a<<endl;}
    Derived(int x,int a): Base(x){cout<<"Param of Derived "<<a<<endl;}
};

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    Derived d1;
    Derived d2(10);
    Derived d3(5,4);
    
return 0;
}