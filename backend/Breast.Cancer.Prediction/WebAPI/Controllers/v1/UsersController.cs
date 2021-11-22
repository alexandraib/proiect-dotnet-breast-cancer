using Application.Features.Commands;
using Application.Features.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WebAPI.Controllers.v1
{

    [Route("api/users")]
    [ApiController]
    public class UsersController : BaseController
    {
        public UsersController(IMediator mediator) : base(mediator)
        { 
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateUserCommand command)
        {
            return Ok(await mediator.Send(command));
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await mediator.Send(new GetUsersQuery()));
        }

        [HttpPost("login")]
        public async Task<IActionResult> GetJwt([FromBody] LoginUserQuery command)
        {
            try
            {
                return Ok(await mediator.Send(new LoginUserQuery()));
            }
            catch (ArgumentException e)
            {
                return Unauthorized("Invalid credentials!");
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(Guid id, [FromBody] UpdateUserCommand command)
        {
            if(id != command.Id)
            {
                return BadRequest();
            }
            return Ok(await mediator.Send(command));
        }


    }
}
