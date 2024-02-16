using Microsoft.EntityFrameworkCore;
using Project_DAW.Entities;
using Project_DAW.Helpers;
using Project_DAW.Models;
//context
namespace Project_DAW.Contextapp
{
    public class Context : DbContext
    {
        public DbSet<Posesor> Posesor {  get; set; }
        public DbSet<Model> Model {  get; set; }
        public DbSet<Fest> Fest { get; set; }
        public DbSet<Badge> Badge { get; set; }

        public DbSet<User> Users { get; set; }
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }

        private readonly IJwtUtils _jwtUtils;

        public Context(IJwtUtils jwtUtils)
        {
            _jwtUtils = jwtUtils;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Examen;");//ConnectionString
        }

        public AuthenticateResponse? Authenticate(AuthenticateRequest model)
        {
            var user = Users.SingleOrDefault(x => x.Username == model.Username && x.Password == model.Password);

            // return null if user not found
            if (user == null) return null;

            var token = user.Email + user.Password;

            return new AuthenticateResponse(user, token);
        }

        public IEnumerable<User> GetAll()
        {
            return Users;
        }

        public User? GetById(int id)
        {
            return Users.FirstOrDefault(x => x.UserId == id);
        }
       
    }
}
