import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') // Define a rota base para o controlador
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto); // Cria um novo usuário
  }

  @Get()
  async findAll() {
    console.log('findAll was called'); // Log para verificar se a função é chamada
    const users = await this.userService.findAll(); // Chama o método para buscar todos os usuários
    if (users.length === 0) {
      return 'No users found'; // Caso não haja usuários, retorna uma mensagem
    }
    return users; // Retorna os usuários encontrados
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id); // Busca um usuário pelo ID
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto); // Atualiza os dados de um usuário
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.userService.remove(+id); // Remove um usuário pelo ID
  }
}


  