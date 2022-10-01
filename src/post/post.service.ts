import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
@Injectable()
export class PostService {
    posts: any[]

    constructor(){
        this.posts = [
            {
                id: 1,
                content: "Nodejs"
            },
            {
                id: 2,
                content: "Express",
            },
            {
                id: 3,
                content: "Nest.js"
            }
        ]
    }

   
   async getAll(){
        return this.posts
   }


   async create(dto: PostDto){  
        return [...this.posts, dto]
   }


   async  getById(id: string){
        return this.posts.find(d => d.id === parseInt(id))
   }


   
   async deleteById(id: string){
        return this.posts.filter(d => d.id !== parseInt(id))
    }  

    
    async updateById(id: string, dto: UpdatePostDto){
        let updatedPost = await this.posts.find(d => d.id == parseInt(id))
        updatedPost.content = dto.content
        return updatedPost
    }
}   
