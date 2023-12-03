#include <iostream>

using namespace std;

class Gun
{
public:
    int ammo;
    int damage;
    int scope;
};

class player
{
private:
    int score;
    int hp;
    Gun gun;

public:
    // setter
    void setHp(int hp)
    {
        this->hp = hp;
    }
    void setScore(int score)
    {
        this->score = score;
    }
    void setGun(Gun gun)
    {
        this->gun.ammo = gun.ammo;
        this->gun.damage = gun.damage;
        this->gun.scope = gun.scope;
    }
    // getter
    int getHp()
    {
        return hp;
    }
    int getScore()
    {
        return score;
    }
    void getGun()
    {
        cout << gun.damage << endl;
        cout << gun.ammo << endl;
        cout << gun.scope << endl;
    }
    // Constructor
    player(int hp1, int score, Gun gun1)
    {
        hp = hp1;
        score = score1;
        gun = gun1;
    }
};

int main()
{
    // player ramit;
    // ramit.setHp(98);
    // ramit.setScore(28);
    // cout << ramit.getHp()<<endl;
    // cout << ramit.getScore();
    Gun akm;
    akm.ammo = 500;
    akm.damage = 80;
    akm.scope = 2;
    player *ptr = new player;
    ptr->setHp(100);
    ptr->setScore(28);
    ptr->setGun(akm);
    cout << ptr->getHp() << endl;
    cout << ptr->getScore() << endl;
    ptr->getGun();
}
