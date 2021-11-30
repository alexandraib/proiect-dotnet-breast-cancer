using Application.Interfaces;
using Domain.Entities;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands
{
    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, Guid>
    {
        private readonly IUserRepository repository;

        public CreateUserCommandHandler(IUserRepository repository)
        {
            this.repository = repository;
        }
        public async Task<Guid> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            User databaseUser = await repository.GetByEmailAsync(request.Email);
            if (!(databaseUser == null || databaseUser.Id == Guid.Empty))
            {
                throw new ArgumentException("User already exists!")
            }

            var user = new User
            {
                Email = request.Email,
                Password = request.Password,
                UserType = request.UserType
            };
            await repository.AddAsync(user);
            return user.Id;
        }
    }
}
