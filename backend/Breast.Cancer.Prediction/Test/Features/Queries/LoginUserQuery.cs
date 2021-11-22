using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Queries
{
    public class LoginUserQuery : IRequest<Guid>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
