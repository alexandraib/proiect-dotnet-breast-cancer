using MediatR;
using System;

namespace Application.Features.Commands
{
    public class CreateUserCommand : IRequest<Guid>
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string UserType { get; set; }

        public int Age { get; set; }
    }
}
