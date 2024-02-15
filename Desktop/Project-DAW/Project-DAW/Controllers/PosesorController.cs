using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
﻿using AutoMapper;
using Project_DAW.Contextapp;
using Project_DAW.Entities;
using Project_DAW.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Drawing;

namespace Project_DAW.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PosesorController : ControllerBase
    {
        private readonly Context _context;
        private readonly IMapper _mapper;
        public PosesorController(Context Posesor, IMapper mapper)
        {
            this._context = Posesor;
            this._mapper = mapper;
        }
        [HttpGet("Posesori")]
        public async Task<ActionResult<List<Posesor>>> IndexAsync()
        {
            var autori = _context.Posesor.ToList();
            return autori;
        }
        [HttpGet("{id}")]
        public ActionResult<Posesor> Detalii(int id)
        {
            var autor = _context.Posesor.Find(id);
            if (autor == null)
                return NotFound();
            else
                return autor;
        }
        [HttpPost]
        public async Task<IActionResult> Post(PostPosesorDTO a)
        {
            var autor = new Posesor()
            {
                name = a.name,
                badge_id = a.badge_id
            };
            _context.Add(autor);
            await _context.SaveChangesAsync();
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Put(int id, PostPosesorDTO autor)
        {
            if (autor == null || id == 0)
                return BadRequest();

            var _autor = await _context.Posesor.FirstOrDefaultAsync(a => a.id == id);
            if (_autor == null)
                return NotFound();
            _autor.name = autor.name;
            _autor.badge_id = autor.badge_id;
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
