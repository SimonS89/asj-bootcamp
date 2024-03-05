using System.Reflection.Metadata.Ecma335;
using System.Text.Json;

var sale = new SaleWithTax(10,20);

sale.Total = 15;

People simon = new People()
{
    Name = "Simon",
    Age = 35,
};
string json = JsonSerializer.Serialize(simon);
Console.WriteLine(json);
string myJson = @"{ 
""Name"":""H\u00E9ctor"",
""Age"":35
    }";

People hector2 = JsonSerializer.Deserialize<People>(myJson);
Console.WriteLine(hector2.Name);

Console.WriteLine(sale.GetInfo());
Console.WriteLine(sale.GetInfoWithTax());
sale.Save();
Some(sale);

void Some(ISave save)
{
    sale.Save();
}

//Funcional
//Funcion pura siempre devuelve el mismo valor y no altera el elemento
int Sub(int a, int b)
{
    return a - b;
}

DateTime date = DateTime.Now;

Console.WriteLine(GetTomorrow(date));
DateTime GetTomorrow(DateTime date) => date.AddDays(1);

Beer ToUpper(Beer beer)
{
    var beer2 = new Beer()
    { Name = beer.Name.ToUpper() };
    return beer2;
}

var beer = new Beer() { Name = "Quilmes" };

Console.WriteLine(ToUpper(beer).Name);
Console.WriteLine(beer.Name);

//Funcion de 1ra clase, puede guardarse en una variable
var show = Show;
action(show,"Hola");
var show2 = Show2;
action2(show2, "Chau");
void Show(string msg)
{
    Console.WriteLine(msg);
}

//Funcion enviada por parametro tipo Action, recibe elementos pero no retorna nada

void action(Action<string> fn, string msg)
{
    Console.WriteLine("Hace algo aqui");
    fn(msg);
    Console.WriteLine("Algo posterior");
}

//Funcion enviada por parametro tipo Action, recibe elementos y retorna

string Show2(string msg)
{
    return msg.ToUpper();
}

void action2(Func<string,string> fn, string msg)
{
    Console.WriteLine("Hace algo aqui");
    Console.WriteLine(fn(msg));
    Console.WriteLine("Algo posterior");
}

//Funcion Lambda

Func<int,int,int> sub = ( a,  b) => a - b;
Func<int, int> fun2 = a => a * 2;
Func<int, int> fun3 = a =>
{
    a += 1;
    return a;
};

FunSuperior((a,b) => a + b, 10);

void FunSuperior(Func<int, int,int> fn,int num)
{
    var resultado = fn(num, num);
    Console.WriteLine(resultado);
}

//LINQ
var names = new List<string>() { "Simon", "Vicente", "Beatriz", "Hugo" };

var namesResult = from n in names where n.Length>3 && n.Length<6 orderby n select n;
var namesResult2 = names.Where(n => n.Length > 3 && n.Length < 6).OrderByDescending(n => n);

foreach (var name in namesResult2)
{
    Console.WriteLine(name);
}

public class SaleWithTax : Sale
{
    public decimal Tax { get; set; }
    public SaleWithTax(decimal total,decimal tax) : base(total)
    {
        this.Tax = tax;
    }
    public override string GetInfo()
    {
        return "El total es " + Tax;
    }

    public string GetInfoWithTax()
    {
        return "Otra info";
    }
}

public class Beer
{
    public string Name { get; set; }
}





