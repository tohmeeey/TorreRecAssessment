using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserProfile : ControllerBase
    {
        // GET: api/<UserProfile>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<UserProfile>/5
        [HttpGet("getprofiledetails")]
        public IActionResult Get(string username)
        {
            try
            {
                if (Util.UsernameIsFound(username,out string responsemsg))
                {
                    Profile userProfileDetails = JsonConvert.DeserializeObject<Profile>(responsemsg);

                    return Ok(userProfileDetails);
                }
                return BadRequest(new { message = "Error Retreiving User Profile" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // POST api/<UserProfile>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<UserProfile>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserProfile>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
