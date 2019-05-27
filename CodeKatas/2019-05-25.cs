using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Consola
{
    class Rack
    {
        public List<int> balls;
        public Rack()
        {
            balls = new List<int>();
        }

        public void AddBall(int ball)
        {
            if (this.balls.Count == 0)
            {
                this.balls.Add(ball);
            }

            if(this.balls.Last() < ball)
            {
                this.balls.Insert(this.balls.Count, ball);
            }else if(this.balls.First() > ball)
            {
                this.balls.Insert(0, ball);
            }
            else
            {
                int i = 0;
                foreach(var c in this.balls)
                {
                    i++;
                    if(c > ball)
                    {
                        this.balls.Insert(i - 1, ball);
                        break;
                    }
                }
            }
        }

    }


    class Program
    {
        static void Main(string[] args)
        {
            
            Rack rack = new Rack();
            rack.AddBall(20);
            foreach(var b in rack.balls)
            {
                Console.Write("{0} ", b);
            }
            Console.WriteLine();
            rack.AddBall(10);
            foreach (var b in rack.balls)
            {
                Console.Write("{0} ", b);
            }
            Console.WriteLine();
            rack.AddBall(30);
            foreach (var b in rack.balls)
            {
                Console.Write("{0} ", b);
            }
            Console.WriteLine();
            rack.AddBall(15);
            foreach (var b in rack.balls)
            {
                Console.Write("{0} ", b);
            }
            Console.WriteLine();
            rack.AddBall(25);
            foreach (var b in rack.balls)
            {
                Console.Write("{0} ", b);
            }
            Console.WriteLine();
            Console.ReadLine();

            string inputText = "When not studying nuclear physics, Bambi likes to play beach volleyball.";
            SortedDictionary<char, int> tablaFrecuencia = new SortedDictionary<char, int>();
            inputText = inputText.ToLower();
            var onlyLetters = new String(inputText.Where(Char.IsLetter).ToArray());
            //Console.WriteLine(onlyLetters);
            foreach(char c in onlyLetters)
            {
                int test;
                if(tablaFrecuencia.TryGetValue(c, out test))
                {
                    tablaFrecuencia[c]++;
                }
                else
                {
                    tablaFrecuencia.Add(c,1);
                }
            }
            foreach(KeyValuePair<char, int> pair in tablaFrecuencia)
            {
                Console.Write(new string(pair.Key, pair.Value));
            }
            Console.WriteLine();
            Console.WriteLine("Expected output!!");
            Console.Write("aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy");
            Console.ReadKey();


        }
    }
}
