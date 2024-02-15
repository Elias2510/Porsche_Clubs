using AutoMapper;
using Project_DAW.Context;
using Project_DAW.Entities;
using Project_DAW.Models;
using Microsoft.AspNetCore.Mvc;
using System.Drawing;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Project_DAW.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ModelController : ControllerBase
    {
        private readonly Context _context;
        private readonly IMapper _mapper;
        public ModelController(Context Model, IMapper mapper)
        {
            this._context = Model;
            this._mapper = mapper;
        }
        [HttpGet("Modele")]
        public async Task<ActionResult<List<GetModelDTO>>> IndexAsync()
        {
            var carti = _context.Model.Select(c => new GetModelDTO()
            {
                id = c.id,
                denumire = c.denumire
            }).ToList();
            return carti;
        }
        [HttpGet("/{id}")]
        public ActionResult<Model> Detalii(int id)
        {
            var Model = _context.Model.Find(id);
            if (Model == null)
                return NotFound();
            else
                return Model;
        }
        [HttpPost]
        public async Task<IActionResult> Post(PostModelDTO c)
        {
            var model = new Model()
            {
                denumire = c.denumire,
            };
            _context.Add(model);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}