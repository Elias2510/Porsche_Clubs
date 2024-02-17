using Project_DAW.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project_DAW.Contextapp;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_DAW.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FestController : ControllerBase
    {
        private readonly Context _context;

        public FestController(Context context)
        {
            _context = context;
        }

        [HttpGet("Fests")]
        public async Task<ActionResult<List<Fest>>> GetFestsAsync()
        {
            var fests = await _context.Fest.ToListAsync();
            return Ok(fests);
        }

        [HttpGet("Fest/{id}")]
        public async Task<ActionResult<Fest>> GetFestByIdAsync(int id)
        {
            var fest = await _context.Fest.FindAsync(id);
            if (fest == null)
            {
                return NotFound();
            }
            return Ok(fest);
        }

        [HttpPost("Fest")]
        public async Task<IActionResult> CreateFestAsync(Fest fest)
        {
            _context.Fest.Add(fest);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetFestByIdAsync), new { id = fest.id }, fest);
        }

        [HttpPut("Fest/{id}")]
        public async Task<IActionResult> UpdateFestAsync(int id, Fest fest)
        {
            if (id != fest.id)
            {
                return BadRequest();
            }

            _context.Entry(fest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FestExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("Fest/{id}")]
        public async Task<IActionResult> DeleteFestAsync(int id)
        {
            var fest = await _context.Fest.FindAsync(id);
            if (fest == null)
            {
                return NotFound();
            }

            _context.Fest.Remove(fest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FestExists(int id)
        {
            return _context.Fest.Any(e => e.id == id);
        }
    }
}
