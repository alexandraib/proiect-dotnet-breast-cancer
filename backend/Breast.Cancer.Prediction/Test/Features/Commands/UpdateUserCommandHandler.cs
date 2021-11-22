using Application.Interfaces;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands
{
    public class UpdateUserCommandHandler : IRequestHandler<UpdateUserCommand, Guid>
    {
        private readonly IUserRepository repository;

        public UpdateUserCommandHandler(IUserRepository repository)
        {
            this.repository = repository;
        }
        public async Task<Guid> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
        {
            var user = repository.GetByIdAsync(request.Id).Result;
            if(user == null || user.Id == Guid.Empty)
            {
                throw new Exception("User doesn't exist!");
            }

            user.UserName = request.UserName;
            user.Password = request.Password;
            user.UserType = request.UserType;
            user.Age = request.Age;

            await repository.UpdateAsync(user);
            return user.Id;
        }
    }
}
