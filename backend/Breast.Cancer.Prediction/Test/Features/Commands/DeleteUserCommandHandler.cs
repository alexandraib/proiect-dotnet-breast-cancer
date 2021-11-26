using Application.Interfaces;
using MediatR;
using Domain.Exceptions;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands
{
    public class DeleteUserCommandHandler : IRequestHandler<DeleteUserCommand, Guid>
    {
        private readonly IUserRepository repository;

        public DeleteUserCommandHandler(IUserRepository repository)
        {
            this.repository = repository;
        }
        public async Task<Guid> Handle(DeleteUserCommand request, CancellationToken cancellationToken)
        {
            var user = repository.GetByIdAsync(request.Id).Result;
            if(user == null)
            {
                throw new EntityNotFoundException("User doesn't exist.");
            }

            await repository.DeleteAsync(user);
            return user.Id;
        }
    }
}
