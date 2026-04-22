import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeService } from './like.service';
import LikeSchema from '../../schemas/Like.model';
import { LikeInput } from '../../libs/dto/like/like.input';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Like',
				schema: LikeSchema,
			},
		]),
	],
	providers: [LikeService],
	exports: [LikeService],
})
export class LikeModule {
	toggleLike(input: LikeInput): number | PromiseLike<number> {
		throw new Error('Method not implemented.');
	}
}
