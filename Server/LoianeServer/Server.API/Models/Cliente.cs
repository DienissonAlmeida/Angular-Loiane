using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.Models
{
    public class Cliente
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string email { get; set; }

        public Endereco Endereco { get; set; }

        public int EnderecoId { get; set; }

    }
}
