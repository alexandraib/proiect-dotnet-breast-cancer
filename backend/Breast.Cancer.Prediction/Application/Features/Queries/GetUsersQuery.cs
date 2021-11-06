using System;
using System.Collections.Generic;
using Domain.Entities;
using MediatR;

namespace Application.Features.Queries
{
    public class GetUsersQuery : IRequest<IEnumerable<User>>
    {
       
    }
}
