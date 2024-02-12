import { ReferencesService } from './references.service';
import { CreateReferenceDto } from './dto/create-reference.dto';
import { UpdateReferenceDto } from './dto/update-reference.dto';
import { CheckLinkByReferenceDto } from './dto/check-link-by-reference.dto';
export declare class ReferencesController {
    private readonly referenceService;
    constructor(referenceService: ReferencesService);
    create(createReferenceDto: CreateReferenceDto): Promise<import("./references.schema").Reference>;
    findAll(): Promise<import("./references.schema").Reference[]>;
    getLinkByReference(checkLinkByReferenceDto: CheckLinkByReferenceDto): Promise<string>;
    findOne(id: string): Promise<import("./references.schema").Reference>;
    update(id: string, updateReferenceDto: UpdateReferenceDto): Promise<import("./references.schema").Reference>;
    remove(id: string): Promise<import("./references.schema").Reference>;
}
