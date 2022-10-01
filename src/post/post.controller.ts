import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) { }
    @Get()
    async getAll() {
        return this.postService.getAll();
    }


    @Post()
    async create(@Body() dto: PostDto) {
        return this.postService.create(dto);
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.postService.getById(id);
    }


    @Delete(':id')
    async deleteById(@Param('id') id: string) {
        return this.postService.deleteById(id);
    }

    @Put(':id')
    async updateById(@Param('id') id: string, @Body() dto: UpdatePostDto) {
        return this.postService.updateById(id, dto);
    }

}
