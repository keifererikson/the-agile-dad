using Microsoft.AspNetCore.Mvc;
using TheAgileDad.API.Data;

namespace TheAgileDad.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthCheckController(AppDbContext context) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        try
        {
            var canConnect = await context.Database.CanConnectAsync();

            return canConnect ? Ok(new { message = "Database connection successful!" }) :
                StatusCode(500, new { message = "Could not connect to the database." });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Database connection failed.", error = ex.Message });
        }
    }
}