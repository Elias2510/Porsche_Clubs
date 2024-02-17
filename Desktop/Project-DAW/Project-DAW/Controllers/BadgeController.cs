//using AutoMapper;
using Project_DAW.Entities;
using Project_DAW.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project_DAW.Contextapp;


namespace Project_DAW.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BadgeController : ControllerBase
    {
        private readonly Context _context;
        //private readonly IMapper _mapper;
        public BadgeController(Context Badge)
        {
            this._context = Badge;
            
        }
        [HttpGet("Badge")]
        public async Task<ActionResult<List<Badge>>> IndexAsync()
        {
            var badges = _context.Badge.ToList();
            return badges;
        }
        [HttpGet("by/{id}")]
        public ActionResult<Badge> Detalii(int id)
        {
            var badge = _context.Badge.Find(id);
            if (badge == null)
                return NotFound();
            else
                return badge;
        }
        [HttpPost]
        public async Task<IActionResult> Post(PostBadgeDTO e)
        {
            var badge = new Badge()
            {
                name = e.name,
            };
            _context.Add(badge);
            await _context.SaveChangesAsync();
            
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Put(int id, PostBadgeDTO badge)
        {
            if (badge == null || id == 0)
                return BadRequest();

            var _badge = await _context.Badge.FirstOrDefaultAsync(e => e.id == id);
            if (_badge == null)
                return NotFound();
            _badge.name = badge.name;
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}