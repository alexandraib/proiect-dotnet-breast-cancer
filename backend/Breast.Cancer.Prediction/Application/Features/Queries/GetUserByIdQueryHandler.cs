using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Features.Queries
{
    public class GetUserByIdQueryHandler : IRequestHandler<GetUserByIdQuery, User>
    {
        private readonly IApplicationContext context;

        public GetUserByIdQueryHandler(IApplicationContext context)
        {
            this.context = context;
        }
        public async Task<User> Handle(GetUserByIdQuery request, CancellationToken cancellationToken)
        {
            var user = await context.Users.FirstOrDefaultAsync(u => u.Id == request.Id);
            if (user == null)
            {
                throw new Exception("Proudct does not exist");
            }
            return user;
        }
    }
}
