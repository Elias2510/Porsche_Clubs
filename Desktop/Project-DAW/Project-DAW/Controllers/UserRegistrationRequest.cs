using System;
using System.ComponentModel.DataAnnotations;

namespace Project_DAW.Controllers
{
    public class UserRegistrationRequest
    {
        public string Username { get; set; }
        //public string Email { get; set; }
        //public string Password { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(4)]
        public string Password { get; set; }

        public string ConfirmPassword { get; set; }
    }
}
