import { CreatorsService } from './creators.service';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
export declare class CreatorsController {
    private readonly creatorsService;
    constructor(creatorsService: CreatorsService);
    create(createCreatorDto: CreateCreatorDto): Promise<import("./creators.schema").Creator>;
    findAll(): Promise<import("./creators.schema").Creator[]>;
    findOne(id: string): Promise<import("./creators.schema").Creator>;
    update(id: string, updateCreatorDto: UpdateCreatorDto): Promise<import("./creators.schema").Creator>;
    remove(id: string): Promise<import("./creators.schema").Creator>;
}
