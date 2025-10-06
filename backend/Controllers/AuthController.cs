using Microsoft.AspNetCore.Mvc;
using TheAgileDad.API.DTOs;

namespace TheAgileDad.API.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterUserDto registerDto)
    {
        return Ok($"User registered with email: {registerDto.Email}");
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login()
    {
        return Ok("User logged in (placeholder).");
    }
}