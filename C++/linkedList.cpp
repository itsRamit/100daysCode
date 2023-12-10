#include <iostream>
#include <vector>

using namespace std;

class Node
{
public:
    int data;
    Node *next;
    Node(int data)
    {
        this->data = data;
        next = NULL;
    }
};

Node *insertion(vector<int> arr)
{
    Node *head = new Node(arr[0]);
    Node *ptr = head;
    for (int i = 1; i < arr.size(); i++)
    {
        Node *temp = new Node(arr[i]);
        ptr->next = temp;
        ptr = temp;
    }
    return head;
};

Node *deleteHead(Node *head)
{
    Node *temp = head;
    head = head->next;
    temp->next = NULL;
    free(temp);
    return head;
}

void deletetail(Node *head)
{
    Node *tail = head;
    while (tail->next)
        tail = tail->next;
    Node *temp = tail;
    tail->next = NULL;
    free(temp);
}

Node *DeleteAtIdx(Node *head, int idx)
{
    int count = 1;
    Node *temp = head;
    Node *prev = temp;
    while (temp && count != idx)
    {
        count++;
        prev = temp;
        temp = temp->next;
    }
    if (temp->next == NULL && temp == head)
    {
        free(head);
        return NULL;
    }
    else if (temp == head)
    {
        head = deleteHead(head);
    }
    else if (temp->next == NULL)
    {
        deletetail(head);
    }
    else
    {
        prev->next = prev->next->next;
        free(temp);
    }
    return head;
}

void print(Node *head)
{
    Node *temp = head;
    while (temp)
    {
        cout << temp->data << "  ";
        temp = temp->next;
    }
    cout << endl;
}

int main()
{
    vector<int> arr = {54, 2, 5, 4, 65, 7, 456, 6, 45, 3, 43};
    Node *head = insertion(arr);
    head = DeleteAtIdx(head, 4);
    print(head);
    return 0;
}