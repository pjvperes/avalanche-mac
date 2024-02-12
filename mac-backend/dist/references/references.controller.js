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
exports.ReferencesController = void 0;
const common_1 = require("@nestjs/common");
const references_service_1 = require("./references.service");
const create_reference_dto_1 = require("./dto/create-reference.dto");
const update_reference_dto_1 = require("./dto/update-reference.dto");
const check_link_by_reference_dto_1 = require("./dto/check-link-by-reference.dto");
let ReferencesController = class ReferencesController {
    constructor(referenceService) {
        this.referenceService = referenceService;
    }
    create(createReferenceDto) {
        return this.referenceService.create(createReferenceDto);
    }
    findAll() {
        return this.referenceService.findAll();
    }
    getLinkByReference(checkLinkByReferenceDto) {
        return this.referenceService.getLinkByReference(checkLinkByReferenceDto.reference);
    }
    findOne(id) {
        return this.referenceService.findOne(id);
    }
    update(id, updateReferenceDto) {
        return this.referenceService.update(id, updateReferenceDto);
    }
    remove(id) {
        return this.referenceService.remove(id);
    }
};
exports.ReferencesController = ReferencesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reference_dto_1.CreateReferenceDto]),
    __metadata("design:returntype", void 0)
], ReferencesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReferencesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/getLinkByReference'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_link_by_reference_dto_1.CheckLinkByReferenceDto]),
    __metadata("design:returntype", void 0)
], ReferencesController.prototype, "getLinkByReference", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReferencesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reference_dto_1.UpdateReferenceDto]),
    __metadata("design:returntype", void 0)
], ReferencesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReferencesController.prototype, "remove", null);
exports.ReferencesController = ReferencesController = __decorate([
    (0, common_1.Controller)('references'),
    __metadata("design:paramtypes", [references_service_1.ReferencesService])
], ReferencesController);
//# sourceMappingURL=references.controller.js.map