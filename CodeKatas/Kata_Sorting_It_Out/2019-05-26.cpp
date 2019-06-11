#include <bits/stdc++.h>
#include <iostream>
using namespace std;

class Rack
{
    public:

    vector<int> balls;

    void Balls(){
        for(int i = 0; i < balls.size(); i++){
            cout << balls[i] << " ";
        }
    }

    void add(int ball){
        if(balls.size() == 0)
            balls.push_back(ball);
        else if(balls[balls.size() - 1] < ball)
            balls.push_back(ball);
        else if(balls[0] > ball)
            balls.insert(balls.begin(), ball);
        else {
            for(int i = 0; i < balls.size(); i++){
                if(balls[i] > ball){
                    balls.insert(balls.begin() + i, ball);
                    i = balls.size();
                }
            }
        }
        
    }

};

int main() {

    map<char, int> diccionario;
    map<char,int>::iterator it;
    string prueba = "When not studying nuclear physics, Bambi likes to play beach volleyball.";
    transform(prueba.begin(), prueba.end(), prueba.begin(), ::tolower);
    prueba.erase(remove(prueba.begin(), prueba.end(), ' '), prueba.end());
    prueba.erase(remove(prueba.begin(), prueba.end(), ','), prueba.end());
    prueba.erase(remove(prueba.begin(), prueba.end(), '.'), prueba.end());
    for(int i = 0; i < prueba.size(); i++){
        if(!(prueba[i] <= 'a' && prueba[i] >= 'z')){
            diccionario[prueba[i]]++;
        }
    }

    for(it = diccionario.begin(); it != diccionario.end(); it++){
        for(int y = 0; y < it->second; y++){
            cout << it->first;
        }
    }
    cout << "\n";
    cout << "Expected output\naaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy\n";

    Rack rack;
    rack.add(20);
    rack.add(10);
    rack.add(30);
    rack.add(25);
    rack.add(15);
    rack.Balls();

    return 0;
}