#include <iostream>
#include <stack>
#include <string>

using namespace std;

int precedence(char op)
{
    if (op == '*' || op == '/')
        return 2;
    else if (op == '+' || op == '-')
        return 1;
    return 0;
}


int main()
{
    string str = "5+6*9";
    stack<string> num;
    stack<char> op;
    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/')
        {
            while (!op.empty() && precedence(str[i]) <= precedence(op.top()))
            {
                char sign = op.top();
                op.pop();
                string num2 = num.top();
                num.pop();
                string num1 = num.top();
                num.pop();
                num.push(num1 + num2 + sign);
            }
            op.push(str[i]);
        }
        else
        {
            num.push(to_string(str[i]-48));
        }
    }
    while (!op.empty())
    {
        char sign = op.top();
        op.pop();
        string num2 = num.top();
        num.pop();
        string num1 = num.top();
        num.pop();
        num.push(num1 + num2 + sign);
    }

    cout<<"Ans: "<<num.top();

    return 0;
}