using System.ComponentModel.DataAnnotations;

namespace JwtTest.Controllers;
public class RegistrationRequest
{
    [Required]
    public string Email { get; set; } = null!;
    public string Username { get; set; } = null!;
    public string Password { get; set; } = null!;

}