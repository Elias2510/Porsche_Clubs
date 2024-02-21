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
        //private readonly IMapper _mapper;
        public PosesorController(Context Posesor)
        {
            this._context = Posesor;
            //this._mapper = mapper;
        }
        [HttpGet("Posesori")]
        public async Task<ActionResult<List<Posesor>>> IndexAsync()
        {
            var posesori = _context.Posesor.ToList();
            return posesori;
        }
        [HttpGet("{id}")]
        public ActionResult<Posesor> Detalii(int id)
        {
            var posesor = _context.Posesor.Find(id);
            if (posesor == null)
                return NotFound();
            else
                return posesor;
        }
        [HttpPost]
        public async Task<IActionResult> Post(PostPosesorDTO a)
        {
            var posesor = new Posesor()
            {
                name = a.name,
                badge_id = a.badge_id
            };
            _context.Add(posesor);
            await _context.SaveChangesAsync();
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Put(int id, PostPosesorDTO posesor)
        {
            if (posesor == null || id == 0)
                return BadRequest();

            var _posesor = await _context.Posesor.FirstOrDefaultAsync(a => a.id == id);
            if (_posesor == null)
                return NotFound();
            _posesor.name = posesor.name;
            _posesor.badge_id = posesor.badge_id;
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
