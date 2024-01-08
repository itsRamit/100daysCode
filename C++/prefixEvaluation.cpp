#include <iostream>
#include <stack>

using namespace std;

int solve(int num1, int num2, char sign)
{
    int ans;
    switch (sign)
    {
    case '+':
        ans = num1 + num2;
        break;
    case '-':
        ans = num1 - num2;
        break;
    case '*':
        ans = num1 * num2;
        break;
    case '/':
        ans = num1 / num2;
        break;
    }
    return ans;
}

int main()
{
    string str = "+56";
    stack<int>num;
    for (int i = str.length()-1; i >=0 ; i--)
    {
        if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/')
        {
            int num1 = num.top();
            num.pop();
            int num2 = num.top();
            num.pop(); 
            num.push(solve(num1,num2,str[i]));
        }
        else
        {
          num.push(str[i] - 48);
        }
    }

    cout<<"Ans: "<<num.top();

    return 0;
}