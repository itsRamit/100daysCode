#include <iostream>
#include <stack>
#include <string>

using namespace std;


int main()
{
    string str = "56+";
    stack<string>val;
    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/')
        {
            string num2 = val.top();
            val.pop();
            string num1 = val.top();
            val.pop();
            val.push(num1+str[i]+num2);
        }
        else
        {
          val.push(to_string(str[i] - 48));
        }
    }

    cout<<"Ans: "<<val.top();

    return 0;
}