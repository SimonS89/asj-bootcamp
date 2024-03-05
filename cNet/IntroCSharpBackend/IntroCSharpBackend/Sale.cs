using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
    public class Sale : ISale,ISave
    {
        public decimal Total { get; set; }
        private decimal Some;
        public Sale(decimal total)
        {
            this.Total = total;
            this.Some = 11;
        }

        public virtual string GetInfo()
        {
            return "El total es " + Some;
        }

        public void Save()
        {
            Console.WriteLine("Se guardo en Bd");
        }
    }
