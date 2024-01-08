#include <iostream>
#include <stack>

using namespace std;

int precedence(char op)
{
    if (op == '*' || op == '/')
        return 2;
    else if (op == '+' || op == '-')
        return 1;
    return 0;
}

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
    string str = "1+(2+6)*4/8-3";
    stack<char> op;
    stack<int> num;

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/' || str[i] == '(' || str[i] == ')')
        {
            if (op.size() == 0 || str[i] == '(' || op.top() == '(')
                op.push(str[i]);
            else if (str[i] == ')')
            {
                while (op.top() != '(')
                {
                    char sign = op.top();
                    op.pop();
                    int num2 = num.top();
                    num.pop();
                    int num1 = num.top();
                    num.pop();
                    int ans;
                    ans = solve(num1, num2, sign);
                    num.push(ans);
                }
                op.pop();
            }
            else if (op.empty() || precedence(str[i]) > precedence(op.top()))
                op.push(str[i]);
            else
            {
                while (!op.empty() && precedence(str[i]) <= precedence(op.top()))
                {
                    char sign = op.top();
                    op.pop();
                    int num2 = num.top();
                    num.pop();
                    int num1 = num.top();
                    num.pop();
                    int ans;
                    ans = solve(num1, num2, sign);
                    num.push(ans);
                }
                op.push(str[i]);
            }
            
        }
        else
        {
            int digit = (int)str[i] - 48;
            num.push(digit);
        }
    };
    while (!op.empty())
    {
        char sign = op.top();
        op.pop();
        int num2 = num.top();
        num.pop();
        int num1 = num.top();
        num.pop();
        int ans;
        ans = solve(num1, num2, sign);
        num.push(ans);
    }
    cout << "Ans: " << num.top();

    return 0;
}