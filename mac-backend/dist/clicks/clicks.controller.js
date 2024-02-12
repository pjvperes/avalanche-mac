"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClicksController = void 0;
const common_1 = require("@nestjs/common");
const clicks_service_1 = require("./clicks.service");
const create_click_dto_1 = require("./dto/create-click.dto");
const update_click_dto_1 = require("./dto/update-click.dto");
const count_click_request_dto_1 = require("./dto/count-click-request-dto");
let ClicksController = class ClicksController {
    constructor(clicksService) {
        this.clicksService = clicksService;
    }
    create(createClickDto) {
        return this.clicksService.create(createClickDto);
    }
    findAll() {
        return this.clicksService.findAll();
    }
    async hasAtLeastThousandUnpaidClicks(countClickRequestDto) {
        return await this.clicksService.hasAtLeastThousandUnpaidClicks(countClickRequestDto.reference);
    }
    findOne(id) {
        return this.clicksService.findOne(id);
    }
    async markAllClicksAsPaid() {
        return await this.clicksService.markAllClicksAsPaid();
    }
    update(id, updateClickDto) {
        return this.clicksService.update(id, updateClickDto);
    }
    remove(id) {
        return this.clicksService.remove(id);
    }
};
exports.ClicksController = ClicksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_click_dto_1.CreateLinkDto]),
    __metadata("design:returntype", void 0)
], ClicksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClicksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/unpaid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [count_click_request_dto_1.CountClickRequestDto]),
    __metadata("design:returntype", Promise)
], ClicksController.prototype, "hasAtLeastThousandUnpaidClicks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClicksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/reset-unpaid-count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClicksController.prototype, "markAllClicksAsPaid", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_click_dto_1.UpdateLinkDto]),
    __metadata("design:returntype", void 0)
], ClicksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClicksController.prototype, "remove", null);
exports.ClicksController = ClicksController = __decorate([
    (0, common_1.Controller)('clicks'),
    __metadata("design:paramtypes", [clicks_service_1.ClicksService])
], ClicksController);
//# sourceMappingURL=clicks.controller.js.map