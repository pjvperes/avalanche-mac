import { ClicksService } from './clicks.service';
import { CreateLinkDto as CreateClickDto } from './dto/create-click.dto';
import { UpdateLinkDto as UpdateClickDto } from './dto/update-click.dto';
import { CountClickRequestDto } from './dto/count-click-request-dto';
export declare class ClicksController {
    private readonly clicksService;
    constructor(clicksService: ClicksService);
    create(createClickDto: CreateClickDto): Promise<import("./clicks.schema").Click>;
    findAll(): Promise<import("./clicks.schema").Click[]>;
    hasAtLeastThousandUnpaidClicks(countClickRequestDto: CountClickRequestDto): Promise<import("./dto/count-click.dto").UnpaidClicksResponseDto>;
    findOne(id: string): Promise<import("./clicks.schema").Click>;
    markAllClicksAsPaid(): Promise<{
        updatedCount: number;
    }>;
    update(id: string, updateClickDto: UpdateClickDto): Promise<import("./clicks.schema").Click>;
    remove(id: string): Promise<import("./clicks.schema").Click>;
}
