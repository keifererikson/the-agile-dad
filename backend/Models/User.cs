namespace TheAgileDad.API.Models;

public class User
{
   public int Id { get; set; }
   public string? FirstName { get; set; }
   public string? LastName { get; set; }
   public required string Email { get; set; }
   public required string HashedPassword { get; set; }
   public DateTime CreatedAt { get; set; } = DateTime.Now;
   public DateTime UpdatedAt { get; set; } = DateTime.Now;
}