using Application.Features.Commands;
using Application.Features.Queries;
using Domain.Exceptions;
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
            try
            {
                return Ok(await mediator.Send(command));
            }
            catch (EntityAlreadyExistsException e)
            {
                return Conflict(e.Message);
            }
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
                var user = await mediator.Send(command);
                return Ok(JwtManager.GenerateToken(user.Email, user.UserType));
            }
            catch (InvalidCredentialsException e)
            {
                return Unauthorized(e.Message);
            }
            catch (EntityNotFoundException e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(Guid id, [FromBody] UpdateUserCommand command)
        {
            if (id != command.Id)
            {
                return BadRequest();
            }
            try
            {
                return Ok(await mediator.Send(command));
            }
            catch (EntityNotFoundException e)
            {
                return BadRequest(e.Message);
            }
        }


    }
}
