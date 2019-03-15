using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Server.API.Models
{
    public class ServerAPIContext : DbContext
    {
        public ServerAPIContext (DbContextOptions<ServerAPIContext> options)
            : base(options)
        {
        }

        public DbSet<Server.API.Models.Cliente> Workout { get; set; }
    }
}
