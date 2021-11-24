using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence.Context;

namespace Persistence
{
    public static class PersistenceDI
    {
        public static void AddPersistence(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<UserContext>(options => options.UseNpgsql(configuration.GetConnectionString("DatabaseConnection"), b => b.MigrationsAssembly(typeof(UserContext).Assembly.FullName)));
            services.AddScoped<IApplicationContext>(provider => provider.GetService<UserContext>());
        }
    }
}
