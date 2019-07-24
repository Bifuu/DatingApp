using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
        // Used to register a user
         Task<User> Register(User user, string password);
         // Used to log in the user
         Task<User> Login(string username, string password);
         // Used to check if a user exists
         Task<bool> UserExists(string username);
    }
}