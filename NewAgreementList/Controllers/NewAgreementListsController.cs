using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewAgreementList;
using NewAgreementList.Models;

namespace NewAgreementList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewAgreementListsController : ControllerBase
    {
        private readonly NewAgreementListContext _context;

        public NewAgreementListsController(NewAgreementListContext context)
        {
            _context = context;
        }

        // GET: api/NewAgreementLists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NewAgreementList>>> GetNewAgreementList()
        {
          if (_context.NewAgreementList == null)
          {
              return NotFound();
          }
            return await _context.NewAgreementList.ToListAsync();
        }

        // GET: api/NewAgreementLists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NewAgreementList>> GetNewAgreementList(int id)
        {
          if (_context.NewAgreementList == null)
          {
              return NotFound();
          }
            var newAgreementList = await _context.NewAgreementList.FindAsync(id);

            if (newAgreementList == null)
            {
                return NotFound();
            }

            return newAgreementList;
        }

        // PUT: api/NewAgreementLists/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNewAgreementList(int id, NewAgreementList newAgreementList)
        {
            if (id != newAgreementList.Id)
            {
                return BadRequest();
            }

            _context.Entry(newAgreementList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewAgreementListExists(id))
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

        // POST: api/NewAgreementLists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<NewAgreementList>> PostNewAgreementList(NewAgreementList newAgreementList)
        {
          if (_context.NewAgreementList == null)
          {
              return Problem("Entity set 'NewAgreementListContext.NewAgreementList'  is null.");
          }
            _context.NewAgreementList.Add(newAgreementList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNewAgreementList", new { id = newAgreementList.Id }, newAgreementList);
        }

        // DELETE: api/NewAgreementLists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNewAgreementList(int id)
        {
            if (_context.NewAgreementList == null)
            {
                return NotFound();
            }
            var newAgreementList = await _context.NewAgreementList.FindAsync(id);
            if (newAgreementList == null)
            {
                return NotFound();
            }

            _context.NewAgreementList.Remove(newAgreementList);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NewAgreementListExists(int id)
        {
            return (_context.NewAgreementList?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
