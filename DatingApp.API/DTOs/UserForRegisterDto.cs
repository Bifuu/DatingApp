using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForRegisterDto
    {
        // Username is Required
        [Required]
        public string Username { get; set; }

        // Password is required and must be between 4 and 100 characters
        [Required]
        [StringLength(100, MinimumLength = 4, ErrorMessage = "You must use a password of atleast 4 characters")]
        public string Password { get; set; }
    }
}